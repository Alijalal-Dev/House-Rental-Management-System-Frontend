import React from 'react';
import { Container, Row, Col  } from 'react-bootstrap';
//import { BsSearch } from 'react-icons/bs';
import '../Css/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={6} lg={5}>
            <h1 className="text-center">Welcome to Home Rent</h1>
            <p className="text-center">Find your perfect home for rent</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
