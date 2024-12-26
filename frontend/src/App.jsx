import React from 'react';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css'; // Your CSS styles
import './output.css'

const App = () => {
    return (
        <div>
            <Header />
            
            <main>
                <Home />
                <About />
                <Skills />
                <Work />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
