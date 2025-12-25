import { Helmet } from 'react-helmet-async';
import { menuItems } from '../data/menuData';

const Menu = () => {
    return (
        <div className="bg-black min-h-screen pt-24 pb-20">
            <Helmet>
                <title>Menu | SAWAII</title>
            </Helmet>

            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <span className="text-yellow-500 font-serif italic text-xl">The Collection</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mt-4 tracking-tight">Menu</h1>
                    <div className="w-24 h-px bg-yellow-600/50 mx-auto mt-8"></div>
                </div>

                <div className="space-y-20">
                    {menuItems.map((category, idx) => (
                        <div key={idx} className="relative">
                            <h2 className="text-3xl font-serif text-yellow-500 mb-10 text-center uppercase tracking-widest border-b border-gray-900 pb-4">
                                {category.category}
                            </h2>

                            <div className="grid gap-10">
                                {category.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="group">
                                        <div className="flex justify-between items-baseline mb-2 relative">
                                            <h3 className="text-xl md:text-2xl text-white font-serif tracking-wide bg-black relative z-10 pr-4">
                                                {item.name}
                                            </h3>

                                            {/* Dotted Line Leader */}
                                            <div className="absolute inset-0 flex items-baseline">
                                                <div className="w-full border-b border-dotted border-gray-800"></div>
                                            </div>

                                            <span className="text-xl font-mono text-yellow-500/80 bg-black relative z-10 pl-4">
                                                {item.price}
                                            </span>
                                        </div>
                                        <p className="text-gray-500 font-light text-sm md:text-base max-w-2xl leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-32 text-gray-600 text-sm font-mono">
                    <p>Prices subject to change without notice. Please inform your server of any allergies.</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;
