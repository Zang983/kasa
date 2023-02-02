import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/index.jsx";
import Error from "./pages/error.jsx";
import Lodging from "./pages/lodging.jsx";
import About from "./pages/about.jsx";

export default function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Index />} />
            <Route path="/lodging/:id" element={<Lodging />} />
            <Route path="/about" element={<About />} />
         </Routes>
      </BrowserRouter>
   );
}