"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const parent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 45, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 70, scale: 0.94, filter: "blur(12px)" },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Intro() {
  return (
    <section
      id="home"
      className="relative min-h-screen mt-[-200px] overflow-hidden bg-cover bg-center bg-no-repeat pt-[200px]"
      style={{ backgroundImage: "url('/images/layer.png')" }}
    >
      {/* Glow animation */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] right-[8%] w-[280px] h-[280px] rounded-full bg-[#F5B93B]/20 blur-[90px]"
      />

      <div className="container mx-auto h-full px-4 relative z-10">
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
              className="text-white text-[32px] md:text-[34px] lg:text-[48px] my-6 font-[700] leading-[52px] lg:leading-[70px]"
            >
              خل شحناتك توصل أسرع...
              <br />
              وبتكلفة أقل
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/85 text-base md:text-[18px] leading-[34px] mx-auto lg:mx-0"
            >
              حل لوجستي ذكي يسهل عليك ارسال شحناتك، بأسعار تنافسية وباقات تناسب
              حجم احتياجك .
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="my-8 flex sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="https://wa.me/96612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[220px] h-[58px] rounded-full bg-[#F5B93B] text-black text-custom14 font-bold flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_35px_rgba(245,185,59,0.45)]"
                >
                  ابدأ الشحن الآن
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="https://wa.me/96612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[220px] h-[58px] rounded-full border border-white/60 text-custom14 text-white font-[700] flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
                >
                  اطلب عرض سعر
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-6"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                <Image
                  src="/images/intro.png"
                  alt="Haulerz App"
                  width={900}
                  height={220}
                  priority
                  quality={100}
                  className="mb-8 w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}