import React from 'react';
import SimpleContainer from './SimpleContainer';
import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';

export const Events = () => {
  const events = [
    { title: 'Coming Soon', place: '', date: '', desc: 'Stay tuned for upcoming events!' },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box sx={{ backgroundColor: 'white', py: 6 }}> 
      <SimpleContainer>
        <header>
          <Typography 
            variant="h4" 
            sx={{ 
              textAlign: 'center', 
              fontSize: '2.5rem', 
              fontWeight: '600', 
              color: 'rgb(54, 54, 54)', 
              mb: 3 
            }}
          >
            Events
          </Typography>
        </header>

        <Card sx={{ backgroundColor: 'rgb(54, 54, 54)', color: 'white', maxWidth: 600, mx: 'auto' }}>
          <CardContent>
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ fontSize: '1.5rem', fontWeight: '600', mb: 1 }}
            >
              {events[currentIndex].title}
            </Typography>
            <Typography sx={{ color: 'rgb(200, 200, 200)', fontSize: '1rem', mb: 0.5 }}>
              {events[currentIndex].place}
            </Typography>
            <Typography sx={{ color: 'rgb(200, 200, 200)', fontSize: '1rem', mb: 2 }}>
              {events[currentIndex].date}
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6, fontSize: '1rem', color: 'rgb(220, 220, 220)' }}>
              {events[currentIndex].desc}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button 
              size="small" 
              onClick={handlePrev} 
              sx={{ color: 'white', '&:hover': { color: 'rgb(180, 180, 180)' } }}
            >
              Previous
            </Button>
            <Button 
              size="small" 
              onClick={handleNext} 
              sx={{ color: 'white', '&:hover': { color: 'rgb(180, 180, 180)' } }}
            >
              Next
            </Button>
          </CardActions>
        </Card>
      </SimpleContainer>
    </Box>
  );
} 

export default Events;
