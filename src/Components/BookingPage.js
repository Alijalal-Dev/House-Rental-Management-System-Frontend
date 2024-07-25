import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Css/BookingPage.css'

const BookingPage = ({ onBookingSuccess }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { id } = useParams();
  const navigate=useNavigate()

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log(id)
    const accessToken = localStorage.getItem('accessToken');

    // Include the access token in the request headers
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    if (startDate && endDate) {
      axios
        .post(`http://localhost:8000/api/bookings`, {
          property_id: id,
          start_date: startDate,
          end_date: endDate,
        },{headers})
        .then((response) => {
          console.log(response)
          onBookingSuccess(response.data);
          setStartDate('');
          setEndDate('');
          navigate('/dashboard')
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('Please select valid dates');
    }
  };

  return (
    <Container className='container'>
      <div className="row booking-page-container">
        {/* Left column for the photo (modify 'src' with your image path) */}
        <div className="col-md-6 image">
          <img src="/book.jpg" alt='' style={{ width: '80%' }} />
        </div>
        {/* Right column for the form elements */}
        <div className="booking-form col-md-6">
        <h2>Book Property</h2>
        <Form onSubmit={handleBookingSubmit}>
          <Form.Group controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </Form.Group>

          <Button className="btn-success" type="submit">
            Book Now
          </Button>
        </Form>
      </div>
      </div>
    </Container>
  );
};

export default BookingPage;
