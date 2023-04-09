import { BiHomeAlt2, BiUser, BiBriefcaseAlt, BiCog, BiGridAlt } from 'react-icons/bi';

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
        icon: <BiGridAlt />,
    },
];
