import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Discover The World With Us</h1>
        <p>Explore the most breathtaking destinations with our expertly crafted travel experiences. Your adventure of a lifetime starts here.</p>
        <div className="hero-btns">
          <a href="#destinations" className="btn">Explore Destinations</a>
          <Link to="/contact" className="btn btn-secondary">Book Your Trip</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero