import Image from "next/image";
import Advantages from "./components/Advantages";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Prices from "./components/Prices";
import Testimonials from "./components/Testimonials";
import Video from "./components/Video";
import WhyUs from "./components/WhyUs";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <Intro />
      <WhyUs />
      <Video />
      <section
        className="mt-[-100px] bg-[#000] lg:mt-[-300px] pt-[200px]"

      >
        <Prices />
        <Advantages />
      </section>
      <Banner />
      <Testimonials />
      <Footer />
    </>
  );
}
