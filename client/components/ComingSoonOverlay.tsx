import React from 'react';

interface ComingSoonOverlayProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
    blurIntensity?: string;
}

export function ComingSoonOverlay({
    children,
    title = "Coming Soon",
    description = "We're working hard to bring you this feature. Stay tuned!",
    blurIntensity = "blur-[4px]"
}: ComingSoonOverlayProps) {
    return (
        <div className="relative">
            {/* Original Content */}
            <div className={`opacity-20 pointer-events-none select-none filter ${blurIntensity}`}>
                {children}
            </div>

            {/* Overlay */}
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-brand-green/20 max-w-md text-center transform transition-all duration-500 hover:scale-105 pointer-events-auto">
                    <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl animate-pulse">🚀</span>
                    </div>
                    <h2 className="text-3xl font-bold text-brand-navy mb-4">{title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        {description}
                    </p>
                    <div className="flex justify-center gap-4">
                        <div className="h-1 w-12 bg-brand-green rounded-full"></div>
                        <div className="h-1 w-4 bg-brand-green/30 rounded-full"></div>
                        <div className="h-1 w-2 bg-brand-green/10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
