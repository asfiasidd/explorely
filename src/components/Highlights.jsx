import React from 'react'
import '../styles/highlights.css'

const Highlights = () => {
  const highlights = [
    {
      icon: "fas fa-globe-americas",
      title: "Global Destinations",
      description: "Access to over 500 destinations worldwide with local experts in each location."
    },
    {
      icon: "fas fa-hand-holding-usd",
      title: "Best Price Guarantee",
      description: "We match any lower price you find for the same itinerary with additional 10% off."
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Support",
      description: "Round-the-clock customer service to assist you before, during, and after your trip."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Travel Protection",
      description: "Comprehensive insurance options to protect your investment and give you peace of mind."
    }
  ]

  return (
    <section className="section highlights" id="highlights">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">
                <i className={highlight.icon}></i>
              </div>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights