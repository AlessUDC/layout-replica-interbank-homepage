
import { memo } from "react"
import CircularProgress from "../carousel/CircularProgress"

interface CustomDotProps {
    index?: number
    active?: boolean
    onClick?: () => void
    isPaused: boolean
    setIsPaused: (paused: boolean | ((prev: boolean) => boolean)) => void
    progress: number
    autoPlayDuration: number
    carouselRef: any
    pausedTimeRef: any
    startTimeRef: any
    setProgress: any
}

const CustomDot = ({
    index,
    active,
    onClick, // This is provided by react-multi-carousel
    isPaused,
    setIsPaused,
    progress,
    autoPlayDuration,
    carouselRef,
    pausedTimeRef,
    startTimeRef,
    setProgress
}: CustomDotProps) => {

    const handleClick = () => {
        if (active) {
            setIsPaused((prev) => !prev)
            if (!isPaused) {
                // We are pausing
                pausedTimeRef.current = (progress / 100) * autoPlayDuration
            } else {
                // We are resuming - handled by useEffect in Hero, but we might need to adjust startTime
                // Actually Hero's useEffect handles resume if isPaused changes to false
            }
        } else {
            // Inactive dot click
            // Use the onClick provided by react-multi-carousel if available, fallback to ref
            if (onClick) {
                onClick()
            } else if (carouselRef.current && typeof index === 'number') {
                carouselRef.current.goToSlide(index)
            }

            setIsPaused(false)
            setProgress(0)
            pausedTimeRef.current = 0
            startTimeRef.current = null
        }
    }

    if (typeof index !== "number") return null

    return (
        <CircularProgress
            number={index + 1}
            isActive={active || false}
            isPaused={isPaused && (active || false)}
            progress={active ? progress : 0}
            onClick={handleClick}
        />
    )
}

export default memo(CustomDot)
