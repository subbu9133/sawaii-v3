import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from '../UI/MagneticButton';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const menuVars = {
        initial: { scaleY: 0 },
        animate: {
            scaleY: 1,
            transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] as [number, number, number, number] }
        },
        exit: {
            scaleY: 0,
            transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
        }
    };

    const containerVars = {
        initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
        open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } }
    };

    const linkVars = {
        initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] as [number, number, number, number] } },
        open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] as [number, number, number, number] } }
    };

    return (
        <>
            {/* Magnetic Trigger Button */}
            <div className="fixed top-0 right-0 p-8 z-50">
                <MagneticButton
                    onClick={toggleMenu}
                    className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold uppercase text-xs tracking-widest hover:scale-110 transition-transform"
                >
                    {isActive ? 'Close' : 'Menu'}
                </MagneticButton>
            </div>

            {/* Menu Overlay */}
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed left-0 top-0 w-full h-screen bg-black origin-top z-40 flex flex-col justify-center items-center overflow-hidden"
                    >
                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            className="flex flex-col gap-4 items-center"
                        >
                            {[
                                { title: "Home", href: "/" },
                                { title: "Our Menu", href: "/menu" },
                                { title: "Catering", href: "/catering" },
                                { title: "Order Online", href: "/order" },
                            ].map((link, index) => (
                                <div key={index} className="overflow-hidden">
                                    <motion.div variants={linkVars} className="text-5xl md:text-7xl font-serif text-yellow-500 uppercase tracking-tighter hover:italic hover:text-white transition-all cursor-pointer">
                                        <Link to={link.href} onClick={toggleMenu}>
                                            {link.title}
                                        </Link>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>

                        <div className="absolute bottom-10 left-10 md:left-20 text-gray-400 text-sm font-sans flex gap-8">
                            <span>Instagram</span>
                            <span>Facebook</span>
                            <span>Yelp</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
