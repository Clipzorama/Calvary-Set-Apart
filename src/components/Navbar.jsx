// NavBar.jsx
import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import CLogo from "@/assets/logo.webp";

const services = [
  { label: "Worship Times", to: "/explore#worship" },
  { label: "Community Events", to: "/explore#events" },
  { label: "Youth Programs", to: "/explore#youth" },
  { label: "Prayer Requests", to: "/explore#prayer" },
];

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);
    const [deskMenu, setDeskMenu] = useState(false);
    const dropdownRef = useRef(null);

    const baseLink = "px-3 py-2 rounded-md text-sm transition-colors hover:opacity-80";
    const active = "font-semibold underline underline-offset-4";

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDeskMenu(false);
        }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="fixed inset-x-0 top-0 bg-background/20 backdrop-blur-md z-[100] font-poppins border-b">
            <div className="container flex items-center justify-between py-6">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={CLogo} alt="Church Logo" className="w-8 h-10" />
                    <span className="sr-only">Home</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <NavLink to="/" className={({ isActive }) => `${baseLink} ${isActive ? active : ""}`}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => `${baseLink} ${isActive ? active : ""}`}>
                        About
                    </NavLink>
                    <NavLink to="/get-involved" className={({ isActive }) => `${baseLink} ${isActive ? active : ""}`}>
                        Get Involved
                    </NavLink>
                    <NavLink to="/explore" className={({ isActive }) => `${baseLink} ${isActive ? active : ""}`}>
                        Explore
                    </NavLink>

                    {/* Services Nav */}
                    <div ref={dropdownRef} className="relative inline-block">
                        <button
                            className={`${baseLink} inline-flex items-center gap-1 cursor-pointer`} onClick={() => setDeskMenu((prev) => !prev)}>
                            Services <ChevronDown size={16} />
                        </button>
                        {/* DropDown */}
                        {deskMenu && (
                            <div className="opacity-100 transition
                                        absolute left-0 mt-2 w-56 rounded-xl border bg-background/95 backdrop-blur p-2 shadow-lg">
                                {services.map((s) => (
                                    <Link key={s.to} to={s.to} onClick={() => setDeskMenu((prev) => !prev)} className="block rounded-lg px-3 py-2 text-sm hover:bg-foreground/5">
                                        {s.label}
                                    </Link>
                                ))}
                        </div>
                        )}
                    </div>
                </div>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <Link to="/#contact" className="px-4 py-2 bg-button text-white border-none rounded-md text-sm hover:bg-buttonh transition-colors duration-300">
                        Join
                    </Link>
                </div>

                {/* Mobile menu button toggled on mobile */}
                <button className="md:hidden p-2 rounded-lg hover:bg-foreground/5" aria-label="Toggle menu" onClick={() => setMenuOpen((v) => !v)}>
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile menu (slide-down) */}
            {menuOpen && (
                <div className="md:hidden border-t bg-background/95 backdrop-blur">
                    <div className="container py-6 flex flex-col">
                        <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => `px-2 py-2 rounded-md ${isActive ? active : ""}`}>
                            Home
                        </NavLink>
                        <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => `px-2 py-2 rounded-md ${isActive ? active : ""}`}>
                            About
                        </NavLink>
                        <NavLink to="/get-involved" onClick={() => setMenuOpen(false)} className={({ isActive }) => `px-2 py-2 rounded-md ${isActive ? active : ""}`}>
                            Get Involved
                        </NavLink>
                        <NavLink to="/explore" onClick={() => setMenuOpen(false)} className={({ isActive }) => `px-2 py-2 rounded-md ${isActive ? active : ""}`}>
                            Explore
                        </NavLink>
                        

                        {/* Collapsible services on mobile */}
                        <button className="mt-1 px-2 py-2 rounded-md inline-flex items-center justify-between" onClick={() => setServiceOpen((v) => !v)}>
                            <span>Our Services</span>
                            <ChevronDown className={`transition-transform ${serviceOpen ? "rotate-180" : ""}`} size={18}/>
                        </button>
                        {serviceOpen && (
                        <div className="ml-2 mt-1">
                            {services.map((s) => (
                                <Link key={s.to} to={s.to} onClick={() => {
                                    setMenuOpen(false);
                                    setServiceOpen(false);
                                    }}
                                    className="block px-3 py-2 text-sm rounded-md hover:bg-foreground/5">
                                    {s.label}
                                </Link>
                            ))}
                        </div>
                        )}

                        <Link to="/#contact" onClick={() => setMenuOpen(false)} className="mt-3 w-full text-center text-white bg-button px-4 py-2 border-none rounded-md text-sm hover:bg-foreground/5">
                            Join
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}                               
