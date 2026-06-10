"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Image src="/images/ic-1.png" width={26} height={26} alt="ايقونه" />,
    title: "توصيل سريع ومرن",
  },
  {
    icon: <Image src="/images/ic-2.png" width={26} height={26} alt="ايقونه" />,
    title: "تتبع مباشر للطلبات",
  },
  {
    icon: <Image src="/images/ic-3.png" width={26} height={26} alt="ايقونه" />,
    title: "أسعار تناسب احتياجك  ",
  },
  {
    icon: <Image src="/images/ic-4.png" width={26} height={26} alt="ايقونه" />,
    title: "دعم سريع للتجار",
  },
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
    y: 45,
    scale: 0.96,
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

const imageAnim = {
  hidden: {
    opacity: 0,
    x: -70,
    scale: 0.92,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.05,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Advantages() {
  return (
    <section
      className="relative block w-full pb-[200px] pt-[100px] lg:pt-0 overflow-hidden"
      dir="rtl"
      id="whyChoose"
    >
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.12, 0.24, 0.12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[80px] right-[-140px] w-[360px] h-[360px] bg-[#FFB000]/30 blur-[120px] rounded-full"
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-7 order-1"
          >
            <motion.div variants={fadeUp} className="text-center lg:text-start mb-8">
              <span className="inline-flex rounded-full bg-[#FFBF44]/10 px-8 py-3 text-center text-[#F5B93B] text-custom14 font-[700]">
                مميزات
              </span>

              <h2 className="text-white text-custom18 lg:text-custom32 font-[700] mt-6">
                ليش تختار هولرز؟
              </h2>
            </motion.div>

            <motion.div
              variants={parent}
              className="grid grid-cols-2 sm:grid-cols-2 gap-5 max-w-[560px] mx-auto lg:mx-0"
            >
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    },
                  }}
                  className="group relative min-h-[86px] rounded-[18px] border border-white/10 bg-white/[0.04] flex items-center justify-start lg:justify-center gap-4 px-6 overflow-hidden transition-all duration-500 hover:border-[#FFB000]/40 hover:shadow-[0_22px_55px_rgba(255,176,0,0.10)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-l from-[#FFB000]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <motion.span
                    whileHover={{
                      rotate: [0, -6, 6, 0],
                      scale: 1.12,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 text-[#FFB000] text-[26px]"
                  >
                    {item.icon}
                  </motion.span>

                  <span className="relative z-10 text-white font-bold text-custom14 lg:text-custom18">
                    {item.title}
                  </span>
                </motion.div>
              ))}

              <motion.div
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  },
                }}
                className="group relative sm:col-span-2 col-span-2 min-h-[86px] rounded-[18px] border border-white/10 bg-white/[0.04] flex items-center justify-start lg:justify-center gap-4 px-6 overflow-hidden transition-all duration-500 hover:border-[#FFB000]/40 hover:shadow-[0_22px_55px_rgba(255,176,0,0.10)]"
              >
                <div className="absolute inset-0 bg-gradient-to-l from-[#FFB000]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <motion.span
                  whileHover={{
                    rotate: [0, -6, 6, 0],
                    scale: 1.12,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <Image
                    src="/images/ic-5.png"
                    width={26}
                    height={26}
                    alt="ايقونه"
                  />
                </motion.span>

                <span className="relative z-10 text-white font-bold text-custom14">
                  حلول للشركات والمتاجر الإلكترونية
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-5 order-2"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.03, rotate: -1 }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 18,
                }}
              >
                <Image
                  src="/images/mob-app.png"
                  width={950}
                  height={650}
                  alt="Haulerz App"
                  quality={100}
                  className="w-full mx-auto drop-shadow-[0_35px_70px_rgba(0,0,0,0.35)]"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}