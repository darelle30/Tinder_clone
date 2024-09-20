import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Box from './Components/Box/Box';
import Details from './Components/Details/Details';
import Preload from './Components/Preload/Preload';

const App = () => {
  const [loading, setLoading] = useState(true); // Loading state

  // useEffect to control the loading state timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // After 3 seconds, hide the Preload component
    }, 1000); // You can adjust this time to your preference

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? ( // Conditional rendering: Show Preload if loading is true
        <Preload />
      ) : ( // Otherwise, render the rest of the app
        <>
          <Navbar />
          <Hero />
          <Box />
          <Details />
        </>
      )}
    </div>
  );
};

export default App;
