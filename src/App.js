import React from "react";
import Home from "./Screens/Home";
import Services from "./Screens/Services";
import Us from "./Screens/Us";
import Resources from "./Screens/Resources";
import Contact from "./Screens/Contact";
import NavBar from "./Components/NavBar";
import WhatsAppButton from "./Screens/WhatsAppButton";
import './App.module.css';
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <Us />
      <Resources />
      <Contact />
      <WhatsAppButton />
      <SpeedInsights />
    </div>
  );
}

export default App;
