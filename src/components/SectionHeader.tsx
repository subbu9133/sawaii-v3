import React from 'react';

interface SectionHeaderProps {
    title: string;
    description?: string;
    light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, light = false }) => {
    return (
        <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500 font-serif tracking-wide">
                {title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-8 rounded-full"></div>
            {description && (
                <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${light ? 'text-gray-100' : 'text-gray-300'}`}>
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
