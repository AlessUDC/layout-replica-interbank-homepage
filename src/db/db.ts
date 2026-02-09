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
        src: "/icons/bolsa-soles.png",
        description: "Un préstamo o crédito",
    },
    {
        id: 2,
        src: "/icons/tarjeta-de-credito.png",
        description: "Una tarjeta de crédito",
    },
    {
        id: 3,
        src: "/icons/extracash.png",
        description: "Extracash",
    },
    {
        id: 4,
        src: "/icons/chancho.png",
        description: "Una cuenta de ahorros",
    },
    {
        id: 5,
        src: "/icons/telefono.png",
        description: "Una cuenta sueldo",
    },
    {
        id: 6,
        src: "/icons/bloqueo-tarjetas-de-credito.png",
        description: "Seguro de Tarjetas 360°",
    },
    {
        id: 7,
        src: "/icons/carro-azul.png",
        description: "SOAT digital, desde S/35",
    },
    {
        id: 8,
        src: "/icons/agente.png",
        description: "Pago automático",
    },
    {
        id: 9,
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

import type { NavbarLink } from "../types";

export const navbarData: NavbarLink[] = [
    {
        label: "Productos",
        href: "#",
        categories: [
            {
                label: "Tarjetas",
                icon: "/menubar-svgs-desktop/productos/tarjetas.svg",
                rightPanel: {
                    style: 'default',
                    title: "La tarjeta de crédito que espera por ti",
                    buttonText: "DESCUBRIR",
                    buttonHref: "#",
                    image: "/img-panel-derecho/productos-tarjetas.png"
                },
                groups: [
                    {
                        label: "Tarjetas de Crédito",
                        items: [
                            { label: "Solicita tu Tarjeta", href: "#" },
                            { label: "¿Cómo entender mi Estado de Cuenta?", href: "#" },
                            { label: "Mejora tu Tarjeta", href: "#" },
                            { label: "Tarjeta con Garantía", href: "#" },
                            { label: "Calendario de pagos", href: "#" },
                            { label: "Tarjetas adicionales", href: "#" },
                            { label: "______", },
                            { label: "Ver todas las tarjetas >", href: "#" }
                        ]
                    },
                    {
                        label: "Beneficios de tu Tarjeta",
                        items: [
                            { label: "Extracash", href: "#" },
                            { label: "Incremento de Línea", href: "#" },
                            { label: "Pago Automático", href: "#" },
                            { label: "Compra de Deuda", href: "#" },
                            { label: "Divídelo", href: "#" },
                            { label: "Disposición de Efectivo", href: "#" },
                            { label: "Bienvenido al portal viajero", href: "#" }
                        ]
                    },
                    {
                        label: "Tarjetas de Débito",
                        items: [
                            { label: "Débito Digital", href: "#" },
                            { label: "Débito Benefit", href: "#" },
                            { label: "Débito Clásica", href: "#" },
                            { label: "______", },
                            { label: "Ver todas las tarjetas >", href: "#" }
                        ]
                    },
                    {
                        label: "Ayuda con mi Tarjeta",
                        items: [
                            { label: "Bloquear mi tarjeta >", href: "#" },
                            { label: "Activación de tarjetas >", href: "#" },
                            { label: "Interbank Benefit >", href: "#" }
                        ]
                    }
                ],
                image: "/img-panel-derecho/productos-tarjetas.png"
            },
            {
                label: "Cuentas",
                icon: "/menubar-svgs-desktop/productos/cuentas.svg",
                rightPanel: {
                    style: 'card',
                    subtitle: "INTERBANK PARA MÍ",
                    title: "Abre tu cuenta 100% digital",
                    buttonText: "ENTÉRATE AQUÍ",
                    buttonHref: "#",
                    image: "/img-panel-derecho/productos-cuentas.jpeg"
                },
                groups: [
                    {
                        label: "Cuentas de Ahorro",
                        items: [
                            { label: "Cuenta Simple 100% Digital", href: "#" },
                            { label: "Cuenta Millonaria", href: "#" },
                            { label: "Cuenta Súper Tasa", href: "#" },
                            { label: "Depósito a Plazo", href: "#" },
                            { label: "Cuenta Sueldo", href: "#" },
                            { label: "Cuenta Joven", href: "#" },
                            { label: "______" },
                            { label: "Ver todas las cuentas >", href: "#" }
                        ]
                    },
                    {
                        label: "Cuentas para créditos hipotecarios",
                        items: [
                            { label: "Cuenta Ahorro Techo", href: "#" },
                            { label: "Cuenta Ahorro Casa", href: "#" },
                            { label: "Ahorro Casa con apoyo del exterior", href: "#" }
                        ]
                    },
                    {
                        label: "Otras cuentas",
                        items: [
                            { label: "Otras Cuentas", href: "#" },
                            { label: "Cuenta CTS", href: "#" },
                            { label: "Cuenta Corriente", href: "#" },
                            { label: "Cuenta Euros", href: "#" }
                        ]
                    },
                    {
                        label: "Ayuda con mis cuentas",
                        items: [
                            { label: "Código Interbancario >", href: "#" },
                            { label: "Bloquear mi tarjeta >", href: "#" },
                            { label: "Activar Cuenta Sueldo >", href: "#" }
                        ]
                    }
                ],
                image: "/img-panel-derecho/productos-cuentas.jpeg"
            },
            {
                label: "Préstamos y Créditos",
                icon: "/menubar-svgs-desktop/productos/prestamos-y-creditos.svg",
                rightPanel: {
                    style: 'default',
                    title: "Un préstamo para que lo necesites",
                    buttonText: "SOLICÍTALO",
                    buttonHref: "#",
                    image: "/img-panel-derecho/productos-prestamos-creditos.png"
                },
                groups: [
                    {
                        label: "Préstamos",
                        items: [
                            { label: "Préstamo Personal", href: "#" },
                            { label: "Préstamo con garantía líquida", href: "#" },
                            { label: "Interbank apoya tu negocio", href: "#" },
                            { label: "Préstamo Cuenta Sueldo", href: "#" },
                            { label: "Préstamo para estudios", href: "#" }
                        ]
                    },
                    {
                        label: "Crédito por convenio",
                        items: [
                            { label: "Crédito para Trabajadores Públicos", href: "#" }
                        ]
                    },
                    {
                        label: "Ayuda con mis préstamos",
                        items: []
                    }
                ],
                image: "/img-panel-derecho/productos-prestamos-creditos.png"
            },
            {
                label: "Crédito Hipotecario",
                icon: "/menubar-svgs-desktop/productos/credito-hipotecario.svg",
                rightPanel: {
                    style: 'default',
                    title: "Ingresa a nuestra zona hipotecaria",
                    buttonText: "HAZLO AQUÍ",
                    buttonHref: "#",
                    image: "/img-panel-derecho/productos-credito-hipotecario.png"
                },
                groups: [
                    {
                        label: "Zona Hipotecaria",
                        items: [
                            { label: "Tu guía hipotecaria", href: "#" },
                            { label: "Calculadoras de Créditos Hipotecarios", href: "#" },
                            { label: "Portal Inmobiliario", href: "#" }
                        ]
                    },
                    {
                        label: "Tipos de créditos",
                        items: [
                            { label: "Crédito Hipotecario Tradicional", href: "#" },
                            { label: "Crédito MiVivienda", href: "#" },
                            { label: "Crédito Techo Propio", href: "#" },
                            { label: "Préstamo Persona con Garantía Hipotecaria", href: "#" }
                        ]
                    },
                    {
                        label: "Crédito Hipotecario",
                        items: [
                            { label: "Características y Requisitos", href: "#" }
                        ]
                    }
                ],
                image: "/img-panel-derecho/productos-credito-hipotecario.png"
            },
            {
                label: "Seguros",
                icon: "/menubar-svgs-desktop/productos/seguros.svg",
                rightPanel: {
                    style: 'default',
                    title: "Aseguras tus Tarjetas con Interbank",
                    buttonText: "SOLICÍTALO AQUÍ",
                    buttonHref: "#",
                    image: "/img-panel-derecho/productos-seguros.jpg"
                },
                groups: [
                    {
                        label: "Tarjetas y Préstamos",
                        items: [
                            { label: "Seguro de Tarjetas 360°", href: "#" },
                            { label: "Seguro de Pagos Digitales", href: "#" },
                            { label: "Seguro de Tarjetas Premium", href: "#" },
                            { label: "Seguro Protección de Créditos Full", href: "#" },
                            { label: "Seguro Protección de Créditos", href: "#" },
                            { label: "Seguro de Desgravamen", href: "#" }
                        ]
                    },
                    {
                        label: "Salud y Vida",
                        items: [
                            { label: "Seguro Vive Salud +", href: "#" },
                            { label: "Seguro Vida Devolución", href: "#" },
                            { label: "Seguro Oncológico", href: "#" }
                        ]
                    },
                    {
                        label: "Otros Seguros",
                        items: [
                            { label: "Seguro Vehicular", href: "#" },
                            { label: "SOAT", href: "#" },
                            { label: "Seguro de Viajes", href: "#" },
                            { label: "Seguro Negocio Protegido", href: "#" },
                            { label: "Retiro Protegido", href: "#" }
                        ]
                    },
                    {
                        label: "Ayuda",
                        items: [
                            { label: "Ver todos los seguros >", href: "#" }
                        ]
                    }
                ],
                image: "/img-panel-derecho/productos-seguros.png"
            },
            {
                label: "Envío y recepción de dinero",
                icon: "/menubar-svgs-desktop/productos/envio-y-recepcion-de-dinero.svg",
                rightPanel: {
                    style: 'card',
                    subtitle: "Interbank para mí",
                    title: "Envía y recibe dinero al instante",
                    buttonText: "ENTÉRATE AQUÍ",
                    buttonHref: "#",
                    image: "/img-panel-derecho/productos-envio-recepcion.png"
                },
                groups: [
                    {
                        label: "Transferencias dentro del Perú",
                        items: [
                            { label: "Transferencias de otros bancos vía CCE", href: "#" }
                        ]
                    },
                    {
                        label: "Transferencias entre Perú y el Extranjero",
                        items: [
                            { label: "Transferencias bancarias al exterior", href: "#" },
                            { label: "Transferencias bancarias que recibo del exterior", href: "#" },
                            { label: "Remesas", href: "#" }
                        ]
                    },
                    {
                        label: "Paypal",
                        items: [
                            { label: "Retiro de Fondos PayPal", href: "#" }
                        ]
                    },
                    {
                        label: "Sobre transferencias",
                        items: []
                    }
                ],
                image: "/img-panel-derecho/productos-envio-recepcion.png"
            },
            {
                label: "Inversión y Combos",
                icon: "/menubar-svgs-desktop/productos/inversion-y-combos.svg",
                rightPanel: {
                    style: 'card',
                    subtitle: "INTERBANK PARA MÍ",
                    title: "¡Tus ahorros crecen cada vez más!",
                    buttonText: "ÁBRELA HOY",
                    buttonHref: "#",
                    image: "/img-panel-derecho/productos-inversion-combos.png"
                },
                groups: [
                    {
                        label: "Fondos de Inversión y Depósitos",
                        items: [
                            { label: "Fondos Mutuos", href: "#" },
                            { label: "Depósito a Plazo", href: "#" },
                            { label: "Invertir en la Bolsa", href: "#" },
                            { label: "Fondo de Jubilación", href: "#" }
                        ]
                    },
                    {
                        label: "Combo Clásico",
                        items: [
                            { label: "Tarjeta de Crédito + Cuenta + Interbank APP", href: "#" }
                        ]
                    },
                    {
                        label: "Combo Fácil",
                        items: [
                            { label: "Cuenta + Interbank APP", href: "#" }
                        ]
                    },
                    {
                        label: "Ayuda con mis combos",
                        items: [
                            { label: "Combo automático >", href: "#" }
                        ]
                    }
                ],
                image: "/img-panel-derecho/productos-inversion-combos.png"
            }
        ]
    },
    {
        label: "Promociones",
        href: "#",
        categories: [
            { label: "Mundo Promociones", icon: "/menubar-svgs-desktop/promociones/mundo-promociones.svg", groups: [] },
            { label: "Tarjeta de crédito", icon: "/menubar-svgs-desktop/promociones/tarjeta-de-credito.svg", groups: [] },
            { label: "Tarjeta de débito", icon: "/menubar-svgs-desktop/promociones/tarjeta-de-dedito.svg", groups: [] },
            { label: "Cuota sin interés", icon: "/menubar-svgs-desktop/promociones/cuota-sin-interes.svg", groups: [] },
            { label: "Ver todas las promociones", icon: "/menubar-svgs-desktop/promociones/ver-todas-las-promociones.svg", groups: [] },
            { label: "Plin", icon: "/menubar-svgs-desktop/promociones/plin.svg", groups: [] },
            { label: "Beneficioes en viajes", icon: "/menubar-svgs-desktop/promociones/beneficiones-en-viajes.svg", groups: [] }
        ]
    },
    {
        label: "Zona Digital",
        href: "#",
        categories: [
            {
                label: "Canales Digitales",
                icon: "/menubar-svgs-desktop/zona-digital/canales-digitales.svg",
                rightPanel: {
                    style: 'default',
                    title: "Disfruta de tu seguridad sin complicaciones",
                    buttonText: "CONOCE MÁS",
                    buttonHref: "#",
                    image: "/img-panel-derecho/zona-digital-default.png"
                },
                groups: [
                    {
                        label: "Canales Digitales",
                        items: [
                            { label: "Interbank APP: Haz tus operaciones desde el celular", href: "#" },
                            { label: "Banca por Internet", href: "#" },
                            { label: "Crédito por Convenio APP", href: "#" },
                            { label: "WhatsApp AVI", href: "#" },
                            { label: "Biometría para clientes extranjeros", href: "#" },
                            { label: "Cambio de moneda", href: "#" }
                        ]
                    },
                    {
                        label: "Inversiones",
                        items: [
                            { label: "Erni: Invierte en Fondos Mutuos de forma digital", href: "#" },
                        ]
                    },
                    {
                        label: "Ayuda",
                        items: []
                    }
                ],
                image: "/img-panel-derecho/zona-digital-default.png"
            },
            {
                label: "Funcionalidades Digitales",
                icon: "/menubar-svgs-desktop/zona-digital/funcionalidades-digitales.svg",
                rightPanel: {
                    style: 'default',
                    title: "¡Descubre lo que tenemos para ti!",
                    buttonText: "CONOCE MÁS",
                    buttonHref: "#",
                    image: "/img-panel-derecho/zona-digital-default.png"
                },
                groups: [
                    {
                        label: "Funcionalidades Digitales",
                        items: [
                            { label: "Mis finanzas", href: "#" },
                            { label: "Plin", href: "#" },
                            { label: "Nueva Cuponera Visa Premia", href: "#" },
                            { label: "Alcancía Virtual", href: "#" }
                        ]
                    },
                    { label: "Ayuda", items: [] }
                ],
                image: "/img-panel-derecho/zona-digital-default.png"
            },
            {
                label: "Operaciones Frecuentes",
                icon: "/menubar-svgs-desktop/zona-digital/operaciones-frecuentes.svg",
                rightPanel: {
                    style: 'default',
                    title: "Disfruta de tu seguridad sin complicaciones",
                    buttonText: "CONOCE MÁS",
                    buttonHref: "#",
                    image: "/img-panel-derecho/zona-digital-default.png"
                },
                groups: [
                    {
                        label: "Operaciones Frecuentes",
                        items: [
                            { label: "Pago de servicios", href: "#" },
                            { label: "Pago de tarjeta de crédito", href: "#" }
                        ]
                    },
                    { label: "Ayuda", items: [] }
                ],
                image: "/img-panel-derecho/zona-digital-default.png"
            },
            {
                label: "Plin",
                icon: "/menubar-svgs-desktop/zona-digital/plin.svg",
                rightPanel: {
                    style: 'default',
                    title: "Descubre las nuevas promos de Plin",
                    buttonText: "Conoce más",
                    buttonHref: "#",
                    image: "/img-panel-derecho/zona-digital-plin.png"
                },
                groups: [
                    {
                        label: "Plin",
                        items: [
                            { label: "¿Qué es Plin?", href: "#" },
                            { label: "Plinea en los POS", href: "#" },
                            { label: "Plin Metropolitano y Corredores", href: "#" },
                            { label: "Plin eCommerce", href: "#" }
                        ]
                    },
                    {
                        label: "Promociones Plin",
                        items: [
                            { label: "Promos Plin", href: "#" }
                        ]
                    },
                    {
                        label: "Centro de Ayuda Plin",
                        items: [
                            { label: "Centro de Ayuda Plin", href: "#" }
                        ]
                    },
                    { label: "Ayuda", items: [] }
                ],
                image: "/img-panel-derecho/zona-digital-plin.png"
            },
            {
                label: "Tu Tienda Online Shopstar",
                icon: "/menubar-svgs-desktop/zona-digital/tu-tienda-online-shopstar.png",
                groups: []
            },
            {
                label: "Puntaje Crediticio",
                icon: "/menubar-svgs-desktop/zona-digital/puntaje-crediticio.svg",
                groups: []
            },
            {
                label: "Aprendemás",
                icon: "/menubar-svgs-desktop/zona-digital/aprendemas.svg",
                rightPanel: {
                    style: 'empty'
                },
                groups: [
                    {
                        label: "Pon a prueba tus conocimientos y gana",
                        items: [
                            { label: "Aprendemás", href: "#" }
                        ]
                    },
                    { label: "Ayuda", items: [] }
                ]
            }
        ]
    },
    {
        label: "Ayuda y Contacto",
        href: "#",
        categories: [
            { label: "Centro de ayuda", icon: "/menubar-svgs-desktop/ayuda-y-contacto/centro-de-ayuda.svg", groups: [] },
            { label: "Puntos de atención", icon: "/menubar-svgs-desktop/ayuda-y-contacto/puntos-de-atencion.svg", groups: [] },
            { label: "Actualiza tus datos", icon: "/menubar-svgs-desktop/ayuda-y-contacto/actualiza-tus-datos.svg", groups: [] },
            { label: "Libro de Reclamaciones", icon: "/menubar-svgs-desktop/ayuda-y-contacto/libro-de-reclamaciones.svg", groups: [] },
            { label: "Consultar tu Pedido o Reclamo", icon: "/menubar-svgs-desktop/ayuda-y-contacto/consultar-tu-pedido-o-reclamo.svg", groups: [] },
            { label: "WhatsApp", icon: "/menubar-svgs-desktop/ayuda-y-contacto/whatsapp.png", groups: [] },
            { label: "Comprobante de pago electrónico", icon: "/menubar-svgs-desktop/ayuda-y-contacto/comprobante-de-pago-electronico.png", groups: [] }
        ]
    }
]