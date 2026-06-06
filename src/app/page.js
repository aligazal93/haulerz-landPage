import Advantages from "./components/Advantages";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Prices from "./components/Prices";
import Testimonials from "./components/Testimonials";
import Video from "./components/Video";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <>
      <Intro />
      <WhyUs />
      <Video />

      <section
        className="mt-[-400px] pt-[400px]"
        style={{
          backgroundImage: "url('/images/layer-2.png')",
        }}
      > 

      <Prices />
      <Advantages />
      </section>
      <Testimonials />
      <Footer />
    </>
  );
}
