/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Leher } from "./pages/projects/Leher";
import { Nivara } from "./pages/projects/Nivara";
import { Bulgari } from "./pages/projects/Bulgari";
import { Jhapki } from "./pages/projects/Jhapki";
import { Animation3D } from "./pages/projects/Animation3D";
import { Animation } from "./pages/work/Animation";
import { WorldBuilding } from "./pages/work/WorldBuilding";
import { Experimental } from "./pages/work/Experimental";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { Commissions } from "./pages/Commissions";
import { Resume } from "./pages/Resume";
import { Sketchbook } from "./pages/Sketchbook";

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
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/leher" element={<Leher />} />
            <Route path="/projects/nivara" element={<Nivara />} />
            <Route path="/projects/bulgari" element={<Bulgari />} />
            <Route path="/projects/jhapki" element={<Jhapki />} />
            <Route path="/projects/animation-3d" element={<Animation3D />} />
            <Route path="/work/animation" element={<Animation />} />
            <Route path="/work/world-building" element={<WorldBuilding />} />
            <Route path="/work/experimental" element={<Experimental />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/commissions" element={<Commissions />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/sketchbook" element={<Sketchbook />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
