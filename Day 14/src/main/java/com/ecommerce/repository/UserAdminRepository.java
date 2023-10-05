package com.ecommerce.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.entity.UserInfo;
@Repository
public interface UserAdminRepository extends JpaRepository<UserInfo, Long>{
	public Optional findByEmail(String email);
}
