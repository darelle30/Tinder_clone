import React, { useState } from 'react';
import './Details.css';

function Details() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const isSelected = (item) => selectedItem === item;

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h3>Legal</h3>
            <ul>
              <li>
                <a 
                  href="#"
                  onClick={() => handleItemClick('Privacy')}
                  className={isSelected('Privacy') ? 'selected' : ''}
                >
                  Privacy
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={() => handleItemClick('Consumer Health Data Privacy Policy')}
                  className={isSelected('Consumer Health Data Privacy Policy') ? 'selected' : ''}
                >
                  <span>Consumer Health Data Privacy Policy</span>
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={() => handleItemClick('Terms')}
                  className={isSelected('Terms') ? 'selected' : ''}
                >
                  Terms
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={() => handleItemClick('Cookie Policy')}
                  className={isSelected('Cookie Policy') ? 'selected' : ''}
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={() => handleItemClick('Intellectual Property')}
                  className={isSelected('Intellectual Property') ? 'selected' : ''}
                >
                  Intellectual Property
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Careers</h3>
            <ul>
              <li>
                <a 
                  href="#"
                  onClick={() => handleItemClick('Careers Portal')}
                  className={isSelected('Careers Portal') ? 'selected' : ''}
                >
                  Careers Portal
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={() => handleItemClick('Tech Blog')}
                  className={isSelected('Tech Blog') ? 'selected' : ''}
                >
                  Tech Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Social</h3>
            <ul className="social-icons">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><span><i className="fab fa-instagram"></i></span></a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><span><i className="fab fa-tiktok"></i></span></a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><span><i className="fab fa-youtube"></i></span></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><span><i className="fab fa-twitter"></i></span></a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><span><i className="fab fa-facebook-f"></i></span></a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <ul>
            <li>
                <a 
                  href="#"
                  onClick={() => handleItemClick('Destinations')}
                  className={isSelected('Destinations') ? 'selected' : ''}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={() => handleItemClick('Destinations')}
                  className={isSelected('Destinations') ? 'selected' : ''}
                >
                  Destinations
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={() => handleItemClick('Press Room')}
                  className={isSelected('Press Room') ? 'selected' : ''}
                >
                  Press Room
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={() => handleItemClick('Contact')}
                  className={isSelected('Contact') ? 'selected' : ''}
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={() => handleItemClick('Promo Code')}
                  className={isSelected('Promo Code') ? 'selected' : ''}
                >
                  Promo Code
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='divider'></div>

        <div className='app-download-row'>
          <div className="col-md-6">
            <h3>Get the app!</h3>
          </div>
          <div className="col-md-6 app-download-buttons">
            <a href="https://apps.apple.com/us/app/tinder-dating-app-chat-date/id547702041" className="app-store-button">
              <img src="src/assets/appstore.webp" alt="Download on the App Store" />
            </a>
            <a href="https://play.google.com/store/search?q=tinder&c=apps&hl=en" className="google-play-button">
              <img src="src/assets/google play.webp" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
        <div className="app-description">
          <p>Single people, listen up: If you’re looking for love, want to start dating, or just keep it casual, you need to be on Tinder. 
          With over 55 billion matches made, it’s the place to be to meet your next best match. Let’s be real, the dating landscape looks 
          very different today, as most people are meeting online. With Tinder, the world’s most popular free dating app, you have millions 
          of other single people at your fingertips and they’re all ready to meet someone like you. Whether you’re straight or in the LGBTQIA 
          community, Tinder’s here to bring you all the sparks.</p>

          <p>There really is something for everyone on Tinder. Want to get into a relationship? You got it. Trying to find some new friends? 
          Say no more. New kid on campus and looking to make the most of your college experience? Tinder U’s got you covered. Tinder isn’t 
          your average dating site — it’s the most diverse dating app, where adults of all backgrounds and experiences are invited to make 
          connections, memories, and everything in between.</p>
        </div>

        <div className='divider'></div>

        {/* Links section like in the image */}
        <div className="footer-bottom">
          <ul className="footer-links">
            <li><a href="#">FAQ</a></li>
            <li>/</li>
            <li><a href="#">Safety Tips</a></li>
            <li>/</li>
            <li><a href="#">Terms</a></li>
            <li>/</li>
            <li><a href="#">Cookie Policy</a></li>
            <li>/</li>
            <li><a href="#">Privacy Settings</a></li>
          </ul>
          <p className="copyright">&copy; 2024 Tinder LLC, All Rights Reserved.</p>
        </div>
        </div>
    </footer>
  );
}

export default Details;
