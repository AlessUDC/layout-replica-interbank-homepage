import Flecha from "../../svg/Flecha"

interface ArrowProps {
    onClick?: () => void
}

export const CustomLeftArrow = ({ onClick }: ArrowProps) => {
    return (
        <button
            onClick={onClick}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Previous slide"
        >
            <Flecha className="w-6 h-6 text-gray-800 rotate-180 group-hover:text-[#05BE50] transition-colors" />
        </button>
    )
}

export const CustomRightArrow = ({ onClick }: ArrowProps) => {
    return (
        <button
            onClick={onClick}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Next slide"
        >
            <Flecha className="w-6 h-6 text-gray-800 group-hover:text-[#05BE50] transition-colors" />
        </button>
    )
}
