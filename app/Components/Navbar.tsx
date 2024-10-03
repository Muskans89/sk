"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll to change background

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // If scrollY is greater than a specific value (e.g., 50px), change the background of the navbar
      if (window.scrollY > 50) {
        setIsScrolled(true); // Change background to opaque
      } else {
        setIsScrolled(false); // Keep background transparent
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Futura:wght@400;700&display=swap');

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 1000;
          transition: background-color 0.3s ease, top 0.3s ease;
          background-color: transparent; /* Transparent by default */
        }

        .navbar.scrolled {
          background-color: rgba(0, 0, 0, 0.2); /* Opaque when scrolled */
        }

        .logo {
          font-family: 'Futura', sans-serif;
          font-size: 32px;
          font-weight: 400;
          color: white;
        }

        .logo-subtext {
          font-size: 18px;
          font-weight: 400;
          margin-top: -8px;
          color: white;
        }

        .menu-list {
          display: flex;
          gap: 40px;
          font-size: 14px;
          font-family: 'Futura', sans-serif;
          text-transform: uppercase;
          color: white;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .menu-item a {
          text-decoration: none;
          color: white;
          transition: color 0.3s ease;
        }

        .menu-item a:hover {
          color: gray;
        }

        .mobile-menu-toggle {
          display: none;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
        }

        .mobile-menu-toggle div {
          width: 24px;
          height: 2px;
          background-color: white;
          transition: all 0.3s ease;
        }

        .mobile-menu-toggle.open div:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .mobile-menu-toggle.open div:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-toggle.open div:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .mobile-menu {
          display: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .mobile-menu.open {
          display: block;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .menu-list {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 20px;
            right: 20px;
            width: 30px;
            height: 30px;
          }

          .mobile-menu {
            background-color: black;
            position: absolute;
            top: 60px;
            right: 0;
            width: 100%;
            padding: 10px 0;
            z-index: 10;
            flex-direction: column;
          }

          .mobile-menu-item {
            padding: 10px 20px;
            text-align: center;
            color: white;
            list-style: none;
            border-bottom: 1px solid gray;
          }

          .mobile-menu-item a {
            color: white;
            text-decoration: none;
            font-size: 14px;
            text-transform: uppercase;
            display: block;
          }

          .mobile-menu-item:last-child {
            border-bottom: none;
          }
        }
      `}</style>

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          SUMIT KHETAN
          <div className="logo-subtext">ENTERTAINMENT & CO</div>
        </div>

        <ul className="menu-list">
          <li className="menu-item">
            <Link href="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link href="/about-us">About</Link>
          </li>
          <li className="menu-item">
            <Link href="/Events">Events</Link>
          </li>
          <li className="menu-item">
            <Link href="/Awards">Awards</Link>
          </li>
          <li className="menu-item">
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>

        <div
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-item">
            <Link href="/" onClick={toggleMobileMenu}>Home</Link>
          </div>
          <div className="mobile-menu-item">
            <Link href="/about-us" onClick={toggleMobileMenu}>About</Link>
          </div>
          <div className="mobile-menu-item">
            <Link href="/Events" onClick={toggleMobileMenu}>Events</Link>
          </div>
          <div className="mobile-menu-item">
            <Link href="/Awards" onClick={toggleMobileMenu}>Awards</Link>
          </div>
          <div className="mobile-menu-item">
            <Link href="/contact-us" onClick={toggleMobileMenu}>Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
