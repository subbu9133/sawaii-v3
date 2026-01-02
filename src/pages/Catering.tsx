
import { Phone, Mail, MapPin, Star, Quote } from 'lucide-react';

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


            {/* Testimonials Section */}
            <section className="py-20 bg-neutral-900 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll>
                        <SectionHeader
                            title="Testimonials"
                            description="What our clients say about their SAWAII catering experience."
                        />
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {[
                            {
                                name: "Nirali Nahar",
                                text: "Priya and Sawaii were absolutely incredible! The personal tasting experience was memorable, and our guests couldn't stop raving about the unique dishes like eggplant chaat and spicy guava ice cream. We wholeheartedly recommend them for any wedding!",
                                rating: 5
                            },
                            {
                                name: "Nikita Srivastava",
                                text: "Hiring Sawaii for our multi-day wedding was our best decision! From Mehendi to Reception, the food was exceptional—guests are still raving about the eggplant chaat and hakka noodles. Priya and her team were incredibly professional, organized, and a joy to work with. Highly recommended!",
                                rating: 5
                            },
                            {
                                name: "Priya & Matt ❤️",
                                text: "Huge thank you for everything! Everyone at our wedding wouldn't stop talking about the food. The tacos, mousse, and especially the dabeli cone were a big hit. The presentation was beyond words, and the organization was flawless. Our only regret is not eating more of your delicious food!",
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <RevealOnScroll key={index} delay={index * 100}>
                                <div className="bg-black/40 border border-white/5 p-8 rounded-xl h-full relative group hover:border-yellow-500/30 transition-all duration-300">
                                    <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-yellow-500/20 transition-colors" />
                                    <div className="flex gap-1 mb-4 text-yellow-500">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                                    <div className="mt-auto">
                                        <h4 className="text-white font-serif font-bold tracking-wide">{testimonial.name}</h4>
                                        {/* <p className="text-yellow-500/80 text-xs uppercase tracking-widest mt-1">{testimonial.event}</p> */}
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
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
                                    <span className="text-white text-lg font-medium">+1 (469) 908-8686</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="text-yellow-500" />
                                    <span className="text-white text-lg font-medium">priya@sawaiiusa.com</span>
                                </div>
                            </div>

                            <div className="w-full h-px bg-yellow-600/20 my-8"></div>

                            <div className="flex items-center justify-center space-x-2 text-gray-400">
                                <MapPin size={18} />
                                <span>Serving  DFW Metroplex and All Over USA.</span>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>
        </div>
    );
};

export default Catering;
