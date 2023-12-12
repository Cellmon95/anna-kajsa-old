import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/home/Home.tsx";
import Consult from "./pages/consult/Consult.tsx";
import Philanthropy from "./pages/Philanthropy/Philanthropy.tsx";
import CreativeShowcase from "./pages/creative-showcase/CreativeShowcase.tsx";
import Contact from "./pages/contact/Contact.tsx";
import PageNotFound from "./pages/pageNotFound/PageNotFound.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consult" element={<Consult />} />
      <Route path="/philanthropy" element={<Philanthropy />} />
      <Route path="/creative-showcase" element={<CreativeShowcase />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
