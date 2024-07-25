import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import '../Css/propertyList.css'; // Import a CSS file to apply custom styles

const PropertyListingPage = ({ onPropertyBooked }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = () => {
    axios
      .get('http://localhost:8000/api/properties')
      .then((response) => setProperties(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <Container className="property-listing-container">
      <h2 className="property-listing-heading">Available Properties</h2>
      <Row>
        {properties.map((property) => (
          <Col md={4} key={property.id}>
            <Card className="property-card">
              <div className="property-img-container">
                <Card.Img
                  className="property-img"
                  variant="top"
                  src={`http://localhost:8000/storage/${property.image}`}
                />
              </div>
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.location}</Card.Text>
                <Card.Text><span className='color'>Price:</span><b> ${property.price}</b></Card.Text>
                <Link to={`/properties/${property.id}`} className="view-details-btn">
                   <FaArrowRight className="icon" /> View Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PropertyListingPage;
