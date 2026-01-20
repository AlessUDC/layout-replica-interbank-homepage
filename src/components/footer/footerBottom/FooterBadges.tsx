
export default function FooterBadges() {
    return (
        <div
            className="
                flex justify-center items-center gap-9 md:gap-11 lg:gap-0 xl:gap-9
                border-t-2 border-gray-200 md:border-t-0
                py-5 lg:py-0
            "
        >
            {/* Libro de reclamaciones */}
            <a
                href=""
                className="inline-block"
            >
                <img
                    src="/footer/libro-reclamaciones.jpg"
                    alt="libro-reclamaciones"
                    className="w-22 h-auto"
                    loading="lazy"
                />
            </a>

            {/* Compromiso Logo */}
            <div>
                <img
                    src="/footer/compromiso.png"
                    alt="compromiso"
                    className="w-15 h-auto"
                    loading="lazy"
                />
            </div>
        </div>
    )
}
