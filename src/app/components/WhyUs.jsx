"use client";

import React from "react";
import { motion } from "framer-motion";

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

export default function WhyUs() {
  return (
    <section className="bg-white py-20 overflow-hidden" dir="rtl" id="whyUs">
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
          ليش هولرز؟
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-[1080px] mx-auto"
        >
          {/* Card */}
          <motion.div
            variants={item}
            whileHover={{
              y: -8,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
              },
            }}
            className="bg-white border border-[#E7EAF0] rounded-[24px] min-h-[220px] flex flex-col items-center justify-center text-center px-6 py-8 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] "
          >
            <img
              src="/images/w-3.png"
              alt=""
              className="w-[86px] h-[86px] object-contain mb-6"
            />

            <h3 className="text-secondary text-custom20 font-[700] mb-3">
              السعر
            </h3>

            <p className="text-[#8A8A8A] text-custom14 leading-7">
              أقل تكلفة شحن فعلية على متجرك
            </p>
          </motion.div>

          {/* Card */}
          <motion.div
            variants={item}
            whileHover={{
              y: -8,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
              },
            }}
            className="bg-white border border-[#E7EAF0] rounded-[24px] min-h-[220px] flex flex-col items-center justify-center text-center px-6 py-8 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] "
          >
            <img
              src="/images/w-2.png"
              alt=""
              className="w-[86px] h-[86px] object-contain mb-6"
            />

            <h3 className="text-secondary text-custom20 font-[700] mb-3">
              السرعة
            </h3>

            <p className="text-[#8A8A8A] text-custom14 leading-7">
              توصيل داخل الرياض خلال 6 ساعات
              <br />
              إلى خارج الرياض خلال 3–5 أيام
            </p>
          </motion.div>

          {/* Card */}
          <motion.div
            variants={item}
            whileHover={{
              y: -8,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
              },
            }}
            className="bg-white border border-[#E7EAF0] rounded-[24px] min-h-[220px] flex flex-col items-center justify-center text-center px-6 py-8 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] "
          >
            <img
              src="/images/w-1.png"
              alt=""
              className="w-[86px] h-[86px] object-contain mb-6"
            />

            <h3 className="text-secondary text-custom20 font-[700] mb-3">
              الراحة
            </h3>

            <p className="text-[#8A8A8A] text-custom14 leading-7">
              نستلم ونوصل
              <br />
              بدون تعقيد... بدون إدارة
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
