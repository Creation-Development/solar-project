import React, { useEffect } from 'react'
import hero_video from '../../assets/videos/video2.mp4'
import { Link } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    localStorage.setItem("role", "user")
  }, []);
  return (
    <div className='outer-container'>
      <div className='video-container'>
        <video src={hero_video} autoPlay loop muted></video>
      </div>
      <div className="overlay"></div>
      <div className="text">
        <h1 className='my-4' data-aos="fade-right" data-aos-duration="1000">Welcome To Soleos</h1>
        <p data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1000">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, explicabo!</p>
        <div className="button-container">
          <Link data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="2000" className='text-decoration-none btn btn-primary' to="/service/ev-charger">EV Charger</Link>
          <Link data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="2000" className='text-decoration-none btn btn-primary' to="/service/solar">Solar</Link>
          <a data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="2000" className='text-decoration-none btn btn-primary' href="https://apps.apple.com/in/app/battlegrounds-mobile-india/id1526436837">Download</a>
        </div>
      </div>
    </div>
  )
}

export default Home