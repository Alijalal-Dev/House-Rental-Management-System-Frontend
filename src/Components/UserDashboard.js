import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import '../Css/UserDashboard.css'

const UserDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchUserBookings();
  }, []);

  const fetchUserBookings = () => {
    const accessToken = localStorage.getItem('accessToken');

    // Include the access token in the request headers
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    axios
      .get('http://localhost:8000/api/bookings',{headers})
      .then((response) => {
        console.log(response)
         setBookings(response.data) 
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <h2>My Bookings</h2>
      <Row>
        {bookings && bookings.map((booking) => (
          <Col md={4} key={booking.id}>
            <Card>
              <Card.Body>
              <Card.Img variant="top" src={`http://localhost:8000/storage/${booking.property.image}`} />
                <Card.Title className='title'>{booking.property.title}</Card.Title>
                <Card.Text> <span className='book'>Location:</span> {booking.property.location}</Card.Text>
                <Card.Text>
                 <span className='book'>Booking Period:</span>  {booking.start_date} <span style={{color:'black'}}>to </span>{booking.end_date}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserDashboard;
