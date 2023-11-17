import { Hero } from "../components/sections/hero";
import { About } from "../components/sections/about";
import { Testimonial } from "../components/sections/testimonial";
import { Contact } from "../components/sections/contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
