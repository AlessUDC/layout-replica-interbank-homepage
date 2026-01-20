import Hero from "./Hero";
import ProductosSection from "./productos/ProductosSection";
import SeccionSolucionesDigitales from "./nosotros/SeccionSolucionesDigitales";
import SeccionBeneficios from "./nosotros/SeccionBeneficios";

export default function Main() {
    return (
        <main className="w-full relative">
            <Hero />
            <ProductosSection />
            <SeccionSolucionesDigitales />
            <SeccionBeneficios />
        </main>
    )
}
