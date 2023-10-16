package com.ecommerce.service;
import com.ecommerce.entity.TrainerInfo;
import com.ecommerce.repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class TrainerService {
    @Autowired
    TrainerRepository trainerRepository;
    public List<TrainerInfo> getDetails()
    {
        return trainerRepository.findAll();
    }

    //	}
    public TrainerInfo create(TrainerInfo trainerInfo)
    {
        return trainerRepository.save(trainerInfo);
    }
    public Optional<TrainerInfo> getTrainerById(Long id)
    {
        return trainerRepository.findById(id);
    }

    public String delete(Long id)
    {
        trainerRepository.deleteById((long) id);
        return id+" is deleted";

    }
    public TrainerInfo update(TrainerInfo new_record, Long id) {

        TrainerInfo updateTrainer = trainerRepository.findById(id).get();

        if(updateTrainer == null)
        {
            return updateTrainer;
        }
        else
        {
            updateTrainer.setTrainername(new_record.getTrainername());
            updateTrainer.setEmail(new_record.getEmail());
            updateTrainer.setCategory(new_record.getCategory());

        }

        return trainerRepository.save(updateTrainer);
    }
}
