import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">Explorely<span></span></Link>
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><a href="#destinations" onClick={() => setIsMenuOpen(false)}>Destinations</a></li>
          <li><a href="#packages" onClick={() => setIsMenuOpen(false)}>Packages</a></li>
          <li><a href="#highlights" onClick={() => setIsMenuOpen(false)}>Why Us</a></li>
          <li><a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          <li className="nav-btn">
            <Link to="/contact" className="btn" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar