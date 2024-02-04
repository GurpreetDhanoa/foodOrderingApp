import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    return (

        <nav className="bg-gray-800 p-4">

            <div className="container mx-auto">

                <div className="flex justify-between items-center">

                    <div className="text-white font-bold text-xl">Online Food Ordering</div>

                    <div className="hidden md:flex space-x-4">

                        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                        <Link to="/" className="text-white hover:text-gray-300">About</Link>
                        <Link to="/" className="text-white hover:text-gray-300">Services</Link>
                        <Link to="/" className="text-white hover:text-gray-300">Contact</Link>

                    </div>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;