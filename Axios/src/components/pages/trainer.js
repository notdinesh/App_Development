import React, { useState, useEffect } from 'react';
import './trainer.css';
const TrainerPage = () => {
  const [trainers, setTrainers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [trainername, setTrainername] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [editTrainerId, setEditTrainerId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/api/trainer/get', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTrainers(data);
      } else {
        console.error('Failed to fetch trainer data. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      trainername,
      email,
      category,
    };

    try {
      let response;

      if (editTrainerId) {
        const token = localStorage.getItem('token');
      
        response = await fetch(
          `http://localhost:8080/api/trainer/put/${editTrainerId}`,
          {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          }
        );
      } else {
        const token = localStorage.getItem('token');
        response = await fetch('http://localhost:8080/api/trainer/post', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      }

      if (response.ok) {
        const updatedTrainer = await response.json();
        if (editTrainerId) {
          const updatedTrainers = trainers.map((trainer) => {
            if (trainer.id === updatedTrainer.id) {
              return updatedTrainer;
            }
            return trainer;
          });
          setTrainers(updatedTrainers);
        } else {
          setTrainers([...trainers, updatedTrainer]);
        }

        setTrainername('');
        setEmail('');
        setCategory('');
        setShowForm(false);
        setEditTrainerId(null);
      } else {
        console.error('Failed to add/update trainer. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleFormCancel = () => {
    setTrainername('');
    setEmail('');
    setCategory('');
    setShowForm(false);
    setEditTrainerId(null);
  };

  const handleEditTrainer = (id) => {
    const selectedTrainer = trainers.find((trainer) => trainer.id === id);
    if (selectedTrainer) {
      setTrainername(selectedTrainer.trainername);
      setEmail(selectedTrainer.email);
      setCategory(selectedTrainer.category);
      setEditTrainerId(id);
      setShowForm(true);
    }
  };

  const handleDeleteTrainer = async (id) => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`http://localhost:8080/api/trainer/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const updatedTrainers = trainers.filter((trainer) => trainer.id !== id);
        setTrainers(updatedTrainers);
      } else {
        console.error('Failed to delete trainer. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <h1>Trainer Details</h1>
      <div>
        <button onClick={() => setShowForm(true)}>Add Trainer</button>
      </div>
      {showForm && (
        <div>
          <form onSubmit={handleFormSubmit}>
            <ul>
              <li>
                <label htmlFor="trainername">Trainer Name:</label>
                <input
                  id="trainername"
                  type="text"
                  value={trainername}
                  onChange={(e) => setTrainername(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="category">Category:</label>
                <input
                  id="category"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </li>
            </ul>
            <div>
              <button type="submit">{editTrainerId ? 'Update' : 'Create'}</button>
              <button type="button" onClick={handleFormCancel}>Cancel</button>
            </div>
          </form>
        </div>
      )}
      <div>
        <input
          type="text"
          placeholder="Search trainers"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Trainer Name</th>
            <th>Email</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {trainers
            .filter((trainer) =>
              trainer.trainername.toLowerCase().includes(searchQuery.toLowerCase()) ||
              trainer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
              trainer.category.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((trainer) => (
              <tr key={trainer.id}>
                <td>{trainer.trainername}</td>
                <td>{trainer.email}</td>
                <td>{trainer.category}</td>
                <td>
                  <button onClick={() => handleEditTrainer(trainer.id)}>Edit</button>
                  <button onClick={() => handleDeleteTrainer(trainer.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainerPage;
