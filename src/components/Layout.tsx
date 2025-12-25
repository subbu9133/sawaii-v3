import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    const [activeSection] = useState('home'); // You might want to update this based on route

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="min-h-screen bg-black text-white">
            <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-yellow-600/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link to="/" className="flex items-center space-x-3">
                            <img src="/sawaii-logo.png" alt="SAWAII Logo" className="h-12 w-12 object-contain" />
                            <span className="text-2xl font-bold text-yellow-500">SAWAII</span>
                        </Link>
                        <div className="hidden md:flex space-x-4">
                            <Link
                                to="/"
                                className={`text-sm font-bold uppercase px-4 py-2 rounded-lg transition-all duration-300 ${isActive('/')
                                    ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                                    : 'text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-500'
                                    }`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/menu"
                                className={`text-sm font-bold uppercase px-4 py-2 rounded-lg transition-all duration-300 ${isActive('/menu')
                                    ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                                    : 'text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-500'
                                    }`}
                            >
                                Menu
                            </Link>
                            <Link
                                to="/catering"
                                className={`text-sm font-bold uppercase px-4 py-2 rounded-lg transition-all duration-300 ${isActive('/catering')
                                    ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                                    : 'text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-500'
                                    }`}
                            >
                                Catering
                            </Link>
                            <Link
                                to="/order"
                                className={`text-sm font-bold uppercase px-4 py-2 rounded-lg transition-all duration-300 ${isActive('/order')
                                    ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                                    : 'text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-500'
                                    }`}
                            >
                                Order
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                {children}
            </main>

            <footer className="bg-black border-t border-yellow-600/20 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <img src="/sawaii-logo.png" alt="SAWAII Logo" className="h-10 w-10 object-contain" />
                            <span className="text-3xl font-bold text-yellow-500">SAWAII</span>
                        </div>
                        <p className="text-gray-400 mb-4">North Indian Restaurant</p>
                        <p className="text-gray-500 text-sm">© 2024 SAWAII. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
