package com.ecommerce.service;

import java.util.List; 
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import com.ecommerce.repository.CourseRepository;
import com.ecommerce.entity.CourseInfo;
@Service
public class CourseService{
	@Autowired
	CourseRepository courseRepository;
public List<CourseInfo> getAllCourses() {
		return (List<CourseInfo>) courseRepository.findAll();
}


public CourseInfo getCourseById(long id) {
		return courseRepository.findById(id).orElse(null);
}

public void addCourse(CourseInfo course) {
		courseRepository.save(course);
}

public void updateCourse(CourseInfo course) {
		courseRepository.save(course);
		}

public void deleteCourse(long id) {
		courseRepository.deleteById(id);
}
}