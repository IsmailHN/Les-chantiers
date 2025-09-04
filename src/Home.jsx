import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="hero">
        <h1 className="title">Welcome to My Cool Website</h1>
        <p className="subtitle">Smooth animations, modern design, and responsive UI.</p>
        <button className="explore-btn">Explore Now</button>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
