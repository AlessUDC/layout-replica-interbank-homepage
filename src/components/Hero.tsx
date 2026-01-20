import { useEffect, useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { heroImages, heroPanels } from "../db/db"
import HeroCarouselItem from "./hero/HeroCarouselItem"

export default function Hero() {
    const [showArrows, setShowArrows] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setShowArrows(window.innerWidth >= 1024)
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
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
        <section className="w-full mb-13">
            <Carousel
                className="w-full hero-carousel"
                swipeable
                draggable
                responsive={responsive}
                infinite
                autoPlaySpeed={6000}
                arrows={showArrows}
                showDots={true}
            >
                {heroImages.map((image) => {
                    const panel = heroPanels.find((p) => p.id === image.id)
                    return (
                        <HeroCarouselItem key={image.id} image={image} panel={panel} />
                    )
                })}
            </Carousel>
        </section>
    )
}
