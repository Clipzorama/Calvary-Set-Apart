import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import { About } from "@/pages/About";
import { GetInvolved } from "@/pages/GetInvolved";
import { Explore } from "@/pages/Explore";
import { NotFound } from "@/pages/NotFound";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/popup/toaster";
import Particles  from "@/Effects/Particles";




export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Particles
          particleColors={['#717798', '#717798']}
          particleCount={700}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={35}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}
