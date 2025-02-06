import React from 'react';
import SimpleContainer from './SimpleContainer';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

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
    <SimpleContainer bgColor="#fffff">
      <header>
        <h1 style={{ fontSize: '3rem' }}>Events</h1>
      </header>
    
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {events[currentIndex].title}
          </Typography>
          <Typography color="text.secondary">
            {events[currentIndex].place}
          </Typography>
          <Typography color="text.secondary">
            {events[currentIndex].date}
          </Typography>
          <Typography variant="body2">
            {events[currentIndex].desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handlePrev}>Previous</Button>
          <Button size="small" onClick={handleNext}>Next</Button>
        </CardActions>
      </Card>

    </SimpleContainer>
  );
}

export default Events;

