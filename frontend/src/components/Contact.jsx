import React from 'react';
import {
    Linkedin,
    Instagram,
    Twitter,
    Facebook,
    Book,
    FileDown,
    Mail,
    ExternalLink
} from 'lucide-react';

const ContactPage = () => {
    const socialLinks = [
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-5 h-5" />,
            url: "https://www.linkedin.com/in/atharvthombare/",
            username: "@atharvthombare",
            color: "hover:bg-[#0077b5]"
        },
        {
            name: "X, formarly Twitter",
            icon: <Twitter className="w-5 h-5" />,
            url: "https://x.com/AtharvThombare5",
            username: "@AtharvThombare5",
            color: "hover:bg-blue-400"
        },
        {
            name: "Instagram",
            icon: <Instagram className="w-5 h-5" />,
            url: "https://www.instagram.com/atharv.vt27/",
            username: "@atharv.vt27",
            color: "hover:bg-pink-500"
        },
        {
            name: "Facebook",
            icon: <Facebook className="w-5 h-5" />,
            url: "https://www.facebook.com/atharv.thombare.77/",
            username: "@atharv.thombare",
            color: "hover:bg-blue-600"
        },
        {
            name: "Medium",
            icon: <Book className="w-5 h-5" />,
            url: "https://medium.com/@atharv27vt",
            username: "@atharv.thombare",
            color: "hover:bg-gray-800"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Let's Connect!</h1>
                    <p className="text-gray-600 text-lg">
                        Feel free to reach out through any of these platforms.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-8">
                        {/* Email Contact */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-2xl font-semibold mb-6">Direct Contact</h2>
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-blue-500" />
                                        <span className="font-medium">Email</span>
                                    </div>
                                    <a
                                        href="mailto:atharv.thombare@gmail.com"
                                        className="text-blue-500 hover:text-blue-600 flex items-center gap-1"
                                    >
                                        atharv.thombare27@gmail.com
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Resume Download Section */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-2xl font-semibold mb-6">Resume</h2>
                            <div className="text-center">
                                <a
                                    href="https://drive.google.com/file/d/11Bs1gcoKtiV--1SnJ9R7CvQQNr_i04Ce/view?usp=sharing"
                                    download
                                    className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg
                                             hover:bg-blue-600 transition-colors duration-300 text-lg"
                                >
                                    <FileDown className="w-6 h-6" />
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-6">Social Media</h2>
                        <div className="grid gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-between p-4 rounded-lg border border-gray-200 
                                             hover:text-white transition-all duration-300 ${link.color}`}
                                >
                                    <div className="flex items-center gap-3">
                                        {link.icon}
                                        <span className="font-medium">{link.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>{link.username}</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;