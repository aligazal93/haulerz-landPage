import Image from "next/image";
import Intro from "../components/Intro";
import WhyUs from "../components/WhyUs";
import Video from "../components/Video";
import Prices from "../components/Prices";
import Advantages from "../components/Advantages";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { redirect } from "next/navigation";

export default async function Home({ params }) {
  const { locale } = await params;
  const isArabic = locale === "ar";
  return (
    <>
      <Intro isArabic={isArabic} />
      <WhyUs isArabic={isArabic} />
      <Video isArabic={isArabic} />
      <section
        className="mt-[-100px] bg-[#000] lg:mt-[-300px] pt-[200px]"

      >
        <Prices isArabic={isArabic} />
        <Advantages isArabic={isArabic} />
      </section>
      <Banner isArabic={isArabic} />
      <Testimonials isArabic={isArabic} />
      <Footer isArabic={isArabic} />
    </>
  );
}
