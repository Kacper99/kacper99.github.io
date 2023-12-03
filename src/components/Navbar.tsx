"use client"
import React, {useState} from 'react';

interface NavItem {
    label: string;
    page: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "home"
    },
    {
        label: "About",
        page: "about"
    },
    {
        label: "Contact",
        page: "contact"
    }
];

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <header className="w-full mx-auto px-4">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div>
                        <h2 className="text-2xl font-bold">Kacper Martela</h2>
                    </div>
                </div>
                <div className="md:flex md:space-x-6">
                    {NAV_ITEMS.map((item, index) => {
                        return <a key={index}>{item.label}</a>
                    })}
                </div>
            </div>
        </header>
    )
}