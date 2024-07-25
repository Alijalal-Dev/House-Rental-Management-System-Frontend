import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../Css/PropertyDetailPage.css'

const PropertyDetailPage = () => {
  const [property, setProperty] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchPropertyDetails(id);
  }, [id]);

  const fetchPropertyDetails = (propertyId) => {
    axios
      .get(`http://localhost:8000/api/properties/${propertyId}`)
      .then((response) => setProperty(response.data))
      .catch((error) => console.log(error));
      console.log(propertyId)
  };
  

  if (!property) {
    return <div>Loading...</div>;
  }

  const { id: propertyId, title, description, location, price, image } = property;

  return (
    <Container className="property-detail-container">
      <Row>
        <Col md={6}>
          <Card className="property-card">
            <Card.Img variant="top" src={`http://localhost:8000/storage/${image}`} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text><span className='color'>Location:</span> {location}</Card.Text>
              <Card.Text><span className='color'>Price:</span><b> ${price}</b></Card.Text>
              <Link to={`/booking/${propertyId}`}>
                <Button>Rent Now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyDetailPage;
