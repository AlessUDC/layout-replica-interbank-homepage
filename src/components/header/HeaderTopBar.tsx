type itemLinksHeader = {
    label: string
    href: string
}

const topBarLinks: itemLinksHeader[] = [
    { label: "Personas", href: "#" },
    { label: "Negocios", href: "#" },
    { label: "Empresas e instituciones", href: "#" },
]

export default function HeaderTopBar() {
    return (
        <div className="w-full h-fit bg-[#0039a6]">
            <div className="w-full h-full 2xl:w-318 flex items-center justify-start px-4 md:px-3 lg:px-8.5 xl:px-10 2xl:px-88">
                {topBarLinks.map((item, index) => {
                    const isFirst = index === 0

                    return (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`
                                text-white text-[10px] md:text-xs uppercase font-bold 
                                px-2 py-3 md:px-3 md:py-2.75 lg:py-2 tracking-wider
                                ${isFirst ? "bg-[#3361B8]" : ""}
                            `}
                            style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                        >
                            {item.label}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

