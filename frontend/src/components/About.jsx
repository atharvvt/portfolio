import React from 'react';
import ProfileImg from '../assets/profile.jpeg'

const About = () => {
    return (
        <section className="about section" id="about">
            <h1 className="text-3xl font-bold mb-8 text-center">About</h1>
            <div className="about-container bd-grid">
                <div className="about-img">
                <img src={ProfileImg} alt="about" />
                </div>
                <div>
                    <h2 className="about-subtitle">I'm Atharv</h2>
                    <p className="about-text">As a passionate web designer, I thrive on creating visually appealing and user-friendly websites. My journey in web design began with a fascination for how design can enhance user experience.</p>
                </div>
            </div>
        </section>
    );
};

export default About;