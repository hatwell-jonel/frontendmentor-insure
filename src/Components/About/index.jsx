import React, {useState} from 'react';
import './About.css'

// IMPORTED IMAGES
import snappyImg from '../../images/icon-snappy-process.svg';
import affordableImg from '../../images/icon-affordable-prices.svg';
import peopleImg from '../../images/icon-people-first.svg'
import mbBg from '../../images/bg-pattern-how-we-work-mobile.svg';
import dtBg from '../../images/bg-pattern-how-we-work-desktop.svg';

function About() {
  return (
    <section id="about">
      <div className="container">

        <div className="title">
          <h2>we're different</h2>
        </div>

        <ul className="services">
          <li className="box">
            <img src={snappyImg} alt="icon" />
            <h2 className="highlight">Snappy Process</h2>
            <p className="details">Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
          </li>
          <li className="box">
            <img src={affordableImg} alt="icon" />
            <h2 className="highlight">Affordable Prices</h2>
            <p className="details">We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
          </li>
          <li className="box">
            <img src={peopleImg} alt="icon" />
            <h2 className="highlight">People First</h2>
            <p className="details">Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</p>
          </li>
        </ul>

        <div className="how-we-work">
          <img src={mbBg} className="mob-bg" alt="background" />
          <img src={dtBg} className="dt-bg" alt="background" />
          <div className="content">
            <h2>Find out more about how we work</h2>

            <a href="#">how we work</a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About;