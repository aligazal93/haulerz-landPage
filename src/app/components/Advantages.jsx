"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaStore } from "react-icons/fa";

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
    title: "أسعار تناسب حجم شغلك",
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
      staggerChildren: 0.14,
    },
  },
};

const fadeUp = {
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
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageAnim = {
  hidden: {
    opacity: 0,
    x: -70,
    scale: 0.92,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Advantages() {
  return (
    <section
      className="relative overflow-hidden bg-[#101010] py-14 lg:py-20"
      dir="rtl"
      id="whyChoose"
    >
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(rgba(255,255,255,0.28)_1px,transparent_1px)] bg-[size:18px_18px]" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#FFB000]/20 blur-[130px] rounded-full" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-8 order-1"
          >
            <motion.div
              variants={fadeUp}
              className="text-center lg:text-start mb-8"
            >
              <span className="inline-flex rounded-full bg-[#FFBF44]/10 px-8 py-3 text-center text-[#F5B93B] text-custom12">
                مميزات
              </span>

              <h2 className="text-white text-3xl lg:text-custom28 font-[700] mt-6">
                ليش تختار هولرز؟
              </h2>
            </motion.div>

            <motion.div
              variants={parent}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[560px] mx-auto lg:mx-0"
            >
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 22,
                  }}
                  className="min-h-[86px] rounded-[18px] border border-white/10 bg-white/[0.04] flex items-center justify-center gap-4 px-6 hover:border-[#FFB000]/40 hover:shadow-[0_20px_50px_rgba(255,176,0,0.08)]"
                >
                  <span className="text-[#FFB000] text-[26px]">
                    {item.icon}
                  </span>

                  <span className="text-white font-bold text-custom14">
                    {item.title}
                  </span>
                </motion.div>
              ))}

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 22,
                }}
                className="sm:col-span-2 min-h-[86px] rounded-[18px] border border-white/10 bg-white/[0.04] flex items-center justify-center gap-4 px-6 hover:border-[#FFB000]/40 hover:shadow-[0_20px_50px_rgba(255,176,0,0.08)]"
              >
                <FaStore className="text-[#FFB000] text-[30px]" />

                <span className="text-white font-bold text-custom15">
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
            className="lg:col-span-4 order-2"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/mob-app.svg"
                width={750}
                height={650}
                alt="Haulerz App"
                quality={100}
                className=" mx-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}