const beneficiosCards = [
    {
        id: 1,
        title: "Tu información siempre segura",
        description: "Conoce nuestras recomendaciones de ciberseguridad.",
        imageMobile: "/info-siempre-segura-mobile.jpg",
        imageDesktop: "/info-siempre-segura-desktop.jpg"
    },
    {
        id: 2,
        title: "Priority Pass",
        description: "Conoce todo para seguir disfrutando de visitas gratis e ilimitadas a Salones Vip Internacionales.",
        imageMobile: "/priority-pass-mobile.png",
        imageDesktop: "/priority-pass-desktop.png"
    }
]

export default function SeccionBeneficios() {
    return (
        <section className="w-full h-fit px-6.5 md:px-12.5 lg:px-8 py-13 md:py-16 lg:py-20 border-0.25 border-gray-200 shadow-2xs lg:border-b-[0.25px] lg:border-gray-200">
            <div className="flex flex-col items-center md:flex-row 2xl:justify-center gap-5 lg:gap-10">
                {beneficiosCards.map((card) => (
                    <a
                        key={card.id}
                        href="#"
                        className={`
                            relative block
                            w-full 2xl:max-w-xl h-59
                            rounded-tl-4xl rounded-br-4xl
                            overflow-hidden
                        `}
                    >
                        {/* Imagen Fondo Mobile */}
                        <img
                            src={card.imageMobile}
                            alt={card.title}
                            className="absolute inset-0 w-full h-full object-cover object-center lg:hidden -z-10"
                        />
                        {/* Imagen Fondo Desktop */}
                        <img
                            src={card.imageDesktop}
                            alt={card.title}
                            className="absolute inset-0 w-full h-full object-cover object-center hidden lg:block -z-10"
                        />

                        {/* Overlay opcional */}
                        <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors duration-300" />

                        {/* Texto */}
                        <div className="relative z-10 w-4/5 md:w-full lg:w-3/5 xl:w-1/2 px-6.5 lg:px-8.5 xl:px-10.5 py-8 text-white">
                            <h2 className="mb-3 text-2xl md:text-3xl">
                                {card.title}
                            </h2>
                            <p>
                                {card.description}
                            </p>
                        </div>
                    </a>
                ))}

            </div>
        </section>
    )
}
