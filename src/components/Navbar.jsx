import { Menu, X } from "lucide-react"
import { useState } from "react";
import CLogo from "@/assets/logo.webp"


export const NavBar = () => {
    const [serviceMenu, setServiceMenu] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full pt-4 pb-4 pr-7 pl-7 transition-all duration-300 bg-background/20 z-100 backdrop-blur-md">
            <div className="container flex justify-between items-center">
                <img src={CLogo} alt="Church Logo" className="w-8 h-10" />

            </div>

        </nav>
    )
}

