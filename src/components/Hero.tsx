import { useEffect, useState, useRef } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { heroImages, heroPanels } from "../db/db"
import HeroCarouselItem from "./hero/HeroCarouselItem"
import CustomDot from "./hero/CustomDot"
import { CustomLeftArrow, CustomRightArrow } from "./hero/HeroArrows"

export default function Hero() {
    const [showArrows, setShowArrows] = useState(false)
    const [showCustomDots, setShowCustomDots] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [progress, setProgress] = useState(0)
    const carouselRef = useRef<any>(null)
    const animationRef = useRef<number | null>(null)
    const startTimeRef = useRef<number | null>(null)
    const pausedTimeRef = useRef<number>(0)
    const autoPlayDuration = 6000

    useEffect(() => {
        const handleResize = () => {
            setShowArrows(window.innerWidth >= 1024)
            setShowCustomDots(window.innerWidth >= 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    // Reset progress when slide changes
    useEffect(() => {
        setProgress(0)
        pausedTimeRef.current = 0
        startTimeRef.current = null
    }, [currentSlide])

    // Animation loop
    useEffect(() => {
        if (!showCustomDots) return

        if (isPaused) {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
            return
        }

        const animate = (timestamp: number) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp - pausedTimeRef.current
            }

            const elapsed = timestamp - startTimeRef.current
            const newProgress = Math.min((elapsed / autoPlayDuration) * 100, 100)

            setProgress(newProgress)

            if (newProgress < 100) {
                animationRef.current = requestAnimationFrame(animate)
            }
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [isPaused, currentSlide, autoPlayDuration, showCustomDots])

    const responsive = {
        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1023, min: 768 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        },
    }

    return (
        <section className="w-full mb-13 relative">
            <Carousel
                ref={carouselRef}
                className="w-full hero-carousel"
                swipeable
                draggable
                responsive={responsive}
                infinite
                autoPlay={!isPaused}
                autoPlaySpeed={autoPlayDuration}
                transitionDuration={700}
                arrows={showArrows}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                showDots={false}
                beforeChange={(nextSlide) => {
                    const slidesCount = heroImages.length;
                    let logicalIndex = nextSlide;
                    if (nextSlide >= slidesCount * 2) {
                        logicalIndex = nextSlide - slidesCount * 2;
                    } else if (nextSlide >= slidesCount) {
                        logicalIndex = nextSlide - slidesCount;
                    }
                    setCurrentSlide(logicalIndex % slidesCount)
                }}
            >
                {heroImages.map((image) => {
                    const panel = heroPanels.find((p) => p.id === image.id)
                    return (
                        <HeroCarouselItem key={image.id} image={image} panel={panel} />
                    )
                })}
            </Carousel>

            {/* External Custom Dots for Frame-Perfect Updates */}
            {showCustomDots && (
                <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {heroImages.map((_, index) => (
                        <CustomDot
                            key={index}
                            index={index}
                            active={index === currentSlide}
                            isPaused={isPaused}
                            setIsPaused={setIsPaused}
                            progress={progress}
                            autoPlayDuration={autoPlayDuration}
                            carouselRef={carouselRef}
                            pausedTimeRef={pausedTimeRef}
                            startTimeRef={startTimeRef}
                            setProgress={setProgress}
                            onClick={() => {
                                if (carouselRef.current) {
                                    carouselRef.current.goToSlide(index)
                                }
                            }}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}
