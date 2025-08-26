import React from 'react';
import '@fontsource-variable/inter'; 

import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="App" style={{ backgroundColor: '#0b1024', minHeight: '100vh' }} > 
      <HomePage />
    </div>
  );
}

export default App;