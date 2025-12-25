import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const GlassNavbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'Catering', path: '/catering' },
        { name: 'Order', path: '/order' },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}
        >
            <div className={`
                backdrop-blur-md border border-white/10 rounded-full px-8 py-3 
                flex items-center gap-8 shadow-2xl transition-all duration-300
                ${scrolled ? 'bg-black/80 w-auto' : 'bg-black/40 w-[90%] max-w-5xl justify-between'}
            `}>
                {/* Logo - Only visible when not scrolled or on mobile */}
                <Link to="/" className={`flex items-center gap-2 ${scrolled ? 'hidden md:flex' : 'flex'}`}>
                    <img src="/sawaii-logo.png" alt="SAWAII Logo" className="h-12 w-auto object-contain" />
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
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute -bottom-1 left-0 right-0 h-px bg-yellow-500"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Scrolled Right Side CTA (Optional - hidden for now to keep it clean) */}
            </div>
        </motion.nav>
    );
};

export default GlassNavbar;
