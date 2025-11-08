import React from "react";
import Header from "../../components/Header/Header";
import Enjoy from "../../components/Enjoy/Enjoy";
import Footer from "../../components/Footer/Footer";
import Favorite from "../../components/Favorite/Favorite";
import About from "../../components/About/About";
import Mobile from "../../components/Mobile/Mobile";

const Home = () => {
  return (
    <div>
      <main className="container">
        <Enjoy />
        <Favorite />
        <About />
        <Mobile />
      </main>
    </div>
  );
};

export default Home;
