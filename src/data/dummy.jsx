import { BiHomeAlt2, BiUser, BiBriefcaseAlt, BiCog, BiGridAlt, BiLogIn } from 'react-icons/bi'

export const links = [
    {
        to: '/',
        text: 'Inicio',
        icon: <BiHomeAlt2 />,
    },
    {
        to: '/quienes-somos',
        text: 'Quiénes Somos',
        icon: <BiUser />,
    },
    {
        to: '/servicios',
        text: 'Servicios',
        icon: <BiCog />,
    },
    {
        to: '/trabaja-con-nosotros',
        text: 'Trabaja con Nosotros',
        icon: <BiBriefcaseAlt />,
    },
    {
        to: '/blog',
        text: 'Blog',
        icon: <BiGridAlt />
    },

    {
        to: '/login',
        text: 'login',
        icon: <BiLogIn />,
    },
]

export const services = [
    {
        id: 1,
        to: "salud-mental",
        imageName: "service-1.jpg",
        title: "Salud Mental"
    },
    {
        id: 2,
        to: "salud-fisica",
        imageName: "service-2.jpg",
        title: "Salud Física"
    },
    {
        id: 3,
        to: "salud-nutricional",
        imageName: "service-3.jpg",
        title: "Salud Nutricional"
    },
]
