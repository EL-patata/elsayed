import React from "react";
import HeroSection from "./Hero";
import Navbar from "../components/Navbar";
import Message from "./Message";
import GoalsGrid from "./Goals";
import SendMessage from "./SendMessage";
import Footer from "../components/Footer";
import CardGrid from "./CardGrid";

const Landing = () => {
  return (
    <div>
        <Navbar />
      <HeroSection />
      <Message />
      <CardGrid   />
      <GoalsGrid />
      <SendMessage />
      <div className="h-[100px]"></div>
      <Footer />
    </div>
  );
};

export default Landing;
