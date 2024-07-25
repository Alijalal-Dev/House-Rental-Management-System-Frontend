/* import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { RiMailFill, RiLockPasswordFill } from 'react-icons/ri';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make an API request to log in the user
    // Replace the API endpoint with your own
    axios
      .post('http://localhost:8000/api/login', { email, password })
      .then((response) => {
        // Handle the response data
        const {token} = response.data
        console.log(response.data);
        localStorage.setItem('accessToken', token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-page">
      <Container>
        <h1 className="text-center mb-4">Log In</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>
              <RiMailFill className="mr-2" />
              Email
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>
              <RiLockPasswordFill className="mr-2" />
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" >
            Log In
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default LoginPage; */

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { RiMailFill, RiLockPasswordFill,RiEyeFill, RiEyeCloseFill  } from 'react-icons/ri';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make an API request to log in the user
    // Replace the API endpoint with your own
    axios
      .post('http://localhost:8000/api/login', { email, password })
      .then((response) => {
        // Handle the response data
        const { token } = response.data;
        console.log(response.data);
        localStorage.setItem('accessToken', token);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="login-page">
      <div className="glass-background" />
      <div className="login-container">
        <h1 className="text-center mb-4">Log In</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>
              <RiMailFill className="mr-2" />
              Email
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>
              <RiLockPasswordFill className="mr-2" />
              Password
            </Form.Label>
            <div className="password-input">
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={handlePasswordVisibility}>
                {showPassword ? <RiEyeCloseFill /> : <RiEyeFill />}
              </span>
            </div>
          </Form.Group>

          <Button variant="success" type="submit" block>
            Log In
          </Button>
        </Form>
      </div>
      <style jsx>{`
        .login-page {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%),
            url('path/to/your/background-image.jpg') center/cover no-repeat;
        }

        .glass-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
         
        }

        .login-container {
          background: #ffffff;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          height:50vh;
          width: 100%;
          z-index: 1;
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .password-input {
          position: relative;
        }

        .password-input span {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }


        .login-page h1 {
          color: #007f3b; /* Dark green text */
        }

        .form-group label {
          font-weight: bold;
        }

        .form-control {
          border: 2px solid #007f3b; /* Dark green border */
        }

        .form-control:focus {
          box-shadow: none;
          border-color: #007f3b; /* Dark green border on focus */
        }

        .btn-primary {
          background-color: #007f3b; /* Dark green button */
          border-color: #007f3b;
        }

        .btn-primary:hover {
          background-color: #00592b; /* Darker green on hover */
        }

        .btn-primary:focus {
          box-shadow: none;
        }

        .btn-primary:active {
          background-color: #004821; /* Darkest green on click */
        }
      `}</style>
    </div>
  );
};

export default LoginPage;

