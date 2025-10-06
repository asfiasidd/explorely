import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/notfound.css'

const NotFound = () => {
  return (
    <>
      <Navbar />
      <section className="notfound">
        <div className="container">
          <div className="notfound-content">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for doesn't exist or has been moved.</p>
            <Link to="/" className="btn">Go Back Home</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default NotFound