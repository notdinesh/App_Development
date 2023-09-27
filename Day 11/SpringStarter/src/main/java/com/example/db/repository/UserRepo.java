package com.example.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.db.model.Model;


@Repository
public interface UserRepo extends JpaRepository<Model,Integer>{

}
