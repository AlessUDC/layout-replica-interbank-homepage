export type HeroImage = {
    id: number
    images: {
        mobile: string
        tablet: string
        desktop: string
    }
    alt: string
}

export type ProductosGridItems = {
    id: number
    src: string
    description: string
}

export type HeroPanelSlide = {
    id: number
    title: string
    description: string
    value: string
}
export type itemSolucionesDigitales = {
    id: number
    title: string
    description: string
    image: string
    value: string
}

// Item base para cualquier elemento del footer
export type FooterItem = {
    id?: number
    label: string
    url?: string
    number?: string
    text?: string
    children?: FooterItem[]
}

// Sección principal del footer (columnas)
export type FooterSection = {
    id: number
    label: string
    children: FooterItem[]
}

// Tipo final del arreglo
export type FooterList = FooterSection[]