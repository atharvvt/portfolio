import React from 'react';
import ProfileImg from '../assets/profile.jpeg'

const About = () => {
    return (
        <section className="about section" id="about" style={{ marginBottom: '5rem' }}>
            <div className="about-container bd-grid">
                <div className="about-img">
                <img src={ProfileImg} alt="about" />
                </div>
                <div>
                    <h2 className="about-subtitle">I'm Atharv</h2>
                    <p className="about-text">As a dedicated Python and Frontend Developer, I specialize in creating user-friendly websites and developing innovative software solutions that solve real-world problems. I thrive on transforming ideas into functional and visually appealing applications, combining technical expertise with creativity.</p>
                </div>
            </div>
        </section>
    );
};

export default About;