import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';
import PropertyListing from './Components/PropertyListing';
import BookingPage from './Components/BookingPage';
import SignUpPage from './Components/SignUpPage';
import PropertyDetailPage from './Components/PropertyDetail';
import NavigationBar from './Components/NavigationBar';
import UserDashboard from './Components/UserDashboard';
import LogoutPage from './Components/LogoutPage';
import LoginPage from './Components/LoginPage';

const App = () => {
  const [properties, setProperties] = useState([]);
  const [bookings, setBookings] = useState([]);

  const removeProperty = (propertyId) => {
    setProperties(properties.filter((property) => property.id !== propertyId));
  };

  const removeBooking = (bookingId) => {
    setBookings(bookings.filter((booking) => booking.id !== bookingId));
  };

  const handleBookingSuccess = (data) => {
    setBookings([...bookings, data]);
  };

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <video className="video-background" autoPlay loop muted>
        <source src="./videoHouse.mp4" type="video/mp4" />
      </video>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/properties"
            element={<PropertyListing properties={properties} removeProperty={removeProperty} />}
          />
          <Route path="/properties/:id" element={<PropertyDetailPage />} />
          <Route
            path="/booking/:id"
            element={<BookingPage  onBookingSuccess={handleBookingSuccess} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/dashboard"
            element={<UserDashboard bookings={bookings} removeBooking={removeBooking} />}
          />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
