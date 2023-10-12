import React, { useState, useEffect } from 'react';

const UsersPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch('http://localhost:8080/courses', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(response.data);
        setCourses(data);
      } else {
        console.error('Failed to fetch course data. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="users-page">
      <h1>Course List for Users</h1>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Duration (hours)</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.coursename}</td>
              <td>{course.duration}</td>
              <td>{course.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
