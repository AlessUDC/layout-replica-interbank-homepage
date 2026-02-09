import type { HeroImage, HeroPanelSlide } from "../../types"

type Props = {
    image: HeroImage
    panel?: HeroPanelSlide
}

export default function HeroCarouselItem({ image, panel }: Props) {
    return (
        <div
            className="relative w-full h-80 md:h-116 lg:h-125 overflow-hidden "

        >
            {/* Mobile Image */}
            <img
                src={image.images.mobile}
                alt={image.alt}
                className="w-full h-full object-cover block relative md:hidden rounded-br-[60px] md:rounded-br-[80px]"
                loading="lazy"
                draggable={false}
            />

            {/* Tablet Image */}
            <img
                src={image.images.tablet}
                alt={image.alt}
                className="w-full h-full object-cover hidden md:block relative lg:hidden rounded-br-[60px] md:rounded-br-[80px]"
                loading="lazy"
                draggable={false}
            />

            {/* Desktop Image */}
            <img
                src={image.images.desktop}
                alt={image.alt}
                className="w-full h-full object-cover hidden lg:block relative rounded-br-[60px] md:rounded-br-[80px]"
                loading="lazy"
                draggable={false}
            />

            {panel && (
                <>
                    {/* Mobile */}
                    <div className="md:hidden w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-full px-6.5">
                            <div className="w-17/20 flex flex-col items-center ">
                                <div className="w-full">
                                    <h2 className="text-3xl font-semibold text-white select-none">
                                        {panel.title}
                                    </h2>
                                </div>
                                <div className="w-full mt-3">
                                    <p className="text-white text-base select-none">{panel.description}</p>
                                    <button className="w-fit h-12 bg-white text-[#05BE50] mt-6 px-8 rounded">
                                        <p className="text-[#05BE50] text-nowrap font-semibold">
                                            {panel.value}
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tablet */}
                    <div className="hidden md:block lg:hidden w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-full px-12.5">
                            <div className="w-3/4 flex flex-col items-center">
                                <div className="w-full">
                                    <h2 className="text-[44px] font-semibold text-white leading-14 select-none">
                                        {panel.title}
                                    </h2>
                                </div>
                                <div className="w-full mt-3">
                                    <p className="text-white text-xl select-none">{panel.description}</p>
                                    <button className="w-fit h-12 bg-white text-[#05BE50] mt-6 px-8 rounded">
                                        <p className="text-[#05BE50] text-nowrap font-semibold">
                                            {panel.value}
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop */}
                    <div className="hidden lg:block w-full 2xl:max-w-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-full  2xl:mx-auto px-16.5 xl:px-20 2xl:px-0">
                            <div className="w-47/100  flex flex-col items-center xl:items-start">
                                <div className="w-full 2xl:w-9/10">
                                    <h2 className="text-[52px] font-semibold text-white leading-14 select-none">
                                        {panel.title}
                                    </h2>
                                </div>
                                <div className="w-full xl:w-9/10 mt-3">
                                    <p className="text-white text-xl select-none">{panel.description}</p>
                                    <button className="w-fit h-14 bg-white text-[#05BE50] mt-10 px-8 rounded cursor-pointer">
                                        <p className="text-[#05BE50] text-nowrap font-semibold">
                                            {panel.value}
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
