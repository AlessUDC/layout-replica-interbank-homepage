export default function HeaderBottomBar() {
    return (
        <div className="w-full bg-[#FBFBFB] py-3 cursor-pointer">
            <div className="container mx-auto flex justify-center items-center">
                <img
                    className="w-7 h-7 md:w-11 md:h-11 2xl:w-12 2xl:h-12 mr-2.5"
                    src="/icons/celular-con-mano.png"
                    alt="Celular con mano Interbank"
                />

                <p className="w-13/20 md:w-fit text-center text-[#0039a6] text-[14px] font-semibold leading-tight">
                    Abre tu Cuenta Simple y accede a descuentos desde tu Interbank App
                </p>
            </div>
        </div>
    )
}
