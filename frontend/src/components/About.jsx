import React from 'react';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About</h2>
            <div className="about-container bd-grid">
                <div className="about-img">
                    <img src="https://i.postimg.cc/NjdgX2sq/about.jpg" alt="about" />
                </div>
                <div>
                    <h2 className="about-subtitle">I'm Marlon</h2>
                    <p className="about-text">As a passionate web designer, I thrive on creating visually appealing and user-friendly websites. My journey in web design began with a fascination for how design can enhance user experience.</p>
                </div>
            </div>
        </section>
    );
};

export default About;