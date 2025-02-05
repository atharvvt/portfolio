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
                    <p className="about-text">As a passionate Python Developer and Frontend Developer, I thrive on creating visually appealing and user-friendly websites. My journey in web design began with a fascination for how design can enhance user experience.</p>
                </div>
            </div>
        </section>
    );
};

export default About;