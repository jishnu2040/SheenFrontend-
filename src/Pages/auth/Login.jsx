import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/v1/auth/login/', formData);
      const user = {
        "email": response.data.email,
        "name": response.data.full_name
      };
      const user_type = response.data.user_type;

      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("access", JSON.stringify(response.data.access_token));
        localStorage.setItem("refresh", JSON.stringify(response.data.refresh_token));
        toast.success("Login successful");
        setErrors({});

        if (user_type === 'partner') {
          setTimeout(() => {
            navigate('/partner/dashboard');
          }, 1000);
        }
        else {
          setTimeout(() => {
            navigate('/');
          }, 1000);
       }
        

        
      } else {
        toast.error("Login failed. Please check your credentials.");
        setErrors({});
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.response && error.response.data) {
        setErrors(error.response.data);
        toast.error(error.response.data.message || 'An error occurred. Please try again.');
      } else if (error.request) {
        toast.error('No response from the server. Please try again.');
      } else {
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div className="text-right mb-4">
            <Link to="/forgotpassword" className="text-indigo-500 hover:text-indigo-600">Forgot Password?</Link>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <p className="text-gray-600">Don't have an account? <Link to="/signup" className="text-indigo-500 hover:text-indigo-600">Register</Link></p>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
