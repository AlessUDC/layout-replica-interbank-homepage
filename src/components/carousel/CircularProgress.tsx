import { useState } from 'react';

interface CircularProgressProps {
    number: number;
    isActive: boolean;
    isPaused: boolean;
    progress: number;
    onClick: () => void;
}

const CircularProgress = ({
    number,
    isActive,
    isPaused,
    progress,
    onClick,
}: CircularProgressProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const size = 36;
    const center = size / 2;
    const radius = 16;
    const strokeWidth = 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative cursor-pointer transition-opacity duration-200"
            aria-label={`Slide ${number}`}
            type="button"
        >
            <svg
                width={size}
                height={size}
                className="transform -rotate-90"
            >
                {/* Background Circle */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="transparent"
                    stroke="white"
                    strokeWidth={strokeWidth}
                    className="transition-opacity duration-200 ease-in-out opacity-50"
                />

                {/* Progress Circle - Only visible on active */}
                {isActive && (
                    <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        fill="transparent"
                        stroke="white"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="opacity-100 transition-[stroke-dashoffset] duration-100 linear"
                    />
                )}
            </svg>

            {/* Center Content */}
            <div
                className="absolute inset-0 flex items-center justify-center text-white font-medium"
            >
                {isActive ? (
                    isPaused ? (
                        // If Paused -> Show Play Icon (to resume)
                        <svg
                            width="10"
                            height="12"
                            viewBox="0 0 10 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M1 1L9 6L1 11V1Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                    ) : isHovered ? (
                        // If Active & Not Paused & Hovered -> Show Pause Icon (to pause)
                        <svg
                            width="10"
                            height="12"
                            viewBox="0 0 10 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="3" height="12" fill="currentColor" rx="0.5" />
                            <rect x="7" width="3" height="12" fill="currentColor" rx="0.5" />
                        </svg>
                    ) : (
                        // If Active & Not Paused & Not Hovered -> Show Number
                        <span className="text-sm font-semibold">
                            {number}
                        </span>
                    )
                ) : (
                    // If Inactive -> Show Number
                    <span className={`text-sm font-semibold transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-50'
                        }`}>
                        {number}
                    </span>
                )}
            </div>
        </button>
    );
};

export default CircularProgress;
