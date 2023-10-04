package com.javatechie.spring.security.api.model;

import java.util.Collection;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

import org.springframework.security.core.GrantedAuthority;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User {
	@Id
	private int user_id;
	private String username;
	private String password;
	private String email;
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles;
	public String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}
	public void setPassword(String encryptPwd) {
		// TODO Auto-generated method stub
		
	}
	public Collection<? extends GrantedAuthority> getRoles() {
		// TODO Auto-generated method stub
		return null;
	}

}
