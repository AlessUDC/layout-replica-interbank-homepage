"use client"
import { useState } from "react"
import { footerLinks } from "../../db/db"
import Flecha from "../../svg/Flecha"
import LogoWhatsapp from "../../svg/LogoWhatsapp"


export default function FooterNARLC() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="w-full bg-white lg:px-16.5 lg:py-10">
            {/* Mobile / Tablet View (Accordion) */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:hidden gap-0">
                {footerLinks.map((section, index) => {
                    const isOpen = openIndex === index

                    return (
                        <div
                            key={`${section.label}-${index}`}
                            className="w-full lg:bg-white border-t-2 border-gray-200 lg:border-none"
                        >
                            {/* Header */}
                            <button
                                onClick={() => toggle(index)}
                                className={`
                                    w-full px-7 py-5 md:py-4 lg:px-0 lg:pb-5 lg:pt-0 flex justify-between items-center 
                                    font-semibold text-base md:text-xl lg:text-xl lg:text-wrap lg:cursor-default lg:items-start
                                    border-b-2 lg:border-none transition-all duration-300
                                    ${isOpen ? "border-gray-200 lg:bg-white" : "border-transparent lg:bg-white"}
                                `}
                            >
                                {section.label}

                                {/* Flecha solo mobile */}
                                <span className="lg:hidden">
                                    {isOpen ? (
                                        <Flecha className="w-3 h-3 text-black font-black transition-all duration-300 ease-in-out rotate-270" />
                                    ) : (
                                        <Flecha className="w-3 h-3 text-black font-black transition-all duration-300 ease-in-out rotate-90" />
                                    )}
                                </span>
                            </button>

                            {/* Content */}
                            <div
                                className={`
                                    overflow-hidden transition-all duration-300 
                                    ${isOpen ? "max-h-[1000px] bg-gray-100" : "max-h-0"}
                                    lg:max-h-full
                                `}
                            >
                                <div className="py-7.5 px-7 md:px-6 lg:p-0">
                                    <ul className="space-y-5 md:space-y-4">
                                        {section.children.map((item, idx) => (
                                            <li key={`${item.label}-${idx}`} className="text-sm ">
                                                {/* Links */}
                                                {item.url && (
                                                    <a
                                                        href={item.url}
                                                        className="
                                                            text-gray-700 text-base 
                                                            hover:text-[#05be50] active:text-[#05be50] 
                                                            no-underline hover:no-underline focus:no-underline 
                                                            active:no-underline 
                                                        "
                                                    >
                                                        {item.label}
                                                    </a>
                                                )}

                                                {/* Contáctanos */}
                                                {item.number && (
                                                    <div>
                                                        <p className="mb-2.5">{item.label}</p>
                                                        <p className="text-gray-600 flex items-center gap-2">
                                                            <LogoWhatsapp className="w-7.5 h-7.5 text-[#05be50]" />
                                                            <span className="text-xl font-semibold">{item.number}</span>
                                                        </p>
                                                    </div>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Desktop View (Flex Column Layout) */}
            <div className="hidden lg:grid grid-cols-4 max-w-5xl xl:max-w-7xl mx-auto gap-8 xl:gap-32 2xl:gap-0">
                {footerLinks.map((section, index) => {
                    // Si es "Legales", no lo renderizamos como columna aparte (ya se incluirá en Respaldo)
                    if (section.label === "Legales") return null

                    return (
                        <div key={`${section.label}-${index}`} className="flex flex-col">
                            <h3 className="font-semibold text-xl mb-6 text-black">
                                {section.label}
                            </h3>
                            <ul className="space-y-4">
                                {section.children.map((item, idx) => (
                                    <li key={`${item.label}-${idx}`} className="text-sm">
                                        {/* Links */}
                                        {item.url && (
                                            <a
                                                href={item.url}
                                                className="
                                                    text-gray-700 text-base
                                                    hover:text-[#05be50] active:text-[#05be50] 
                                                    no-underline hover:no-underline focus:no-underline 
                                                    active:no-underline 
                                                "
                                            >
                                                {item.label}
                                            </a>
                                        )}

                                        {/* Contáctanos */}
                                        {item.number && (
                                            <div>
                                                <p className="mb-2.5">{item.label}</p>
                                                <p className="text-gray-600 flex items-center gap-2">
                                                    <LogoWhatsapp className="w-7.5 h-7.5 text-[#05be50]" />
                                                    <span className="text-xl lg:text-3xl font-semibold">{item.number}</span>
                                                </p>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            {/* Si es Respaldo Interbank, agregamos aquí debajo la sección de Legales */}
                            {section.label === "Respaldo Interbank" && (
                                <div className="mt-8">
                                    <h3 className="font-semibold text-xl mb-6 text-black">
                                        {footerLinks.find(s => s.label === "Legales")?.label}
                                    </h3>
                                    <ul className="space-y-4">
                                        {footerLinks.find(s => s.label === "Legales")?.children.map((item, idx) => (
                                            <li key={`legales-${idx}`} className="text-sm">
                                                {item.url && (
                                                    <a
                                                        href={item.url}
                                                        className="
                                                        text-gray-700 text-base
                                                        hover:text-[#05be50] active:text-[#05be50] 
                                                        no-underline hover:no-underline focus:no-underline 
                                                        active:no-underline 
                                                    "
                                                    >
                                                        {item.label}
                                                    </a>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div >
    )
}
