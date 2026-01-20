import { useState } from "react"

export default function PreaprobadosCTA() {
    const [dni, setDni] = useState("")
    const [error, setError] = useState(false)
    const [touched, setTouched] = useState(false);

    const validate = (value: string) => {
        return value.trim() !== ""
    }

    const handleBlur = () => {
        setTouched(true)
        setError(!validate(dni))
    }

    return (
        <div className="w-full xl:w-fit">
            {/* Icono regalo + title: Caja de sorpresas */}
            <div className="flex justify-center items-center gap-2 mb-5 ">
                <img
                    src="/icons/caja-regalo.webp"
                    alt="Caja de sorpresas"
                    className="w-12.5 h-12.5 object-cover"
                    loading="lazy"
                />
                <h2 className="text-2xl xl:text-3xl font-semibold text-center">¡Caja de sorpresas!</h2>
            </div>

            {/* Caja verde */}
            <div className="w-full max-w-xs md:max-w-md lg:max-w-sm mx-auto bg-[#05BE50] px-5 lg:px-11 py-7 lg:py-13.5 mb-4 rounded-xl relative">
                <img
                    src="/icons/lazo-azul.webp"
                    alt="Lazo azul"
                    className="absolute w-19 h-19 md:w-34.5 md:h-34.5 top-0 right-0 object-cover"
                    loading="lazy"
                />

                <div className="w-full flex justify-center mb-2" >
                    <p
                        className="w-fit uppercase text-[10px] md:text-xs font-bold tracking-widest 
                    text-center text-white rounded-full bg-[#0039a6] px-4 py-1"
                    >Para Ti</p>
                </div>

                <h2 className="mx-auto text-base md:text-lg xl:text-xl mb-4 text-center text-white font-semibold"
                >Ingresa tu DNI y descubre tus productos preaprobados</h2>

                <p className="mx-auto text-center text-sm md:text-base xl:text-lg 2xl:text-base text-white mb-2.5">
                    Te mostraremos los productos y beneficios que puedes adquirir
                </p>

                <div className="mx-auto mb-8">
                    {/* Bandeja de ingresar DNI */}
                    <input
                        type="number"
                        placeholder="Ingrese su DNI"
                        value={dni}
                        onChange={(e) => {
                            setDni(e.target.value)

                            // Si el usuario corrige el error, lo quitamos
                            if (touched) {
                                setError(!validate(e.target.value))
                            }
                        }}
                        onBlur={handleBlur}
                        className={`
                            w-full h-12 px-5 border bg-white rounded-md caret-[#05be50]
                            ${error ? "border-red-500" : "border-white"}
                            focus:outline-none
                            ${error ? "focus:ring-red-500" : "focus:ring-[#05be50]"}
                        `}
                    />
                    {error && <p className="text-red-500 text-xs md:text-sm mt-2 font-bold">Ingresa tu número de DNI</p>}
                </div>


                <div className="mx-auto mt-3 md:flex md:justify-center">
                    <button
                        type="button"
                        className="
                            w-full md:w-1/2 md:h-14 p-2 bg-[#0039a6] hover:bg-[#3361B8] 
                            transition-transform duration-300 ease-in-out 
                            font-semibold text-sm md:text-base text-white rounded-md
                        "
                    >
                        Ver productos
                    </button>
                </div>
            </div>

            <p className="w-full max-w-xs md:max-w-md lg:max-w-sm mx-auto text-[#878c8f] text-[11px] md:text-xs text-center md:text-start">
                Este sitio esta protegido por reCAPTCHA. Aplican la{' '}
                <span className="text-[#05BE50] font-bold">Política de privacidad</span>
                {' '}de Google y los{' '}
                <span className="text-[#05BE50] font-bold">Términos y Condiciones</span>
            </p>
        </div>
    )
}
