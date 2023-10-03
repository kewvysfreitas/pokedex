import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokedexPage from "./PokedexPage";
import PokemonDetailsPage from "./PokemonDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokedexPage />} />
        <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
