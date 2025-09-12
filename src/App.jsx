import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/popup/toaster";

// Hash-Based Navigation
import { ScrollToHashElement } from "@/lib/ScrollToHashElement"

import * as React from "react";

const Home = React.lazy(() => import('@/pages/Home'));
const About = React.lazy(() => import('@/pages/About'));
const GetInvolved = React.lazy(() => import('@/pages/GetInvolved'));
const Explore = React.lazy(() => import('@/pages/Explore'));
const NotFound = React.lazy(() => import('@/pages/Notfound'));

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <NavBar />
        <ScrollToHashElement />
        <React.Suspense fallback={null}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
        <Toaster />
      </div>
      <Footer />

    </BrowserRouter>
  );
}
