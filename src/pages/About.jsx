import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/about.css'

const About = () => {
  return (
    <>
      <Navbar />
      <section className="about-hero">
        <div className="container">
          <h1>About Explorely Travels</h1>
          <p>Your trusted partner in creating unforgettable journeys</p>
        </div>
      </section>
      
      <section className="section about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>Founded in 2010, Wanderlust Travels began with a simple mission: to make world-class travel experiences accessible to everyone. What started as a small team of passionate travelers has grown into a global company serving thousands of clients annually.</p>
              
              <p>We believe that travel has the power to transform lives, broaden perspectives, and create lasting memories. Our team of expert travel consultants works tirelessly to craft personalized itineraries that exceed expectations.</p>
              
              <h3>Our Values</h3>
              <ul>
                <li>Authentic experiences over tourist traps</li>
                <li>Sustainable and responsible tourism</li>
                <li>Personalized service for every traveler</li>
                <li>Transparent pricing with no hidden fees</li>
              </ul>
            </div>
            
            <div className="about-images">
              <img src="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Our Team" />
              <img src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Travel Experience" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <h3>50,000+</h3>
              <p>Happy Travelers</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Destinations</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}

export default About