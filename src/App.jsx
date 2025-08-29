import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import { About } from "@/pages/About";
import { GetInvolved } from "@/pages/GetInvolved";
import { Explore } from "@/pages/Explore";
import { NotFound } from "@/pages/NotFound";
import { NavBar } from "@/components/Navbar"


export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}
