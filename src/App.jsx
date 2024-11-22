import React from "react";
import {
  Navbar,
  Head,
  About,
  Features,
  Convenient,
  Pricing,
  Services,
  Questions,
  Clients,
  ContactUs,
  Footer,
} from "./components";
import { BrowserRouter } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <div className="max-w-[1536px] mx-auto">
        <Navbar />
        <Head />
        <About />
        <Features />
        <Convenient />
        <Pricing />
        <Services />
        <Questions />
        <Clients />
        <ContactUs />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
