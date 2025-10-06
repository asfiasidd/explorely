import React from 'react'
import '../styles/packages.css'

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "European Adventure",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "14-day tour through the most iconic cities of Europe including Paris, Rome, and Barcelona.",
      features: ["4-star accommodations", "Guided tours included", "Breakfast daily", "Airport transfers"],
      price: "$2,499",
      badge: "Most Popular"
    },
    {
      id: 2,
      name: "Tropical Paradise",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "7-day all-inclusive resort stay in the Maldives with water activities and spa treatments.",
      features: ["All-inclusive resort", "Water sports included", "Spa credit", "Kids club access"],
      price: "$1,799",
      badge: "Family Friendly"
    },
    {
      id: 3,
      name: "Mountain Escape",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "10-day hiking adventure through the Swiss Alps with experienced guides and cozy lodges.",
      features: ["Expert hiking guides", "Mountain lodge stays", "All meals included", "Equipment provided"],
      price: "$1,999",
      badge: "Adventure"
    }
  ]

  return (
    <section className="section packages" id="packages">
      <div className="container">
        <h2 className="section-title">Travel Packages</h2>
        <div className="packages-grid">
          {packages.map(pkg => (
            <div key={pkg.id} className="package-card">
              {pkg.badge && <div className="package-badge">{pkg.badge}</div>}
              <img src={pkg.image} alt={pkg.name} className="package-img" />
              <div className="package-content">
                <h3>{pkg.name}</h3>
                <p>{pkg.description}</p>
                <ul className="package-features">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check"></i> {feature}
                    </li>
                  ))}
                </ul>
                <div className="package-price">
                  <div className="price">{pkg.price}</div>
                  <button className="btn">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages