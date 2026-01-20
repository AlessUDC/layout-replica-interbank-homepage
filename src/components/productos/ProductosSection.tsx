import PreaprobadosCTA from "./PreaprobadosCTA";
import ProductosGrid from "./ProductosGrid";

export default function ProductosSection() {
    return (
        <section className="w-full md:px-8 xl:flex xl:justify-center my-6 xl:my-16 md:flex md:gap-20 lg:gap-0 xl:gap-12">
            <ProductosGrid />
            <PreaprobadosCTA />
        </section>
    )
}
