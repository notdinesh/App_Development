package com.example.db.model;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;


@Entity
@Setter
@Getter

public class Model {
		
		private String userEmail;
		private String userPassword;
		
}
