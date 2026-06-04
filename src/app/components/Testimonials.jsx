"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "محمد العتيبي",
    job: "صاحب متجر إلكتروني - الرياض",
    text: "تعامل احترافي وسرعة بالتوصيل، فرق كبير جدًا في تجربة العملاء بعد استخدام هولرز.",
  },
  {
    name: "سارة القحطاني",
    job: "مالكة متجر عطور",
    text: "أفضل شركة شحن تعاملنا معها، الأسعار ممتازة والمتابعة لحظية وسهلة جدًا.",
  },
  {
    name: "عبدالله الحربي",
    job: "تاجر إلكتروني",
    text: "التوصيل صار أسرع بكثير وخدمة العملاء متجاوبة بشكل ممتاز طوال الوقت.",
  },
  {
    name: "نورة الشمري",
    job: "صاحبة متجر ملابس",
    text: "هولرز سهلت علينا إدارة الطلبات والشحن بشكل كبير، خصوصًا مع كثرة الطلبات اليومية.",
  },
  {
    name: "خالد المطيري",
    job: "مدير متجر إلكتروني",
    text: "أسعار منافسة وخدمة موثوقة جدًا، التتبع المباشر وفر علينا مشاكل كثيرة مع العملاء.",
  },
  {
    name: "ريم العنزي",
    job: "متجر منتجات تجميل",
    text: "تجربة ممتازة من أول طلب، سرعة بالشحن وتنظيم واضح وخدمة احترافية.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


// 7583

// 5 38.340 * 3 
// 10 76680 
// 2.5 19.250 


export default function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28  block " dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <span className="block mx-auto rounded-full bg-[#F1F4F8] px-5 py-2 w-[120px] text-center text-[#5D6F8F] text-custom12">
            الآراء
          </span>

          <h2 className="text-[#121212] text-custom24 lg:text-custom30 font-[700] mt-5">
            آراء عملائنا
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: true,
              },
            }}
            className="testimonials-swiper max-w-[1100px] mx-auto pb-12"
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 22,
                  }}
                  className="relative min-h-[170px] rounded-[22px] border border-[#E7EAF0] bg-white px-6 py-8 text-center flex flex-col items-center justify-center"
                >
                  <div className="relative z-10 flex justify-center gap-1 text-[#FFB000] text-custom14 mb-4">
                    {[...Array(5)].map((_, index) => (
                      <FaStar size={20} className="text-[#FF9C00]" key={index} />
                    ))}
                  </div>

                  <p className="relative z-10 text-[#777] text-custom14 leading-7  mx-auto">
                    "{item.text}"
                  </p>

                  <h3 className="relative z-10 text-[#121212] text-custom14 font-[700] mt-4">
                    {item.name}
                  </h3>

                  <span className="relative z-10 text-[#9A9A9A] text-custom12 mt-2">
                    {item.job}
                  </span>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
