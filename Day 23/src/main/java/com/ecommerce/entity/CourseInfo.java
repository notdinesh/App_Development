package com.ecommerce.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "coursedetails")
public class CourseInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String coursename;
	private int duration;
	private int price;
	@ManyToOne
	@JoinColumn(name="uid")
	private User user;
	public CourseInfo() {
		//do nothing
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCoursename() {
		return coursename;
	}
	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public CourseInfo(long id, String coursename, int duration, int price, User user) {
		this.id = id;
		this.coursename = coursename;
		this.duration = duration;
		this.price = price;
		this.user = user;
	}
}
