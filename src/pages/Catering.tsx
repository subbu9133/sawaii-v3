import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeroSlider from '../components/HeroSlider';
import SectionHeader from '../components/SectionHeader';
import RevealOnScroll from '../components/RevealOnScroll';

const Catering = () => {
    const heroImages = [
        "/image copy 2.png",
        "/image copy.png",
        "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
    ];

    return (
        <div className="bg-black min-h-screen pt-20">
            <Helmet>
                <title>Catering | SAWAII - Premium Indian Catering</title>
                <meta name="description" content="Premium North Indian catering for weddings, corporate events, and parties in Dallas and Houston." />
            </Helmet>

            {/* Hero Section */}
            <HeroSlider images={heroImages}>
                <div className="flex items-center justify-center gap-6 mb-6">
                    <h1 className="text-6xl md:text-8xl font-bold font-serif text-white tracking-wider drop-shadow-2xl">
                        SAWAII CATERING
                    </h1>
                </div>
                <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-8 rounded-full shadow-lg"></div>
                <p className="text-2xl md:text-4xl text-yellow-500 font-light italic tracking-wide drop-shadow-lg font-serif">
                    Premium Indian Catering for Every Occasion
                </p>
            </HeroSlider>


            {/* Signature Dishes */}
            <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll>
                        <SectionHeader
                            title="Signature Dishes"
                        />
                    </RevealOnScroll>

                    <RevealOnScroll delay={200}>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Dish 1 */}
                            <div className="bg-gray-900 border border-yellow-600/20 rounded-lg overflow-hidden hover:border-yellow-500/50 transition-all group">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                        alt="Chicken Biryani"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-yellow-500 mb-2">Chicken Biryani</h3>
                                    <p className="text-gray-300 text-xs">Fragrant basmati rice layered with tender chicken.</p>
                                </div>
                            </div>

                            {/* Dish 2 */}
                            <div className="bg-gray-900 border border-yellow-600/20 rounded-lg overflow-hidden hover:border-yellow-500/50 transition-all group">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                        alt="Paneer Tikka"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-yellow-500 mb-2">Paneer Tikka</h3>
                                    <p className="text-gray-300 text-xs">Char-grilled paneer infused with rich tandoori marinade.</p>
                                </div>
                            </div>

                            {/* Dish 3 */}
                            <div className="bg-gray-900 border border-yellow-600/20 rounded-lg overflow-hidden hover:border-yellow-500/50 transition-all group">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                        alt="Butter Naan"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-yellow-500 mb-2">Grilled Chicken</h3>
                                    <p className="text-gray-300 text-xs">Soft, buttery, grilled chicken.</p>
                                </div>
                            </div>

                            {/* Dish 4 */}
                            <div className="bg-gray-900 border border-yellow-600/20 rounded-lg overflow-hidden hover:border-yellow-500/50 transition-all group">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                        alt="Chicken 65"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-yellow-500 mb-2">Chicken 65</h3>
                                    <p className="text-gray-300 text-xs">Spicy, crispy South Indian appetizer.</p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Contact & Booking */}
            <section className="py-20 px-4">
                <RevealOnScroll delay={300}>
                    <div className="max-w-4xl mx-auto bg-gray-900 border border-yellow-600/20 rounded-xl p-8 md:p-12 shadow-2xl">
                        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">Contact & Booking</h2>

                        <div className="space-y-6 text-center">
                            <p className="text-gray-300 text-lg">
                                For inquiries, event bookings, or customized menus, contact us:
                            </p>

                            <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-12">
                                <div className="flex items-center space-x-3">
                                    <Phone className="text-yellow-500" />
                                    <span className="text-white text-lg font-medium">(469) 908-8686</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="text-yellow-500" />
                                    <span className="text-white text-lg font-medium">catering@sawaillc.com</span>
                                </div>
                            </div>

                            <div className="w-full h-px bg-yellow-600/20 my-8"></div>

                            <div className="flex items-center justify-center space-x-2 text-gray-400">
                                <MapPin size={18} />
                                <span>Serving Dallas, Houston, Midland, Odessa, and more.</span>
                            </div>

                            {/* <div className="pt-8">
                                <Link to="/order" className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-8 py-3 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-400 transition-all transform hover:scale-105 shadow-lg">
                                    Book Now
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </RevealOnScroll>
            </section>
        </div>
    );
};

export default Catering;
