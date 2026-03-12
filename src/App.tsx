/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Leher } from "./pages/projects/Leher";
import { Nivara } from "./pages/projects/Nivara";
import { Bulgari } from "./pages/projects/Bulgari";
import { Jhapki } from "./pages/projects/Jhapki";
import { Animation3D } from "./pages/projects/Animation3D";
import { Contact } from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/leher" element={<Leher />} />
            <Route path="/projects/nivara" element={<Nivara />} />
            <Route path="/projects/bulgari" element={<Bulgari />} />
            <Route path="/projects/jhapki" element={<Jhapki />} />
            <Route path="/projects/animation-3d" element={<Animation3D />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
