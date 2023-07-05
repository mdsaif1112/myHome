"use client"

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'

const ActiveLink = ({ children, href, className }) => {

    const pathname = usePathname()

    return (
        <Link href={href} className={`${className} ${pathname === href ? 'active-link' : ''}`}>
            {children}
        </Link>
    );
};

export default ActiveLink;