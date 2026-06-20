"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const parent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 35, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Advantages({ isArabic }) {
  const features = [
    {
      icon: "/images/ic-1.png",
      title: isArabic ? "توصيل سريع ومرن" : "Fast and flexible delivery",
    },
    {
      icon: "/images/ic-2.png",
      title: isArabic ? "تتبع مباشر للطلبات" : "Live order tracking",
    },
    {
      icon: "/images/ic-3.png",
      title: isArabic ? "أسعار تناسب احتياجك" : "Prices that fit your needs",
    },
    {
      icon: "/images/ic-4.png",
      title: isArabic ? "دعم سريع للتجار" : "Fast support for merchants",
    },
  ];

  return (
    <section
      className="relative block w-full pb-[200px] pt-[100px] lg:pt-0"
      dir={isArabic ? "rtl" : "ltr"}
      id="whyChoose"
    >
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            className="lg:col-span-7 order-1"
          >
            <motion.div variants={fadeUp} className="text-center lg:text-start mb-8">
              <span className="inline-flex rounded-full bg-[#FFBF44]/10 px-8 py-3 text-center text-[#F5B93B] text-custom14 font-[700]">
                {isArabic ? "مميزات" : "Features"}
              </span>

              <h2 className="text-white text-custom18 lg:text-custom32 font-[700] mt-6">
                {isArabic ? "ليش تختار هولرز؟" : "Why Choose Haulerz?"}
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
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  className="min-h-[86px] rounded-[18px] border border-white/10 bg-white/[0.04] flex items-center justify-start lg:justify-center gap-4 px-6 hover:border-[#FFB000]/40 hover:shadow-[0_20px_50px_rgba(255,176,0,0.08)]"
                >
                  <span className="text-[#FFB000] text-[26px]">
                    <Image
                      src={item.icon}
                      width={26}
                      height={26}
                      alt={item.title}
                    />
                  </span>

                  <span className="text-white font-bold text-custom14 lg:text-custom18">
                    {item.title}
                  </span>
                </motion.div>
              ))}

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="sm:col-span-2 min-h-[86px] rounded-[18px] border border-white/10 bg-white/[0.04] flex items-center justify-start lg:justify-center col-span-2 gap-4 px-6 hover:border-[#FFB000]/40 hover:shadow-[0_20px_50px_rgba(255,176,0,0.08)]"
              >
                <Image
                  src="/images/ic-5.png"
                  width={26}
                  height={26}
                  alt={isArabic ? "ايقونه" : "icon"}
                />

                <span className="text-white font-bold text-custom14">
                  {isArabic
                    ? "حلول للشركات والمتاجر الإلكترونية"
                    : "Solutions for companies and online stores"}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-5 order-2"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/mob-app.png"
                width={950}
                height={650}
                alt="Haulerz App"
                quality={100}
                className="w-full mx-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}