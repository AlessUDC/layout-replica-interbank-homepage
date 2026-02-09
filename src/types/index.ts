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

// Interfaces para el menú de navegación
export interface NavbarItem {
    label: string
    href?: string
}

export interface NavbarGroup {
    label: string
    items: NavbarItem[]
}

export interface NavbarCategory {
    label: string
    icon?: string
    groups: NavbarGroup[] | NavbarItem[] // Groups for "Productos", Items for "Promociones" (flattened) or simple lists
    rightPanel?: {
        style: 'default' | 'card' | 'empty'
        title?: string
        subtitle?: string
        buttonText?: string
        buttonHref?: string
        image?: string
        imageAlt?: string
    }
    image?: string
}

export interface NavbarLink {
    label: string
    href: string
    categories?: NavbarCategory[]
}