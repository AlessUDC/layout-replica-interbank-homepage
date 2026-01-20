import Carousel from "react-multi-carousel";
import FlechaCrediticio from "../../svg/FlechaCrediticio";
import Flecha from "../../svg/Flecha";
import type { itemSolucionesDigitales } from "../../types";

export default function SeccionSolucionesDigitales() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 80
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 60
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 40
        }
    }

    const tarjetas: itemSolucionesDigitales[] = [
        {
            id: 1,
            title: "Mis Finanzas",
            description: "Ordena y controla tus gastos, desde tu celular, sin problemas.",
            image: "/mis-finanzas.png",
            value: "sorpréndete",
        },
        {
            id: 2,
            title: "PLIN",
            description: "Envía dinero entre bancos, gratis e inmediato. #PlinYListo",
            image: "/plin.png",
            value: "descubre cómo",
        },
        {
            id: 3,
            title: "Alcancía Virtual",
            description: "Acércatea a tus metas ahorrando de forma fácil y segura.",
            image: "/alcancia-virtual.png",
            value: "inicia hoy",
        }
    ]

    return (
        <section className="relative w-full mt-36">
            <div className="relative w-full bg-[#0039a6] pt-24 md:pt-28 lg:pt-33.5 pb-16">
                {/* Cuadro amarillo */}
                <div className="absolute w-full 2xl:max-w-5xl h-fit top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div
                        className="
                            w-17/20 2xl:w-full h-full bg-[#F0AA00]
                            flex items-center justify-between md:justify-center md:gap-14
                            mx-auto 2xl:mx-0
                            px-8 md:px-12.5 lg:px-16.5 
                            py-1 md:py-0
                            rounded-lg md:rounded-xl lg:rounded-3xl shadow-lg 
                        "
                    >
                        <img
                            src="/icons/score-1000-puntos.gif"
                            alt="score-1000-puntos"
                            className="w-28 h-28 "
                            loading="lazy"
                        />

                        <div className="w-fit md:space-y-2">
                            <h2 className="w-fit text-white text-2xl md:text-3xl font-semibold leading-6">
                                Puntaje crediticio
                            </h2>
                            <p className="w-4/5 md:w-full text-white text-xl md:text-2xl leading-5">
                                Conoce tu evaluación aquí
                            </p>
                        </div>

                        <FlechaCrediticio className="w-12 h-12 text-white" />
                    </div>
                </div>

                {/* Contenedor inferior [Cuadro Azul]*/}
                <div className="w-full 2xl:w-fit 2xl:mx-auto">
                    <h2 className="text-white text-xl md:text-2xl lg:text-3xl px-7 mb-8 md:mb-10 lg:mb-13">
                        Conoce nuestras{' '}<span className="font-bold">soluciones digitales.</span>
                    </h2>

                    {/* Tarjetas [3] */}
                    <div className="relative overflow-visible lg:hidden">
                        <Carousel
                            className="w-full"
                            containerClass="overflow-visible"
                            itemClass="pr-6"
                            responsive={responsive}
                            swipeable
                            draggable
                            partialVisible={true}
                            arrows={false}
                            infinite={false}
                        >
                            {tarjetas.map((tarjeta, index) => (
                                <a
                                    key={tarjeta.id}
                                    href="#"
                                    className={`block w-full h-full  ${index === tarjetas.length - 1 ? "pr-6" : ""}`}
                                >
                                    <div
                                        className="
                                            relative w-full h-full flex
                                            bg-[#335CB4] hover:bg-[#3966C7]
                                            px-6 py-7 mx-6
                                            rounded-tl-4xl rounded-br-4xl
                                            transition-colors duration-500 ease-in-out
                                            overflow-hidden
                                        "
                                    >
                                        {/* Contenedor texto */}
                                        <div className="flex flex-col text-white z-10">
                                            <h3 className="font-bold text-lg mb-3">
                                                {tarjeta.title}
                                            </h3>

                                            <p className="w-11/20 leading-5 mb-4">
                                                {tarjeta.description}
                                            </p>

                                            <div className="flex items-center gap-2 mt-auto">
                                                <span className="uppercase text-xs font-extrabold tracking-wider">
                                                    {tarjeta.value}
                                                </span>
                                                <Flecha className="w-3 h-3" />
                                            </div>
                                        </div>
                                        {/* Imagen */}
                                        <div className="absolute bottom-0 right-0">
                                            <img
                                                src={tarjeta.image}
                                                alt={tarjeta.title}
                                                className="w-30 h-auto object-contain"
                                                draggable={false}
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </Carousel>
                    </div>

                    {/* Desktop >1024px */}
                    <div className="hidden lg:flex lg:px-8 lg:gap-8">
                        {tarjetas.map((tarjeta) => (
                            <a
                                key={tarjeta.id}
                                href="#"
                                className="block w-full 2xl:max-w-sm h-full"
                            >
                                <div
                                    className="
                                        group
                                        relative w-full h-full flex
                                        bg-[#335CB4] hover:bg-[#3966C7] hover:scale-[1.02]
                                        px-8 py-11 
                                        rounded-tl-4xl rounded-br-4xl
                                        transition-transform duration-500 ease-in-out
                                        overflow-hidden
                                    "
                                >
                                    {/* Contenedor texto */}
                                    <div className="lg:h-44 flex flex-col text-white z-10">
                                        <h3 className="font-bold text-lg lg:text-xl mb-3">
                                            {tarjeta.title}
                                        </h3>

                                        <p className="w-11/20 leading-5 mb-4">
                                            {tarjeta.description}
                                        </p>

                                        <div className="flex items-center gap-2 mt-auto">
                                            <span className="uppercase text-xs font-extrabold tracking-wider">
                                                {tarjeta.value}
                                            </span>
                                            <Flecha className="w-3 h-3" />
                                        </div>
                                    </div>
                                    {/* Imagen */}
                                    <div className="absolute bottom-0 right-0">
                                        <img
                                            src={tarjeta.image}
                                            alt={tarjeta.title}
                                            className="w-30 h-auto object-contain relative z-10"
                                            draggable={false}
                                            loading="lazy"
                                        />
                                        <img
                                            src="/estrellas.gif"
                                            alt="Efecto estrellas"
                                            className="absolute top-0 left-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"
                                            draggable={false}
                                        />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}