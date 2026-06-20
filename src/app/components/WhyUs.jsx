"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(8px)",
  },
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

export default function WhyUs({ isArabic }) {
  const cards = [
    {
      image: "/images/s-1.png",
      title: isArabic ? "السعر" : "Price",
      desc: isArabic
        ? "أقل تكلفة شحن فعلية على متجرك"
        : "The lowest actual shipping cost for your store",
    },
    {
      image: "/images/w-2.png",
      title: isArabic ? "السرعة" : "Speed",
      desc: isArabic ? (
        <>
          توصيل داخل الرياض خلال 6 ساعات
          <br />
          إلى خارج الرياض خلال 3–5 أيام
        </>
      ) : (
        <>
          Delivery within Riyadh in 6 hours
          <br />
          Outside Riyadh within 3–5 days
        </>
      ),
    },
    {
      image: "/images/w-3.png",
      title: isArabic ? "الراحة" : "Convenience",
      desc: isArabic ? (
        <>
          نستلم ونوصل
          <br />
          بدون تعقيد... بكل سلاسة
        </>
      ) : (
        <>
          We pick up and deliver
          <br />
          smoothly and without hassle
        </>
      ),
    },
  ];

  return (
    <section
      className="bg-white py-14 overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
      id="whyUs"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center text-[#121212] text-custom28 lg:text-custom32 font-extrabold mb-12"
        >
          {isArabic ? "ليش هولرز؟" : "Why Haulerz?"}
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-[1080px] mx-auto"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -8,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                },
              }}
              className="bg-white border border-[#E7EAF0] rounded-[24px] min-h-[220px] flex flex-col items-center justify-center text-center px-6 py-8 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={86}
                height={86}
                quality={100}
                className="object-contain mb-6"
              />

              <h3 className="text-secondary text-custom20 font-[700] mb-3">
                {card.title}
              </h3>

              <p className="text-[#494949] text-custom14 font-[700] leading-7">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}