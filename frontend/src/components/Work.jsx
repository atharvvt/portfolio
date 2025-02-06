import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import api from '../api';

const ProjectShowcase = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    // const projects = [
    //     {
    //         image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         title: "Project One",
    //         description: "A modern web application built with React and Node.js, featuring real-time data synchronization.",
    //         tech: ["React", "Node.js", "MongoDB"],
    //         link: "https://github.com/user/repo1",
    //     },
    //     {
    //         image: "https://images.unsplash.com/photo-1443632864897-14973fa006cf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         title: "Project Two",
    //         description: "An e-commerce platform with advanced filtering and search capabilities.",
    //         tech: ["Next.js", "Tailwind CSS", "Prisma"],
    //         link: "https://github.com/user/repo2",
    //     },
    //     {
    //         image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         title: "Project Three",
    //         description: "Real-time chat application with end-to-end encryption.",
    //         tech: ["TypeScript", "Socket.io", "PostgreSQL"],
    //         link: "https://github.com/user/repo3",
    //     }
    // ];


    useEffect(() => {
        const fetchprojects = async () => {
            try {
                const response = await api.get('/api/projects/');
                setProjects(response.data);
                console.log(response)
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchprojects();
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    const visibleProjects = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % projects.length;
            items.push(projects[index]);
        }
        return items;
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <div id="work" className="w-full max-w-7xl mx-auto px-4 py-8" style={{ marginBottom: '10rem' }}>
            <div className="relative">
                <div className="flex gap-6 transition-all duration-300">
                    {visibleProjects().map((project, index) => (
                        <div
                            key={index}
                            className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
                        >
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                                <div className="relative group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                                        >
                                            <Github size={16} />
                                            <span className="text-sm">Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                >
                    <ChevronRight size={24} />
                </button>

                <div className="flex justify-center gap-2 mt-4">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-600 w-4' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;
