import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid } from '@mui/material'; // Assuming you're using Material-UI

const Services = () => {
  const [services, setServices] = useState([]);
  const baseUrl = 'http://localhost:8000/api/v1'; // Replace with your API base URL

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${baseUrl}/partner/service-types/`);
        if (response.status === 200) {
          setServices(response.data); // Assuming your API response is an array of service objects
        }
      } catch (error) {
        console.error('Error fetching services:', error);
        // Handle error state or show a message to the user
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <h2>List of Services</h2>
      <Grid container spacing={3}>
        {services.map(service => (
          <Grid item key={service.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {service.name}
                </Typography>
                {/* Additional details if needed */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Services;
