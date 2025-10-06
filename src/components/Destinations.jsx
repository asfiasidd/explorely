import React from 'react'
import '../styles/destination.css'

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      image: "https://images.pexels.com/photos/739285/pexels-photo-739285.jpeg",
      description: "Experience the perfect blend of beautiful beaches, vibrant culture, and lush landscapes.",
      price: "From $899"
    },
    {
      id: 2,
      name: "Santorini, Greece",
      image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
      description: "Whitewashed buildings, blue domes, and stunning sunsets await in this Greek paradise.",
      price: "From $1,299"
    },
    {
      id: 3,
      name: "Istanbu, Turkey",
      image: "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg",
      description: "Immerse yourself in the perfect blend of traditional culture and futuristic innovation.",
      price: "From $1,499"
    },
    {
      id: 4,
      name: "Paris, France",
      image: "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg",
      description: "The city of love and lights, offering iconic landmarks and exquisite cuisine.",
      price: "From $1,199"
    },
    {
      id: 5,
      name: "Phuket, Thailand",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Pristine beaches, turquoise waters, and vibrant nightlife in Thailand's tropical paradise.",
      price: "From $799"
    },
    {
      id: 6,
      name: "Swiss Alps, Switzerland",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Majestic mountains, charming villages, and world-class skiing in the heart of Europe.",
      price: "From $1,699"
    }
    
  ]

  return (
    <section className="section destinations" id="destinations">
      <div className="container">
        <h2 className="section-title">Popular Destinations</h2>
        <div className="destinations-grid">
          {destinations.map(destination => (
            <div key={destination.id} className="destination-card">
              <img src={destination.image} alt={destination.name} className="destination-img" />
              <div className="destination-content">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <div className="destination-price">{destination.price}</div>
                <button className="btn">Explore</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations