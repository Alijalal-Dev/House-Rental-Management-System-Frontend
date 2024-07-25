import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        // Get the access token from local storage
        const accessToken = localStorage.getItem('accessToken');

        // Include the access token in the request headers
        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };

        // Perform logout logic here
        const response =await axios.post('http://localhost:8000/api/logout',null,{
          //withCredentials: true, // Include cookies if using session-based authentication
          headers: headers, // Include the headers in the request
        });
        console.log(response)
        

        // Clear user session or token from local storage
        localStorage.removeItem('accessToken');

        // Redirect to the home page
        navigate('/');
      } catch (error) {
        console.error('Logout failed:', error);
        // Handle error if logout fails
        // For example, show an error message to the user
      }
    };

    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default LogoutPage;
