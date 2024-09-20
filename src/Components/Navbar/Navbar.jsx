import React, { useEffect, useState } from 'react';
import './Navbar.css';

const LogoSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 519 123" className="logo-svg">
        <defs>
            <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#FF7854" />
                <stop offset="100%" stopColor="#FD267D" />
            </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
            <path className="logo-icon" fill="url(#a)" d="M31.5 49.6C55 41.5 59 20.4 56 1c0-.7.6-1.2 1.2-1C79.7 11 105 35 105 71c0 27.6-21.4 52-52.5 52a50 50 0 0 1-28.2-92.7c.6-.4 1.4 0 1.4.7.3 3.7 1.3 13 5.4 18.6h.4z"/>
            <path className="logo-text" fill="#424242" d="M171.2 101.1l1.7-2 5.3 16.8-.7.7c-4 3.7-10 5.6-17.7 5.6h-.3c-7 0-12.5-2-16.3-5.7-3.8-3.8-5.8-9.5-5.8-16.7V54h-13.5V35.5h13.5V13.2h20.8v22.3h16.5V54h-16.6v41.3c0 1.9.5 8 6.3 8 3 0 5.8-1.1 6.8-2.3zm11 19.2V35.6H203v84.7h-20.8zM192.5 1A12.5 12.5 0 1 1 180 13.6C180 6.8 185.7 1 192.5 1zm66.4 32.5c18 0 27.9 9.8 27.9 27.7v59H266v-54c-.4-9.6-5-14-14.8-14-8.8 0-15.9 5.4-19.5 10v58h-20.8V35.7h20.8v9c6-5.8 15.6-11 27.2-11zM356 44.4V4.6h20.8v115.8H356v-8.8a34.3 34.3 0 0 1-24.7 10.7c-22.7 0-37.9-17.8-37.9-44.3 0-26.6 15.2-44.4 37.9-44.4A34 34 0 0 1 356 44.4zm0 17.9a25.6 25.6 0 0 0-19.6-10c-12.9 0-21.5 10.3-21.5 25.7 0 15.3 8.6 25.6 21.5 25.6 7.5 0 15.7-4 19.6-9.8V62.3zm69.4-28.7c24.6 0 41.7 19 41.7 46v5.7h-62.9c2.1 11.9 11.5 19.5 24.3 19.5 8.1 0 17-3.5 22.1-8.6L452 95l9.9 14.2-1 .9a48.6 48.6 0 0 1-34.1 12.2c-26 0-44.3-18.3-44.3-44.4a42.8 42.8 0 0 1 43-44.3zm-21.3 36h42.7c-1.2-12.7-11.7-18.5-21.4-18.5-14.6 0-20.1 11-21.3 18.6zm113.3-36h1.5v21l-1.8-.3c-1.5-.3-3.4-.5-5.3-.5-6.7 0-16 4.7-19.5 9.7v56.7h-20.8V35.6h20.9V45c6.9-7.2 16-11.4 25-11.4z"/>
        </g>
    </svg>
);

const LangSVG = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="lang-svg">
        <g fill="currentColor">
            <path d="M380.9709,224.59H312.5155a74.4857,74.4857,0,0,0,.8793-11.415V139.9966a74.32,74.32,0,0,0-74.2359-74.2359H131.03a74.32,74.32,0,0,0-74.2358,74.2359v73.1782A74.32,74.32,0,0,0,131.03,287.4106h68.4724a73.82,73.82,0,0,0-.8962,11.4146v73.1787a74.3194,74.3194,0,0,0,74.2354,74.2354h108.13a74.3194,74.3194,0,0,0,74.2354-74.2354V298.8252A74.3194,74.3194,0,0,0,380.9709,224.59ZM72.7937,213.1748V139.9966A58.3019,58.3019,0,0,1,131.03,81.7607H239.1589a58.3016,58.3016,0,0,1,58.2359,58.2359v73.1782a58.3015,58.3015,0,0,1-58.2359,58.2358H131.03A58.3018,58.3018,0,0,1,72.7937,213.1748ZM386.9709,316.8091h-19.5a120.7225,120.7225,0,0,1-28.8229,50.6914,124.5227,124.5227,0,0,0,22.0022,14.08l10.8838,5.4648a8,8,0,1,1-7.18,14.2989l-10.8838-5.4649A140.1428,140.1428,0,0,1,326.87,378.5714a139.3809,139.3809,0,0,1-26.5289,17.3075l-10.8828,5.4649a8,8,0,0,1-7.18-14.2989l10.8828-5.4648a123.73,123.73,0,0,0,21.943-14.0639,123.9571,123.9571,0,0,1-20.2018-28.6436,8,8,0,1,1,14.2558-7.2647,107.9829,107.9829,0,0,0,17.714,25.062,105.445,105.445,0,0,0,23.8949-39.8608H266.8411a8,8,0,0,1,0-16h52.0654V276.6348a8,8,0,0,1,16,0v24.1743h52.0644a8,8,0,0,1,0,16Z"/>
            <path d="M199.4075,133.6084c-2.6123-6.4614-8.0967-10.4756-14.313-10.4756s-11.7012,4.0142-14.3135,10.4761l-34.5347,85.4316a8,8,0,1,0,14.834,5.9961l12.9473-32.0288H206.161l12.9472,32.0288a8,8,0,1,0,14.8339-5.9961Zm-28.912,43.3994,14.599-36.1147,14.5988,36.1147Z"/>
        </g>
    </svg>
);

const HamburgerIcon = () => (
    <svg className="hamburger-menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" width="40" height="40">
        <rect width="100" height="10" fill="white"></rect>
        <rect y="30" width="100" height="10" fill="white"></rect>
        <rect y="60" width="100" height="10" fill="white"></rect>
    </svg>
);

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [visible, setVisible] = useState(true);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const [safetyDropdownOpen, setSafetyDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // For hamburger menu

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        
        const boxElement = document.querySelector('.swiper-container'); 
        const boxTop = boxElement ? boxElement.getBoundingClientRect().top + window.scrollY : 0;
        const boxBottom = boxElement ? boxElement.getBoundingClientRect().bottom + window.scrollY : 0;
        
        if (currentScrollPos > boxTop && currentScrollPos < boxBottom) {
            setVisible(false); 
        } else {
            setVisible(scrollPosition > currentScrollPos || currentScrollPos < 640);
        }

        setScrollPosition(currentScrollPos);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle mobile menu
    };

    const toggleDropdown = (isOpen) => {
        setDropdownOpen(isOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); 
    }, [scrollPosition]);

    return (
        <nav className={`container ${visible ? 'visible' : 'hidden'}`}>
            <div className="left-items">
                <LogoSVG />
                <ul>
                    <li 
                        onMouseEnter={() => setProductsDropdownOpen(true)} 
                        onMouseLeave={() => setProductsDropdownOpen(false)}
                    >    Products
                        {productsDropdownOpen && (
                            <ul className="dropdown1"
                            onMouseEnter={() => setProductsDropdownOpen(true)} 
                        >
                                <a className="right"href="#">Premium Features</a>
                                <a className="right"href="#">Subscription Tiers</a>
                                <a className="left" href="#">Tinder Plus®</a>
                                <a className="left" href="#">Tinder Gold™</a>
                                <a className="left" href="#">Tinder Platinum™</a>
                                <a className="right"href="#">Tinder SELECT™</a>
                            </ul>
                        )}
                    </li>
                    <li>Learn</li>
                    <li onMouseEnter={() => setSafetyDropdownOpen(true)}
                        onMouseLeave={() => setSafetyDropdownOpen(false)}
                    > Safety
                        {safetyDropdownOpen && (
                            <ul className="dropdown2"
                            onMouseEnter={() => setSafetyDropdownOpen(true)} 
                    >
                                <a href="#">Community Guidlines</a>
                                <a href="#">Safety Tips</a>
                                <a href="#">Safety & Policy</a>
                                <a href="#">Safety & Reporting</a>
                                <a href="#">Security</a>
                            </ul>
                        )}
                    </li>
                    <li>Support</li>
                    <li>Download</li>
                </ul>
            </div>

            <div className="right-items">
                <ul>
                    <li>
                        <button className="btn1">
                            <LangSVG /> Language
                        </button>   
                    </li>
                    <li>
                        <button className="btn">Log in</button>
                    </li>
                </ul>
            </div>

            {/* Hamburger Menu for smaller screens */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                <HamburgerIcon />
            </div>

            {/* Mobile nav, conditionally rendered based on `menuOpen` */}
            {menuOpen && (
                <div className="mobile-nav">
                    <ul>
                        <li>Products</li>
                        <li>Learn</li>
                        <li>Safety</li>
                        <li>Support</li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
