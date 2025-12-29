import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Clock, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import GreenScreenImage from '../components/GreenScreenImage';

const heroImages = [
    "/image copy 4.png",
    "/image copy 5.png",
    "/image copy 6.png"
];

const Home = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-black text-white selection:bg-yellow-500/30">
            <Helmet>
                <title>SAWAII | Authentic Indian Cuisine</title>
            </Helmet>

            {/* HERO SECTION - Background Slider */}
            <section ref={heroRef} className="h-screen relative flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImageIndex}
                            src={heroImages[currentImageIndex]}
                            alt="SAWAII Ambiance"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 0.7, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </motion.div>

                <div className="relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex justify-center mb-12">
                            <GreenScreenImage
                                src="/sawaii-green-logo.png"
                                alt="SAWAII Logo"
                                className="w-full max-w-2xl object-contain drop-shadow-lg"
                                tolerance={50}
                            />
                        </div>
                        <Link to="/menu" className="inline-block px-8 py-3 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm">
                            View Menu
                        </Link>
                        <Link to="/order" className="inline-block px-8 py-3 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm">
                            Order Online
                        </Link>
                        <Link to="/catering" className="inline-block px-8 py-3 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm">
                            Catering
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* WELCOME / ABOUT */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-serif mb-8 text-yellow-500">Welcome to Sawaii</h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed font-light">
                    Experience the true essence of Indian hospitality. At SAWAII, we bring you recipes passed down through generations, preparing each dish with the finest spices and freshest ingredients to deliver an unforgettable dining experience.
                </p>
            </section>

            {/* FEATURED IMAGE SECTION */}
            <section className="h-[60vh] relative overflow-hidden">
                <img
                    src="/image copy.png"
                    alt="Signature Dishes"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-4xl md:text-6xl font-serif text-white text-center px-4">
                        Tradition in Every Bite
                    </h3>
                </div>
            </section>

            {/* INFORMATION SECTION (Address, Hours, Contact) */}
            <section className="py-24 bg-neutral-900 border-t border-neutral-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

                        {/* Address */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-500 mb-2">
                                <MapPin className="w-5 h-5" />
                                <h4 className="text-lg font-bold uppercase tracking-widest">Location</h4>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                615 FM 2281 #100<br />
                                Lewisville, TX 75056<br />
                                (Sawaii Indian Restaurant)
                            </p>
                            <a href="https://www.google.com/maps/dir/?api=1&destination=Sawaii+Indian+Restaurant+615+FM+2281+%23100+Lewisville+TX+75056" target="_blank" rel="noreferrer" className="inline-block text-sm text-yellow-500 border-b border-yellow-500/50 hover:text-white transition-colors">
                                Get Directions
                            </a>
                        </div>

                        {/* Hours */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-500 mb-2">
                                <Clock className="w-5 h-5" />
                                <h4 className="text-lg font-bold uppercase tracking-widest">Hours</h4>
                            </div>
                            <div className="text-gray-300 space-y-2">
                                <div className="flex justify-between md:justify-start gap-8 border-b border-gray-800 pb-1">
                                    <span className="w-24">Mon - Thu</span>
                                    <span>11:00 AM - 10:00 PM</span>
                                </div>
                                <div className="flex justify-between md:justify-start gap-8 border-b border-gray-800 pb-1">
                                    <span className="w-24">Fri - Sat</span>
                                    <span>11:00 AM - 11:00 PM</span>
                                </div>
                                <div className="flex justify-between md:justify-start gap-8">
                                    <span className="w-24">Sunday</span>
                                    <span>12:00 PM - 9:30 PM</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-500 mb-2">
                                <Phone className="w-5 h-5" />
                                <h4 className="text-lg font-bold uppercase tracking-widest">Contact</h4>
                            </div>
                            <p className="text-gray-300 text-lg">
                                Have a question or need to book a large party?
                            </p>
                            <div className="space-y-2">
                                <p className="text-xl text-white font-mono">(555) 123-4567</p>
                                <p className="text-gray-400">info@sawaii.com</p>
                            </div>
                            <Link to="/order" className="inline-block mt-4 px-6 py-2 bg-yellow-600 text-black text-sm font-bold uppercase tracking-widest hover:bg-yellow-500 rounded">
                                Book Table
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
