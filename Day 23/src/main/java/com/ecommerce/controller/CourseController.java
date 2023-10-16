package com.ecommerce.controller;

import java.util.List;    
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


import com.ecommerce.entity.CourseInfo;
import com.ecommerce.service.CourseService;

@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin(origins = "")
@RestController
@RequestMapping("/courses")
public class CourseController {
	@Autowired
	private CourseService courseService;

	@GetMapping
	public List<CourseInfo> getAllCourses() {
		return courseService.getAllCourses();
	}

	@GetMapping("/{id}")
	public CourseInfo getCourseById(@PathVariable long id) {
		return courseService.getCourseById(id);
	}

	@PostMapping
	public void addCourse(@RequestBody CourseInfo course) {
		courseService.addCourse(course);
	}

	@PutMapping("/{id}")
	public void updateCourse(@PathVariable long id, @RequestBody CourseInfo course) {
		courseService.updateCourse(course);
	}

	@DeleteMapping("/{id}")
	public void deleteCourse(@PathVariable long id) {
		courseService.deleteCourse(id);
	}
}