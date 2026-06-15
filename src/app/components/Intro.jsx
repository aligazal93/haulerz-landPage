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

export default function Intro() {
  const MotionImage = motion(Image);
  const handleClick = () => {
    const userAgent = navigator.userAgent;

    if (/Android/i.test(userAgent)) {
      window.open(
        "https://play.google.com/store/apps/details?id=com.haulerz.order&pcampaignid=web_share",
        "_blank"
      );
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      window.open(
        "https://apps.apple.com/sa/app/haulerz-%D9%87%D9%88%D9%84%D8%B1%D8%B2/id6753316208?l=ar",
        "_blank"
      );
    } else {
      // Desktop
      window.open(
        "https://play.google.com/store/apps/details?id=com.haulerz.order&pcampaignid=web_share",
        "_blank"
      );
    }
  };

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
              className="inline-flex rounded-full bg-[#FFBF44]/10 px-8 py-3 text-[#F5B93B] text-custom16 font-[700]"
            >
              شحن ذكي يناسب احتياجك
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-white text-[32px] md:text-[34px] lg:text-[48px] my-6 font-[700] leading-[60px] lg:leading-[70px]"
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
              <button
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[220px] h-[58px] rounded-full bg-[#F5B93B] transition-all duration-300   hover:opacity-50 text-black text-custom14 font-bold flex items-center justify-center"
              >
                ابدأ الشحن الآن
              </button>

              <Link
                href="https://wa.me/+966920035830"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[220px] h-[58px] rounded-full border border-white/60 text-custom14 text-white font-[700] flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
              >
                اطلب عرض سعر
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
