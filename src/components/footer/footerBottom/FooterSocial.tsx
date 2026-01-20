export default function FooterSocial() {
    return (
        <div
            className="
                w-full md:max-w-50 h-fit 
                flex items-center justify-center gap-8.5 lg:gap-6 xl:gap-6
                py-5 lg:py-0
                border-t-2 border-gray-200 md:border-t-0 
                
            "
        >
            {/* Facebook */}
            <a href="#" className="w-fit h-fit inline-block">
                <img
                    src="/footer/icono-facebook.png"
                    alt="icono-facebook"
                    className="w-8 h-8 md:w-6 md:h-6 "
                    loading="lazy"
                />
            </a>

            {/* Twitter */}
            <a href="#" className="w-fit h-fit inline-block">
                <img
                    src="/footer/icono-twitter.png"
                    alt="icono-twitter"
                    className="w-8 h-8 md:w-6 md:h-6 "
                    loading="lazy"
                />
            </a>

            {/* Youtube */}
            <a href="#" className="w-fit h-fit inline-block">
                <img
                    src="/footer/icono-youtube.png"
                    alt="icono-youtube"
                    className="w-8 h-8 md:w-6 md:h-6 "
                    loading="lazy"
                />
            </a>

            {/* Instagram */}
            <a href="#" className="w-fit h-fit inline-block">
                <img
                    src="/footer/icono-instagram.png"
                    alt="icono-instagram"
                    className="w-8 h-8 md:w-6 md:h-6 "
                    loading="lazy"
                />
            </a>


        </div>
    )
}
