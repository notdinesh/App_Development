package com.ecommerce.repository;
import com.ecommerce.entity.TrainerInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainerRepository extends JpaRepository<TrainerInfo, Long> {
}
