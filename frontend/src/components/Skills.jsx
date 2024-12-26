import React from 'react';
import { Code, GitBranch, Database } from 'lucide-react';

const SkillsShowcase = () => {
    const skills = [
        {
            category: "Frontend",
            icon: <Code className="w-5 h-5" />,
            items: [
                {
                    name: "React",
                    description: "Component development, Hooks, State management",
                    level: "Advanced"
                },
                {
                    name: "JavaScript",
                    description: "ES6+, DOM manipulation, Async programming",
                    level: "Advanced"
                },
                {
                    name: "CSS/Tailwind",
                    description: "Responsive design, Modern layouts, Animations",
                    level: "Intermediate"
                }
            ]
        },
        {
            category: "Backend",
            icon: <GitBranch className="w-5 h-5" />,
            items: [
                {
                    name: "Python",
                    description: "Data structures, OOP, Standard library",
                    level: "Advanced"
                },
                {
                    name: "Django",
                    description: "REST Framework, Authentication, ORM",
                    level: "Advanced"
                }
            ]
        },
        {
            category: "Database",
            icon: <Database className="w-5 h-5" />,
            items: [
                {
                    name: "PostgreSQL",
                    description: "Query optimization, Data modeling, Indexing",
                    level: "Intermediate"
                }
            ]
        }
    ];

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h1>

            <div className="space-y-8">
                {skills.map((category, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                {category.icon}
                            </div>
                            <h2 className="text-xl font-semibold">{category.category}</h2>
                        </div>

                        <div className="space-y-4">
                            {category.items.map((skill, skillIdx) => (
                                <div 
                                    key={skillIdx} 
                                    className="border-l-4 border-blue-500 pl-4 py-1"
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-medium">{skill.name}</h3>
                                            <p className="text-sm text-gray-600 mt-1">
                                                {skill.description}
                                            </p>
                                        </div>
                                        <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                            {skill.level}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <a 
                    href="#projects" 
                    className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    View My Projects
                </a>
            </div>
        </div>
    );
};

export default SkillsShowcase;