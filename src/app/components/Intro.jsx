"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const parent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageMotion = {
  hidden: {
    opacity: 0,
    x: -60,
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

export default function Intro() {
  const MotionImage = motion(Image);
  return (
    <section
      className="relative min-h-screen mt-[-200px] overflow-hidden bg-cover bg-center bg-no-repeat pt-[200px]"
      style={{
        backgroundImage: "url('/images/layer.png')",
      }}
    >
      <div className="container mx-auto h-full px-4" id="home">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[800px] gap-10">
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="lg:col-span-6 text-center lg:text-start"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex rounded-full bg-[#FFBF44]/10 px-8 py-3 text-[#F5B93B] text-custom14 font-[400]"
            >
              شحن ذكي يناسب حجم شغلك
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-white text-[32px] md:text-[34px] lg:text-[40px] my-6 font-[700] leading-[60px] lg:leading-[70px]"
            >
              خل شحناتك توصل أسرع...
              <br />
              وبتكلفة أقل
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white text-base md:text-[18px] leading-[34px] mx-auto lg:mx-0"
            >
              حل لوجستي ذكي يسهل عليك ارسال شحناتك، بأسعار تنافسية وباقات تناسب
              حجم احتياجك .
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="my-8 flex sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="/services"
                className="w-[220px] h-[58px] rounded-full bg-[#F5B93B] transition-all duration-300   hover:opacity-50 text-black text-custom14 font-bold flex items-center justify-center"
              >
                ابدأ الشحن الآن
              </Link>

              <Link
                href="/contact-us"
                className="w-[220px] h-[58px] rounded-full border border-white/60 text-custom14 text-white font-[700] flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
              >
                اطلب عرض سعر
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageMotion}
            sizes="(max-width: 768px) 100vw, 50vw"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="lg:col-span-6"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex justify-center lg:justify-center"
            >
              <MotionImage
                src="/images/intro.png"
                alt="Haulerz App"
                width={900}
                height={220}
                priority
                quality={100}
                whileHover={{ scale: 1.0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }}
                className="mb-8 w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
