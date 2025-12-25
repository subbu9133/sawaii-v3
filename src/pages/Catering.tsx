import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Catering = () => {
    const [currentImage, setCurrentImage] = React.useState(0);

    const heroImages = [
        "/image copy 2.png",
        "/image copy.png",
        "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
    ];

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-black min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                {/* Background Slider */}
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentImage === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Catering Slide ${index + 1}`}
                            className={`w-full h-full object-cover transform transition-transform duration-[10000ms] ease-linear ${currentImage === index ? 'scale-110' : 'scale-100'
                                }`}
                        />
                    </div>
                ))}

                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white font-serif tracking-wider drop-shadow-2xl animate-fade-in-up">
                        SAWAII CATERING
                    </h1>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-8 rounded-full shadow-lg"></div>
                    <p className="text-2xl md:text-4xl text-yellow-500 font-light italic tracking-wide drop-shadow-lg">
                        Premium Indian Catering for Every Occasion
                    </p>
                </div>
            </section>



            {/* Signature Dishes */}
            <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-yellow-500">Signature Dishes</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto"></div>
                    </div>

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
                                <h3 className="text-xl font-bold text-yellow-500 mb-2">Butter & Garlic Naan</h3>
                                <p className="text-gray-300 text-xs">Soft, buttery, oven-baked Indian breads.</p>
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
                </div>
            </section>

            {/* Contact & Booking */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto bg-gray-900 border border-yellow-600/20 rounded-xl p-8 md:p-12 shadow-2xl">
                    <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">Contact & Booking</h2>

                    <div className="space-y-6 text-center">
                        <p className="text-gray-300 text-lg">
                            For inquiries, event bookings, or customized menus, contact us:
                        </p>

                        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-12">
                            <div className="flex items-center space-x-3">
                                <Phone className="text-yellow-500" />
                                <span className="text-white text-lg font-medium">(806) 805-1443</span>
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

                        <div className="pt-8">
                            <Link to="/order" className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-8 py-3 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-400 transition-all transform hover:scale-105 shadow-lg">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Catering;
