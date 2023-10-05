package com.ecommerce.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.repository.UserAdminRepository;
import com.ecommerce.entity.UserInfo;
import com.ecommerce.entity.CourseInfo;
@Service
public class UserService {
	@Autowired
	UserAdminRepository userAdminRepository;
	public UserInfo create(UserInfo openI) {
		return userAdminRepository.save(openI);
	}
	public Optional<UserInfo>read(String email){
		return userAdminRepository.findByEmail(email);
	}
	public List<UserInfo> getDetails()
	{
		return userAdminRepository.findAll();
	}
	public String delete(Long id)
	  {
		  userAdminRepository.deleteById((long) id);
	    return id+" is deleted";
	     
	  }
	  
	
}
