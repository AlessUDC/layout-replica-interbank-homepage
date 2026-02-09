import { useState, useEffect, useRef } from "react"
import CircularProgress from "./CircularProgress"
import type { HeroImage } from "../../types"

interface ModernCarouselProps {
    slides: HeroImage[]
    autoPlayDuration?: number
}

const ModernCarousel = ({ slides, autoPlayDuration = 5000 }: ModernCarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const startTimeRef = useRef<number | null>(null)
    const pausedTimeRef = useRef<number>(0)
    const animationRef = useRef<number | null>(null)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        resetProgress()
    }

    const resetProgress = () => {
        setProgress(0)
        startTimeRef.current = null
        pausedTimeRef.current = 0
    }

    const animate = (timestamp: number) => {
        if (!startTimeRef.current) {
            startTimeRef.current = timestamp - pausedTimeRef.current
        }

        const elapsed = timestamp - startTimeRef.current
        const newProgress = Math.min((elapsed / autoPlayDuration) * 100, 100)

        setProgress(newProgress)

        if (newProgress >= 100) {
            nextSlide()
        } else {
            animationRef.current = requestAnimationFrame(animate)
        }
    }

    useEffect(() => {
        if (!isPaused && !isHovered) {
            animationRef.current = requestAnimationFrame(animate)
        } else {
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
            if (startTimeRef.current) {
                pausedTimeRef.current = performance.now() - startTimeRef.current
                startTimeRef.current = null
            }
        }

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
        }
    }, [currentSlide, isPaused, isHovered])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
        resetProgress()
    }

    return (
        <div
            className="relative w-full h-[500px] overflow-hidden group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Slides */}
            <div
                className="w-full h-full flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full h-full shrink-0 relative">
                        <img
                            src={slide.images.desktop}
                            alt={slide.alt}
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay Gradient similar to Interbank */}
                        <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />

                        {/* Content Panel Placeholder */}
                        <div className="absolute top-1/2 left-20 -translate-y-1/2 text-white max-w-lg">
                            <h2 className="text-5xl font-bold mb-4">{slide.alt}</h2>
                            <button className="bg-[#05BE50] text-white px-8 py-3 rounded font-bold hover:bg-[#049c41] transition-colors">
                                Lo quiero
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom Dots / Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                {slides.map((_, index) => (
                    <div key={index} className="cursor-pointer">
                        <CircularProgress
                            number={index + 1}
                            isActive={currentSlide === index}
                            isPaused={isPaused && currentSlide === index}
                            progress={currentSlide === index ? progress : 0}
                            onClick={() => {
                                if (currentSlide === index) {
                                    setIsPaused(!isPaused)
                                } else {
                                    goToSlide(index)
                                }
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ModernCarousel
