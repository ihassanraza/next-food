'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import Classes from './main-header.module.css';

export default function NavLink({ href, children }) {
    const path = usePathname();

    return (
        <Link href={href} className={path === href ? Classes.active : ''}>{children}</Link>
    );
}