import React, { useState } from 'react';
import './CoursePage.css';

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [coursename, setCoursename] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [editCourseId, setEditCourseId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/courses', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json', // You can include other headers if needed
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      } else {
        console.error('Failed to fetch course data. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  
  fetchData();

  
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      coursename,
      duration,
      price,
    };

    try {
      let response;

      if (editCourseId) {
        // Replace 'YOUR_BEARER_TOKEN_HERE' with your actual bearer token
        const token = localStorage.getItem('token');
      
        const response = await fetch(
          `http://localhost:8080/api/courses/put/${editCourseId}`,
          {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${token}`, // Include the bearer token
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          }
        );
      } else {
        // Add new course entry
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8080/api/courses/post/', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`, // Include the bearer token
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      }

      if (response.ok) {
        const updatedCourse = await response.json();
        if (editCourseId) {
          // Update the existing course entry in the state
          const updatedCourses = courses.map((course) => {
            if (course.id === updatedCourse.id) {
              return updatedCourse;
            }
            return course;
          });
          setCourses(updatedCourses);
        } else {
          // Add the new course entry to the state
          setCourses([...courses, updatedCourse]);
        }

        setCoursename('');
        setDuration('');
        setPrice('');
        setShowForm(false);
        setEditCourseId(null);
      } else {
        console.error('Failed to add/update course. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleFormCancel = () => {
    setCoursename('');
    setDuration('');
    setPrice('');
    setShowForm(false);
    setEditCourseId(null);
  };

  const handleEditCourse = (id) => {
    const selectedCourse = courses.find((course) => course.id === id);
    if (selectedCourse) {
      setCoursename(selectedCourse.coursename);
      setDuration(selectedCourse.duration);
      setPrice(selectedCourse.price);
      setEditCourseId(id);
      setShowForm(true);
    }
  };

  const handleDeleteCourse = async (id) => {
    // Replace 'YOUR_BEARER_TOKEN_HERE' with your actual bearer token
    const token = localStorage.getItem('token');

try {
  const response = await fetch(`http://localhost:8080/api/courses/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`, // Include the bearer token
    },
  });

  if (response.ok) {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
  } else {
    console.error('Failed to delete course. Please try again.');
  }
}
 catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
        <div className="course-container" style={{ marginTop: '5%' }}>
          <h1>Course Details</h1>
          <div className="buttons-to-add">
            <button className="add-button" onClick={() => setShowForm(true)}>
              Add Course
            </button>
          </div>
          {showForm && (
            <div className="add-form">
              <form onSubmit={handleFormSubmit}>
                <ul className="form-list">
                  <li className="form-item">
                    <label className="form-field-input-data" htmlFor="coursename">
                      Course Name:
                    </label>
                    <input
                      id="courseName"
                      type="text"
                      value={coursename}
                      onChange={(e) => setCoursename(e.target.value)}
                    />
                  </li>
                  <li className="form-item">
                    <label
                      className="form-field-input-data"
                      htmlFor="duration"
                    >
                      Duration (hours):
                    </label>
                    <input
                      id="duration"
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    />
                  </li>
                  <li className="form-item">
                    <label
                      className="form-field-input-data"
                      htmlFor="price"
                    >
                      Price:
                    </label>
                    <input
                      id="price"
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </li>
                </ul>
                <div className="form-buttons">
                  <button className="submit-button" type="submit">
                    {editCourseId ? 'Update' : 'Create'}
                  </button>
                  <button
                    className="cancel-button"
                    type="button"
                    onClick={handleFormCancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search courses"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <table className="course-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Duration (hours)</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses
                .filter((course) =>
                  course.coursename.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  course.duration.toString().includes(searchQuery) ||
                  course.price.toString().includes(searchQuery)
                )
                .map((course) => (
                  <tr key={course.id}>
                    <td>{course.coursename}</td>
                    <td>{course.duration}</td>
                    <td>{course.price}</td>
                    <td>
                      <button
                        className="edit-button"
                        onClick={() => handleEditCourse(course.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDeleteCourse(course.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
  );
};

export default CoursePage;
