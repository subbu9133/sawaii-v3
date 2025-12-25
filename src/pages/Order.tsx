import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Users } from 'lucide-react';

const Order = () => {
    return (
        <div className="min-h-screen bg-black pt-24 pb-12 flex items-center justify-center px-4 relative overflow-hidden">
            <Helmet>
                <title>Reservations & Ordering | SAWAII</title>
            </Helmet>

            {/* Background Atmosphere */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-lg bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl relative z-10"
            >
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-serif text-white mb-2">Secure Your Table</h1>
                    <p className="text-gray-400 text-sm">Or order for home delivery</p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Personal Details</label>
                        <input type="text" placeholder="Full Name" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-500 transition-colors" />
                        <input type="tel" placeholder="Phone Number" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-500 transition-colors" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Reservation Details</label>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative">
                                <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-gray-500" />
                                <input type="date" className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors text-sm" />
                            </div>
                            <div className="relative">
                                <Clock className="absolute left-3 top-3.5 w-4 h-4 text-gray-500" />
                                <input type="time" className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors text-sm" />
                            </div>
                        </div>
                        <div className="relative mt-2">
                            <Users className="absolute left-3 top-3.5 w-4 h-4 text-gray-500" />
                            <select className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors text-sm appearance-none">
                                <option>2 Guests</option>
                                <option>4 Guests</option>
                                <option>6 Guest</option>
                                <option>Large Party (8+)</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button className="w-full bg-yellow-600 text-black font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-yellow-500 transition-all hover:scale-[1.02] shadow-lg shadow-yellow-900/20">
                            Confirm Reservation
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-xs">For direct orders, call us at <span className="text-white">555-0123</span></p>
                </div>
            </motion.div>
        </div>
    );
};

export default Order;
