import FooterTop from "./footer/FooterTop";
import FooterBottom from "./footer/footerBottom/FooterBottom";
import FooterNARLC from "./footer/FooterNARLC";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col items-center">
            {/* Contenedor superior */}
            <FooterTop />

            {/* Contenedor NARLC */}
            <FooterNARLC />

            {/* Contenedor inferior en mobile y tablet */}
            <div className="w-full block lg:hidden">
                <FooterBottom />
            </div>
            {/* Contenedor inferior en vista lg: */}
            <div className="hidden lg:block lg:w-fit lg:mx-auto">
                <FooterBottom />
            </div>
        </footer>
    )
}