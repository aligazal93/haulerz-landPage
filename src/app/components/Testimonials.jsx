"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const reviews = [
  {
    company: "متجر ريحان للعطور",
    job: "قطاع العطور والتجميل",
    text: "هولرز ساعدتنا نرفع سرعة التوصيل داخل الرياض ونقلل تكلفة الشحن بشكل واضح.",
  },
  {
    company: "نخبة الإلكترونيات",
    job: "متجر إلكترونيات",
    text: "التتبع والمتابعة مع العملاء صار أسهل، وتجربة الشحن أصبحت أكثر احترافية.",
  },
  {
    company: "دار الأناقة",
    job: "متجر أزياء",
    text: "مع كثرة الطلبات اليومية، احتجنا شريك شحن منظم وسريع، وهولرز كانت خيار ممتاز.",
  },
  {
    company: "تمور القصيم",
    job: "منتجات غذائية",
    text: "الخدمة مستقرة والأسعار مناسبة، والأهم أن الطلبات توصل في الوقت المتوقع.",
  },
  {
    company: "بيوتي لاين",
    job: "منتجات تجميل",
    text: "فرق كبير في تنظيم الشحنات والمتابعة، خصوصًا للطلبات المتكررة داخل وخارج الرياض.",
  },
  {
    company: "مخازن الرياض",
    job: "تجارة وتوزيع",
    text: "حل عملي للشركات والمتاجر التي تحتاج شحن سريع وتكلفة واضحة بدون تعقيد.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden bg-[#F8FAFC] pb-[200px] lg:pb-[100px] py-20 lg:py-28"
      dir="rtl"
      id="testimonials"
    >
      <div className="absolute top-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-[#FFB000]/20 blur-[80px]" />
      <div className="absolute bottom-[-140px] left-[-120px] h-[320px] w-[320px] rounded-full bg-secondary/10 blur-[90px]" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <span className="mx-auto block w-fit rounded-full border border-[#E7EAF0] bg-white px-5 py-2 text-custom12 text-[#5D6F8F] shadow-sm">
              الآراء
          </span>

          <h2 className="mt-5 text-custom24 font-[800] text-[#121212] lg:text-custom34">
           آراء عملائنا
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 1.8,
              slideShadows: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="testimonials-swiper mx-auto max-w-[1120px] pb-14"
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0.92,
                      opacity: isActive ? 1 : 0.72,
                      y: isActive ? -8 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 22,
                    }}
                    className={`relative min-h-[280px] overflow-hidden rounded-[28px] border px-7 py-8 text-center transition-all duration-500 ${
                      isActive
                        ? "border-[#FFB000]/40 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.10)]"
                        : "border-[#E7EAF0] bg-white/80"
                    }`}
                  >
                    <FaQuoteLeft className="absolute left-6 top-6 text-[64px] text-[#FFB000]/10" />

                    <div className="relative z-10 mx-auto mb-5 flex h-[64px] w-[64px] items-center justify-center rounded-2xl bg-[#FFB000]/10 text-custom24 font-[800] text-[#FF9C00]">
                      {item.company.charAt(0)} 
                    </div>

                    <div className="relative z-10 mb-5 flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={18} className="text-[#FF9C00]" />
                      ))}
                    </div>

                    <p className="relative z-10 mx-auto text-custom14 leading-8 text-[#666]">
                      "{item.text}"
                    </p>

                    <div className="relative z-10 mt-6 border-t border-[#EEF1F5] pt-5">
                      <h3 className="text-custom16 font-[800] text-[#121212]">
                        {item.company}
                      </h3>

                      <span className="mt-2 block text-custom12 text-[#8A8A8A]">
                        {item.job}
                      </span>
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}