import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    password2: '',
    user_type: 'customer', // Default user_type
  });

  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSignInWithGoogle = async (response) => {
    // Handle the sign-in response here
    console.log('Google sign-in response:', response);
    const payload = response.credential;
    const server_res = await axios.post("http://localhost:800/api/v1/auth/google", { "access_token": payload });
    console.log(server_res);
  };

  useEffect(() => {
    const loadGoogleScript = () => {
      const script = document.createElement('script');
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        google.accounts.id.initialize({
          client_id: import.meta.env.VITE_CLIENT_ID,
          callback: handleSignInWithGoogle,
        });
        google.accounts.id.renderButton(
          document.getElementById("signInDiv"),
          { theme: "outline", size: "large", text: "continue_with", shape: "circle", width: "380" }
        );
      };
      document.body.appendChild(script);
    };

    if (!window.google) {
      loadGoogleScript();
    } else {
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_CLIENT_ID,
        callback: handleSignInWithGoogle,
      });
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large", text: "continue_with", shape: "circle", width: "380" }
      );
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Make call to API
      const response = await axios.post('http://localhost:8000/api/v1/auth/register/', formData);
      const { message, data } = response.data;
  
      if (response.status === 200 || response.status === 201) {
        toast.success(message);
        setMessage(message);
        setErrors({});
        // Redirect to the same verification page for all users
        navigate('/verify');
      } else {
        toast.info(message);
        setMessage(message);
        setErrors({});
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { data, status } = error.response;
        setErrors(data);
  
        if (status === 400) {
          toast.error(data.error || 'Email already registered and verified.');
        } else {
          toast.error('An error occurred. Please try again.');
        }
      } else if (error.request) {
        setMessage('No response from the server. Please try again.');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    }
  };
  

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {message && <p className="text-red-500 text-center mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
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
            <label htmlFor="first_name" className="block text-gray-700 font-medium mb-2">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="last_name" className="block text-gray-700 font-medium mb-2">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name}</p>}
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
          <div className="mb-4">
            <label htmlFor="password2" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              id="password2"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.password2 && <p className="text-red-500 text-sm">{errors.password2}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="user_type" className="block text-gray-700 font-medium mb-2">User Type</label>
            <select
              id="user_type"
              name="user_type"
              value={formData.user_type}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="customer">Customer</option>
              <option value="partner">Partner</option>
            </select>
            {errors.user_type && <p className="text-red-500 text-sm">{errors.user_type}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </form>
        {errors.non_field_errors && (
          <p className="text-red-500 text-sm">{errors.non_field_errors[0]}</p>
        )}
        <ToastContainer />
        <h3 className="text-center my-4">Or</h3>
        <div className="googleContainer text-center">
          <div id="signInDiv" />
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Already have an account? <Link to="/login" className="text-indigo-500 hover:text-indigo-600">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
