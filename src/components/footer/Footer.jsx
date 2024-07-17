import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 px-4 mt-8 md:px-12">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div className="flex-shrink-0">
                    <p className="text-sm">&copy; 2024 MovieSphere. All rights reserved.</p>
                    <p className="text-sm mt-2">Contact us: contact@example.com</p>
                </div>
                <div className="flex-shrink-0 mt-4 md:mt-0">
                    <Link to="/" className="mx-3 md:mx-4 text-sm hover:text-gray-300">Privacy Policy</Link>
                    <span className="text-gray-400">|</span>
                    <Link to="/" className="mx-3 md:mx-4 text-sm hover:text-gray-300">Terms of Service</Link>
                    <span className="text-gray-400">|</span>
                    <Link to="/" className="mx-3 md:mx-4 text-sm hover:text-gray-300">About Us</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
