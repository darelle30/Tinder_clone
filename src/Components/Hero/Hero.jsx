import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight); // Get the height of the navbar
    }

    const handleScroll = () => {
      setScrollY(window.scrollY); // Track how far the user has scrolled
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Start fading out once the hero section scrolls past the bottom of the navbar
  const startFadeOutPoint = navbarHeight; // When scrolling passes the bottom of navbar
  const totalFadeOutDistance = 250; // Total scroll distance after the navbar where fading happens
  
  // Calculate visibility factor based on how far the user has scrolled past the navbar
  const visibilityFactor = window.innerWidth <= 895 ? 1 : Math.max(1 - (scrollY - startFadeOutPoint) / totalFadeOutDistance, 0);

  return (
    <div className="hero container">
      <div
        className="hero-text"
        style={{
          opacity: visibilityFactor,
          transform: `translateY(${(1 - visibilityFactor) * -10}px)`, // Move up slightly as it fades
        }}
      >
        <h1>Swipe Right®</h1>



      <div className='button-container'>
        <button className="ca1">Create Account</button>
        <button className="ca0">Log in</button>
      </div>
      </div>


      <div className="img-playstore">
        <a href="https://play.google.com/store/search?q=tinder&c=apps&hl=en" className="g-playbutton">
                <img src="src/assets/google play.webp" alt="Get it on Google Play"/>
              </a>
	  </div>
      <div
        className="hero-text-down"
        style={{
          opacity: visibilityFactor,
          transform: `translateY(${(1 - visibilityFactor) * 0}px)`, // Move up slightly as it fades
        }}
      >
        <p>All photos are of models and used for illustrative purposes only</p>
      </div>
    </div>
  );
}

export default Hero;
