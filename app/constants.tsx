import { RiHeart2Fill } from 'react-icons/ri';
import { SideNavItem } from './types';
export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: 'Home',
        icon: <RiHeart2Fill/>,
        path: '/',
        submenu:false
    },
    {
        title: 'About',
        icon: <RiHeart2Fill/>,
        path: '/about',
        submenu:false
    },
    {
        title: 'Projects',
        icon: <RiHeart2Fill/>,
        path: '/projects',
        submenu:false
    },
    {
        title: 'Contact',
        icon: <RiHeart2Fill/>,
        path: '/contact',
        submenu:false
    },
];