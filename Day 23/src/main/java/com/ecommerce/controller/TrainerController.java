package com.ecommerce.controller;
import com.ecommerce.entity.CourseInfo;
import org.springframework.web.bind.annotation.*;
import com.ecommerce.entity.TrainerInfo;
import com.ecommerce.service.TrainerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/trainer")
public class TrainerController {
    @Autowired
    TrainerService trainerService;
    @GetMapping("/get")
    public List<TrainerInfo> getDetails()
    {
        return trainerService.getDetails();
    }

    @PostMapping("/post")
    public ResponseEntity<TrainerInfo> create(final @RequestBody TrainerInfo trainerInfo)
    {
        TrainerInfo createCourse=trainerService.create(trainerInfo);
        return ResponseEntity.ok(createCourse);
    }
    @PutMapping("/put/{id}")
    public void update(final @RequestBody TrainerInfo new_record, @PathVariable("id") Long id) {

        trainerService.update(new_record, id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<TrainerInfo>> getTrainerById (final @PathVariable Long id){
        Optional<TrainerInfo> createdCourse   = trainerService.getTrainerById(id);
        return ResponseEntity.ok(createdCourse);
    }

    @DeleteMapping("/{id}")
    public void  delete (final @PathVariable("id") Long id)
    {
        trainerService.delete(id);
    }
}
