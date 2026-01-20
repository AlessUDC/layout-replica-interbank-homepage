import { productosGridItems } from "../../db/db";

export default function ProductosGrid() {
    return (
        <div className="w-full xl:w-fit mb-8">
            <h2
                className="mb-5 text-2xl xl:text-3xl font-semibold text-center"
            >
                ¿Qué productos necesitas hoy?
            </h2>
            <div className="w-fit mx-auto grid grid-rows-3 grid-cols-3 gap-x-6 gap-y-4">
                {productosGridItems.map((item) => (
                    <div
                        key={item.id}
                        className="w-25 xl:w-full xl:h-35
                            flex flex-col items-center justify-center p-1.25 
                            border-[0.25px] border-green-950/10 rounded-tl-2xl rounded-br-2xl
                            hover:scale-101 hover:shadow-md hover:shadow-green-950/20 hover:translate-y-[-2px] 
                            transition-transform duration-500 ease-in-out cursor-pointer
                        "
                    >
                        <img
                            src={item.src}
                            alt={item.description}
                            className="w-7.5 h-7.5 md:w-10 md:h-10 lg:w-16 lg:h-16 2xl:w-14 2xl:h-14 mb-[6px] xl:mb-2.5"
                            draggable={false}
                            loading="lazy"
                        />
                        <p className="text-center font-semibold text-sm 2xl:text-base 2xl:w-3/4 leading-none">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div >
    )
}