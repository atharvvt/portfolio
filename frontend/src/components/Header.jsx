import React, { useState, useEffect } from 'react';
import logo from '../assets/pngwing.com.png';
import ganesha from '../assets/ganesha.png';


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
            }`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <img
                            src={ganesha}
                            alt="Ganpati Logo"
                            className="Header_logo"
                        />

                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {[
                                ['Skills', '#skills'],
                                ['Work', '#work'],
                                ['Contact', '#contact'],
                            ].map(([name, url]) => (
                                <a
                                    key={name}
                                    href={url}
                                    className="text-gray-700 hover:text-orange-600 font-medium 
                                             px-3 py-2 rounded-md text-sm 
                                             transition-all duration-300 relative
                                             after:content-[''] after:absolute after:w-full 
                                             after:h-0.5 after:bg-orange-600 after:left-0 
                                             after:bottom-0 after:scale-x-0 
                                             hover:after:scale-x-100 after:transition-transform 
                                             after:duration-300"
                                >
                                    {name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </nav>
        </header>
    );
};

export default Header;