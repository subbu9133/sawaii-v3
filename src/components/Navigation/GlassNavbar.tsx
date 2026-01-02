import { Link, useLocation } from 'react-router-dom';
import GreenScreenImage from '../GreenScreenImage';

const GlassNavbar = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'CATERING', path: '/catering' },
    ];

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-black/95 shadow-md border-b border-white/10"
        >
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <GreenScreenImage src="/sawaii-green-logo.png" alt="SAWAII Logo" className="h-20 w-auto object-contain" tolerance={50} />
                </Link>

                {/* Links */}
                <div className="flex items-center gap-6 md:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="relative group"
                        >
                            <span className={`
                                text-sm font-medium tracking-wide transition-colors duration-300
                                ${isActive(link.path) ? 'text-yellow-500' : 'text-gray-300 group-hover:text-white'}
                            `}>
                                {link.name}
                            </span>
                            {isActive(link.path) && (
                                <div
                                    className="absolute -bottom-1 left-0 right-0 h-px bg-yellow-500"
                                />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default GlassNavbar;
