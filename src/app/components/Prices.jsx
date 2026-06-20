"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const parent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
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

export default function Prices({ isArabic }) {
  const prices = [
    {
      weight: isArabic ? "حتى 15 كجم" : "Up to 15 kg",
      price: "20",
    },
    {
      weight: isArabic ? "من 16 إلى 20 كجم" : "16 kg to 20 kg",
      price: "35",
    },
    {
      weight: isArabic ? "من 21 إلى 25 كجم" : "21 kg to 25 kg",
      price: "50",
    },
    {
      weight: isArabic ? "من 26 إلى 30 كجم" : "26 kg to 30 kg",
      price: "65",
    },
  ];

  return (
    <section
      className="relative block bg-center bg-no-repeat mt-[10px] lg:mt-[100px]"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div
        className="container relative z-10 mx-auto px-4 py-0 lg:py-[100px]"
        id="prices"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center text-white text-custom24 lg:text-custom32 font-extrabold mb-8 lg:mb-12"
        >
          {isArabic ? "التسعيرات" : "Pricing"}
        </motion.h2>

        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1100px] mx-auto"
        >
          {prices.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.025 }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 22,
              }}
              className="relative min-h-[230px] rounded-[26px] border border-white/10 bg-white/[0.04] px-6 py-7 text-center flex flex-col items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-[#FFB000]/40 hover:shadow-[0_20px_60px_rgba(255,176,0,0.08)]"
            >
              <motion.img
                src="/images/box.png"
                alt="box"
                className="w-[90px] h-[90px] object-contain"
                whileHover={{ y: -5, rotate: [0, -4, 4, 0] }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
              />

              <h3 className="text-white text-custom20 font-[500] my-2">
                {item.weight}
              </h3>

              <div className="flex items-center justify-center gap-1 text-[#FFB000]">
                <span className="flex items-center mt-2 justify-center gap-2 text-[36px] font-[700] leading-none">
                  {item.price}
                  <Image
                    width={24}
                    height={24}
                    src="/images/sar.png"
                    alt="price"
                    className="w-[30px] h-[30px] object-contain"
                  />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 text-center text-white text-custom14 leading-6"
        >
          {isArabic
            ? "الأسعار المذكورة خاصة بمدينة الرياض، للحصول على أسعار الشحن لباقي المدن يرجى التواصل معنا أو تحميل التطبيق."
            : "The listed prices are for Riyadh city. To get shipping prices for other cities, please contact us or download the app."}
        </motion.p>
      </div>
    </section>
  );
}