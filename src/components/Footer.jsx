import { Mail, MapPin } from "lucide-react";
import logoPng from "@/assets/logo.webp";
import { Link } from "react-router-dom";


export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-6 border-t bg-background/90 brightness-80 relative z-60">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-3 relative md:bottom-3">
            <img
              src={logoPng}
              alt="Nature Cures Naturally — logo"
              className="h-10 w-auto drop-shadow-sm"
            />
            <p className="text-sm text-muted-foreground font-poppins">
              &copy; {year} Calvary Set Apart Deliverance Ministry, All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground font-poppins">
              Made from Clipzorama.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-2 text-sm">
            <Link to="/" className="text-buttonh hover:text-button/80 transition-colors duration-300 font-semibold font-poppins">Home</Link>
            <Link to="/about" className="text-buttonh hover:text-button/80 transition-colors duration-300 font-semibold font-poppins">About</Link>
            <Link to="/get-involved" className="text-buttonh hover:text-button/80 transition-colors duration-300 font-semibold font-poppins">Get Involved</Link>
            <Link to="/explore" className="text-buttonh hover:text-button/80 transition-colors duration-300 font-semibold font-poppins">Explore</Link>
          </nav>

          <div className="space-y-4 text-sm flex flex-col">
            <a href="mailto:hello@naturecuresnaturally.com" className="inline-flex items-center gap-2 hover:text-primary transition-colors font-poppins">
              <Mail size={16} /> TrueVineDm@gmail.com
            </a>
            <p className="inline-flex items-center font-poppins gap-2 text-muted-foreground">
              <MapPin size={16} /> Prospect, CT 06712
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};