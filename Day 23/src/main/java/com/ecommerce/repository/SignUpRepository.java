package com.ecommerce.repository;
import com.ecommerce.entity.SignUp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
public interface SignUpRepository  extends JpaRepository<SignUp, Integer> {
}
