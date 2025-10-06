import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Explorely Travels</h3>
            <p>Creating unforgettable travel experiences since 2010. Your journey of discovery starts with us.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#highlights">Why Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Popular Destinations</h3>
            <ul className="footer-links">
              <li><a href="#">Bali, Indonesia</a></li>
              <li><a href="#">Santorini, Greece</a></li>
              <li><a href="#">Phuket, Thailand</a></li>
              <li><a href="#">Paris, France</a></li>
              <li><a href="#">Swiss Alps, Switzerland</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="footer-links">
              <li><i className="fas fa-map-marker-alt"></i> 123 Travel Street, Adventure City</li>
              <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
              <li><i className="fas fa-envelope"></i> explorely0.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy;  2025 Explorely Travels. All rights reserved.</p>
            <p className="developer">Designed & Developed by <span>Asfia</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer