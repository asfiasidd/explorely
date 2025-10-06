import React, { useState, useEffect } from 'react'
import '../styles/testimonials.css'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      text: "Our European tour was absolutely incredible! Every detail was perfectly planned, and our guide was knowledgeable and friendly. We'll definitely be booking our next adventure with Wanderlust."
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      text: "The Tropical Paradise package exceeded all our expectations. The resort was stunning, the food was delicious, and the activities were so much fun. Worth every penny!"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "As a solo traveler, I was nervous about my trip to Japan. Wanderlust made everything so easy and safe. I met amazing people and created memories that will last a lifetime."
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Travelers Say</h2>
        <div className="testimonials-slider">
          <div className="testimonials-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">{testimonial.name}</div>
              </div>
            ))}
          </div>
          <div className="slider-nav">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials