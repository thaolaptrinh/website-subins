import React from "react";
import Hero from "../Sections/Hero";
import Status from "../Sections/Status";
import About from "../Sections/About";
import Freelike from "../Sections/Freelike";
import Marketing from "../Sections/Marketing";
import Slider from "../Sections/Slider";
import Affiliate from "../Sections/Affiliate";
import Reviews from "../Sections/Reviews";

function Home() {
  return (
    <div>
      <Hero />
      <Status />
      <About />
      <Freelike />
      <Marketing />
      <Slider />
      <Affiliate />
      <Reviews />
    </div>
  );
}

export default Home;
