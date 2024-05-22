import Link from "next/link";
import Image from 'next/image';

import MainHeaderBackground from "./main-header-background";
import NavLink from './nav-link';

import Logo from '@/public/images/logo.png';
import Classes from './main-header.module.css';

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={Classes.header}>
                <div className={Classes.logo}>
                    <Link href="/">
                        <Image src={Logo.src} alt="logo" priority width="50" height="50" />
                    </Link>
                </div>
                <nav className={Classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}