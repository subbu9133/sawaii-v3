import React, { useState, useEffect } from 'react';

interface HeroSliderProps {
    images: string[];
    children?: React.ReactNode;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ images, children }) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Background Slider */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentImage === index ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className={`w-full h-full object-cover transform transition-transform duration-[10000ms] ease-linear ${currentImage === index ? 'scale-110' : 'scale-100'
                            }`}
                    />
                </div>
            ))}

            <div className="relative z-20 text-center px-4 w-full max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
};

export default HeroSlider;
