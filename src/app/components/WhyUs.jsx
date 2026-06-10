"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

const item = {
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

const titleMotion = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cards = [
  {
    icon: "/images/s-1.png",
    alt: "السعر",
    title: "السعر",
    text: (
      <>
        أقل تكلفة شحن فعلية على متجرك
      </>
    ),
  },
  {
    icon: "/images/w-2.png",
    alt: "السرعة",
    title: "السرعة",
    text: (
      <>
        توصيل داخل الرياض خلال 6 ساعات
        <br />
        إلى خارج الرياض خلال 3–5 أيام
      </>
    ),
  },
  {
    icon: "/images/w-3.png",
    alt: "الراحة",
    title: "الراحة",
    text: (
      <>
        نستلم ونوصل
        <br />
        بدون تعقيد... بكل سلاسة
      </>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="relative bg-white py-14 overflow-hidden" dir="rtl" id="whyUs">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-120px] top-[80px] w-[300px] h-[300px] rounded-full bg-[#F5B93B]/30 blur-[100px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          variants={titleMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-[#121212] text-custom28 lg:text-custom32 font-extrabold mb-12"
        >
          ليش هولرز؟
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
                y: -10,
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 220,
                  damping: 16,
                },
              }}
              className="group relative bg-white border border-[#E7EAF0] rounded-[24px] min-h-[220px] flex flex-col items-center justify-center text-center px-6 py-8 overflow-hidden transition-all duration-500 hover:shadow-[0_24px_70px_rgba(0,0,0,0.10)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#F5B93B]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <motion.div
                whileHover={{
                  rotate: [0, -4, 4, 0],
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Image
                  src={card.icon}
                  alt={card.alt}
                  width={86}
                  height={86}
                  quality={100}
                  className="object-contain mb-6"
                />
              </motion.div>

              <h3 className="relative z-10 text-secondary text-custom20 font-[700] mb-3">
                {card.title}
              </h3>

              <p className="relative z-10 text-[#494949] text-custom14 font-[700] leading-7">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}