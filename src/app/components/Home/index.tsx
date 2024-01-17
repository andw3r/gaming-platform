"use client";

import Development from "./Development";
import Header from "./Header";
import Industry from "./Industry";
import Projects from "./Projects";
import Trending from "./Trending";

const HomePage = () => {
  return (
    <>
      <Header />
      <Trending />
      <Industry />
      <Development />
      <Projects />
    </>
  );
};

export default HomePage;
