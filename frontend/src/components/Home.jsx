import React from 'react';

const Home = () => {
    return (
        <section className="min-h-full bg-gradient-to-br from-gray-50 to-gray-100 py-12" style={{ marginBottom: '5rem' }}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-4 text-center lg:text-left">
                    <div className="space-y-4">
                        <h2 className="text-gray-600 text-xl font-medium animate-fade-in">
                        </h2>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                            Hi, I'm{' '}
                            <span className="text-blue-600 inline-block animate-bounce-slow">
                                Atharv
                            </span>
                        </h1>
                        <h3 className="text-2xl md:text-3xl text-gray-700 font-semibold">
                            Frontend & Python Developer
                        </h3>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <a
                            href="#work"
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium 
                                     hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all
                                     shadow-lg hover:shadow-xl"
                        >
                            See my Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg 
                                     font-medium hover:bg-blue-50 transform hover:-translate-y-0.5 
                                     transition-all"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Right Column - Decorative Elements */}
                <div className="hidden lg:block">
                    <div className="relative">
                        {/* Background decorative circle */}
                        <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                        {/* Code snippet decoration */}
                        <div className="relative bg-white p-6 rounded-lg shadow-xl">
                            <pre className="text-sm text-gray-800">
                                <code>{`function Developer() {
  return {
    name: 'Atharv',
    skills: ['React', 'Python', 'JavaScript'],
    passion: 'Building amazing web apps',
    coffee: true
  }
}`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;