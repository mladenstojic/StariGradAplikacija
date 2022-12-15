import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Scroll from "./components/Scroll.js";
import Pocetna from "./components/pocetna/Pocetna.js";
import Navigation from "./components/navigation/Navigation.js";
import Oprojektu from "./components/oprojektu/Oprojektu.js";
import Footer from "./components/footer/Footer.js";
import Galerija from "./components/galerija/Galerija.js";
import NotFound from "./components/NotFound";
import Otvrdjavi from "./components/istorijat/Otvrdjavi";
import Porodicavojinovic from "./components/istorijat/Porodicavojinovic";
import Nikolaaltomanovic from "./components/istorijat/Nikolaaltomanovic";

function App() {
  const [jezik, setJezik] = useState("RS");

  const odaberi = (drzava) => {
    setJezik(drzava);
  };

  return (
    <Router>
      <Navigation odaberi={odaberi} jezik={jezik} />
      <Scroll />
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/history/citadel" element={<Otvrdjavi />} />
        <Route
          path="/history/vojinovic-family"
          element={<Porodicavojinovic nemaSlika />}
        />
        <Route
          path="/history/nikola-altomanovic"
          element={<Nikolaaltomanovic nemaSlika />}
        />
        <Route path="/project" element={<Oprojektu />} />
        <Route path="/gallery" element={<Galerija />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
