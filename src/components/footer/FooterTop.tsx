
export default function FooterTop() {
    return (
        <div className="w-full lg:w-fit lg:flex xl:max-w-5xl xl:gap-14 px-12.5 md:px-31 lg:px-0 py-8 md:py-10 lg:border-b-[0.25px] lg:border-gray-200">
            {/* Contenedor Interbank APP */}
            <div className="w-full lg:flex lg:items-center lg:gap-2 xl:gap-6">
                <div className="w-full lg:w-fit mb-5 md:mb-3 lg:mb-0">
                    <img
                        src="/icono-interbank.webp"
                        alt="icono-interbank"
                        className="w-15 h-15 mx-auto lg:mx-0"
                        loading="lazy"
                    />
                </div>
                <div className="w-full lg:w-4/5 lg:flex lg:flex-col">
                    <div className="w-full mb-2 md:mb-3 lg:mb-0">
                        <h2 className="lg:w-full text-2xl md:text-[28px] lg:text-[32px] text-center lg:text-left font-semibold">
                            Interbank APP
                        </h2>
                    </div>
                    <div className="w-full">
                        <p className="lg:w-full text-sm md:text-base lg:text-lg text-center lg:text-left">
                            Todas las operaciones desde tu celular
                        </p>
                    </div>
                </div>

            </div>

            {/* Contenedor tarjetas AppStore,GooglePlay,AppGallery */}
            <div className="w-full mt-5 md:mt-7.5 lg:mt-0 flex flex-wrap lg:flex-nowrap justify-center lg:items-center gap-x-5 md:gap-x-6 gap-y-3">
                <div className="max-w-[127px] md:max-w-[152px] lg:min-w-[152px]">
                    <a href="">
                        <img
                            src="/footer/badge-apple.png"
                            alt="badge-apple"
                            loading="lazy"
                        />
                    </a>
                </div>
                <div className="max-w-[127px] md:max-w-[152px] lg:min-w-[152px]">
                    <a href="">
                        <img
                            src="/footer/badge-google-play.png"
                            alt="badge-google-play"
                            loading="lazy"
                        />
                    </a>
                </div>
                <div className="max-w-[127px] md:max-w-[152px] lg:min-w-[152px]">
                    <a href="">
                        <img
                            src="/footer/badge-app-galery.webp"
                            alt="badge-app-galery"
                            loading="lazy"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
