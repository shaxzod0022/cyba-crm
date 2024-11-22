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

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto navbar-box-shadow">
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
  );
};

export default App;
