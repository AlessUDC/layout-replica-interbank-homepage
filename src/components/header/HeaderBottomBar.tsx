export default function HeaderBottomBar() {
    return (
        <div className="w-full bg-[#FBFBFB] py-3 cursor-pointer">
            <div className="container mx-auto flex justify-center items-center">
                <img
                    className="w-7 h-7 md:w-11 md:h-11 mr-2.5"
                    src="/icons/mano-con-tarjeta.png"
                    alt="Mano con tarjeta Interbank"
                />

                <p className="w-13/20 md:w-fit text-center text-[#0039a6] text-[14px] font-semibold leading-tight">
                    ¡Obtén tu Tarjeta de crédito y accede a descuentos exclusivos!
                    <a href="#" title="Pidela aquí" className="ml-2.5">
                        Pidela aquí
                    </a>
                </p>
            </div>
        </div>
    )
}
