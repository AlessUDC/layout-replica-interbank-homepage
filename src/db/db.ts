import type { FooterList, HeroImage, HeroPanelSlide, ProductosGridItems } from "../types";

// Hero Images
export const heroImages: HeroImage[] = [
    {
        id: 1,
        images: {
            mobile: "/hero/hero-cmillonaria-2depas-diciembre-mobile.jpg",
            tablet: "/hero/hero-cmillonaria-2depas-diciembre-tablet.jpg",
            desktop: "/hero/hero-cmillonaria-2depas-diciembre-desktop.jpg",
        },
        alt: "hero-cmillonaria-2depas-diciembre",
    },
    {
        id: 2,
        images: {
            mobile: "/hero/hero-mujer-con-plin-mobile.png",
            tablet: "/hero/hero-mujer-con-plin-tablet.png",
            desktop: "/hero/hero-mujer-con-plin-desktop.png",
        },
        alt: "hero-mujer-con-plin",
    },
    {
        id: 3,
        images: {
            mobile: "/hero/hero-hombre-con-parrilla-mobile.jpg",
            tablet: "/hero/hero-hombre-con-parrilla-tablet.jpg",
            desktop: "/hero/hero-hombre-con-parrilla-desktop.jpg",
        },
        alt: "hero-plin",
    },
    {
        id: 4,
        images: {
            mobile: "/hero/hero-mujer-con-hombre-mobile.jpg",
            tablet: "/hero/hero-mujer-con-hombre-tablet.jpg",
            desktop: "/hero/hero-mujer-con-hombre-desktop.jpg",
        },
        alt: "hero-mujer-con-hombre",
    },
]

// Productos grid items
export const productosGridItems: ProductosGridItems[] = [
    {
        id: 1,
        src: "/icons/tarjeta-de-credito.png",
        description: "Una tarjeta de crédito",
    },
    {
        id: 2,
        src: "/icons/bolsa-soles.png",
        description: "Un préstamo o crédito",
    },
    {
        id: 3,
        src: "/icons/chancho.png",
        description: "Una cuenta de ahorros",
    },
    {
        id: 4,
        src: "/icons/telefono.png",
        description: "Una cuenta sueldo",
    },
    {
        id: 5,
        src: "/icons/bloqueo-tarjetas-de-credito.png",
        description: "Seguro de Tarjetas 360°",
    },
    {
        id: 6,
        src: "/icons/carro-azul.png",
        description: "SOAT digital, desde S/35",
    },
    {
        id: 7,
        src: "/icons/agente.png",
        description: "Pago automático",
    },
    {
        id: 8,
        src: "/icons/transferencia.png",
        description: "Tipo de cambio",
    },
]

export const footerLinks: FooterList = [
    {
        id: 1,
        label: "Nosotros",
        children: [
            {
                id: 1,
                label: "Nosotros",
                url: "/nosotros",
            },
            {
                id: 2,
                label: "Sostenibilidad",
                url: "/sostenibilidad",
            },
            {
                id: 3,
                label: "Corresponsalía",
                url: "/corresponsalidad",
            },
            {
                id: 4,
                label: "Noticias",
                url: "/noticias",
            },
            {
                id: 5,
                label: "Trabaja con nosotros",
                url: "/trabaja-con-nosotros",
            },
            {
                id: 6,
                label: "Somos transparentes",
                url: "/somos-transparentes",
            },
            {
                id: 7,
                label: "Canal Ético",
                url: "/canal-etico",
            },
            {
                id: 8,
                label: "Agente Interbank",
                url: "/agente-interbank",
            },
            {
                id: 9,
                label: "GlobalNet",
                url: "/globalnet",
            },
        ]
    },
    {
        id: 2,
        label: "Ayuda y contacto",
        children: [
            {
                id: 1,
                label: "Puntos de atención",
                url: "/puntos-de-atencion",
            },
            {
                id: 2,
                label: "Canales digitales",
                url: "/canales-digitales",
            },
            {
                id: 3,
                label: "Centro de ayuda",
                url: "/centro-de-ayuda",
            },
            {
                id: 4,
                label: "Preguntas frecuentes",
                url: "/preguntas-frecuentes",
            },
            {
                id: 5,
                label: "Protégete de los fraudes",
                url: "/protégete-de-los-fraudes",
            },
            {
                id: 6,
                label: "Comprobante electrónico",
                url: "/comprobante-electronico",
            },
            {
                id: 7,
                label: "Cronograma de pagos",
                url: "/cronograma-de-pagos",
            },
        ]
    },
    {
        id: 3,
        label: "Respaldo Interbank",
        children: [
            {
                id: 1,
                label: "Shopstar",
                url: "/shopstar",
            },
            {
                id: 2,
                label: "CIMA",
                url: "/cima",
            },
        ]
    },
    {
        id: 3,
        label: "Legales",
        children: [
            {
                id: 1,
                label: "Tasas y tarifas",
                url: "/tasas-y-tarifas",
            },
            {
                id: 2,
                label: "Avisos Legales",
                url: "/avisos-legales",
            },
            {
                id: 2,
                label: "Lista de notarios",
                url: "/lista-de-notarios",
            },
        ]
    },
    {
        id: 4,
        label: "Contáctanos",
        children: [
            {
                id: 1,
                label: "Por WhatsApp con AVI, todos los días, las 24 horas",
                number: "993 119 000",
                text: "Todo el día de lunes a sábado",
                children: [
                    {
                        label: "Lima",
                        number: "311 9000",
                    },
                    {
                        label: "Provincias",
                        number: "0 801 00802",
                    },
                    {
                        label: "Canal de Ventas",
                        number: "311 9086",
                    },
                    {
                        label: "Convenios",
                        number: "311 9006",
                        text: "Lunes a viernes de 9am a 6pm Sábados de 9am a 1pm"
                    }
                ]
            },
        ]
    },
]

export const heroPanels: HeroPanelSlide[] = [
    {
        id: 1,
        title: "Te premiamos con 2 Depas más",
        description: "Abre tu Cuenta Millonaria o mantén desde S/1,500 y participa. Próximo sorteo: 23 de enero.",
        value: "¡Quiero participar!"
    },
    {
        id: 2,
        title: "¡Gana comprando con Plin de Interbank!",
        description: "Te devolvemos el 50% de tu compra usando Plin en tus compras online.",
        value: "Inscríbete"
    },
    {
        id: 3,
        title: "Este verano comparte momentos únicos",
        description: "Registra hoy tu DNI y participa por una parrilla + frigobar. ¡Aprovecha esta oportunidad!",
        value: "Hazlo ahora"
    },
    {
        id: 4,
        title: "Obtén 50% dscto. en Tommy Hilfiger",
        description: "Además, 3 o 6 cuotas sin intereses con Tarjetas Interbank solo el 14 y 15 de enero.",
        value: "Conoce más"
    },
]