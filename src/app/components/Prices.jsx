"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const prices = [
  { weight: "من 1 إلى 15 كيلو", price: "20" },
  { weight: "من 20 إلى 25 كيلو", price: "35" },
  { weight: "من 25 إلى 30 كيلو", price: "50" },
  { weight: "من 30 إلى 35 كيلو", price: "65" },
];

const parent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.94,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Prices() {
  return (
    <section
      className="relative block bg-center bg-no-repeat mt-[10px] lg:mt-[100px] overflow-hidden"
      dir="rtl"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-140px] top-[80px] w-[320px] h-[320px] rounded-full bg-[#FFB000]/30 blur-[110px]"
      />

      <div
        className="container relative z-10 mx-auto px-4 py-0 lg:py-[100px]"
        id="prices"
      >
        <motion.h2
          initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center text-white text-custom24 lg:text-custom32 font-extrabold mb-8 lg:mb-12"
        >
          التسعيرات
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
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                },
              }}
              className="group relative min-h-[230px] rounded-[26px] border border-white/10 bg-white/[0.04] px-6 py-7 text-center flex flex-col items-center justify-center overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 hover:border-[#FFB000]/40 hover:shadow-[0_24px_70px_rgba(255,176,0,0.10)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFB000]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className="relative z-10"
              >
                <motion.img
                  src="/images/box.png"
                  alt="box"
                  className="w-[90px] h-[90px] object-contain"
                  whileHover={{
                    y: -6,
                    rotate: [0, -5, 5, 0],
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              <h3 className="relative z-10 text-white text-custom16 font-[700] my-2">
                {item.weight}
              </h3>

              <div className="relative z-10 flex items-center justify-center gap-1 text-[#FFB000]">
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
          initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.75,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 text-center text-white text-custom14 leading-6"
        >
          الأسعار المذكورة خاصة بمدينة الرياض، للحصول على أسعار الشحن لباقي
          المدن يرجى التواصل معنا أو تحميل التطبيق.
        </motion.p>
      </div>
    </section>
  );
}