// src/pages/ContactPage.jsx
import React from "react";
import { Contact, StarsCanvas } from "../components";

const ContactPage = () => {
  return (
    //<main className="bg-[#ffefd5] min-h-screen pt-28">
    <main className="bg-[#ffefd5] min-h-screen pt-0 pb-20  ">
      <Contact />
      <StarsCanvas />
    </main>
  );
};

export default ContactPage;
