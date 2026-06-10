"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaTiktok,
  FaInstagram,
  FaXTwitter,
  FaSnapchat,
} from "react-icons/fa6";
import StoreButtons from "./AppMobile";

const smoothEase = [0.22, 1, 0.36, 1];

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
      ease: smoothEase,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 70,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: smoothEase,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -70,
    scale: 0.94,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: smoothEase,
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

export default function Footer() {
  const socialIcons = [
    {
      icon: FaEnvelope,
      link: "mailto:info@haulerz.sa",
    },
    {
      icon: FaTiktok,
      link: "https://www.tiktok.com/@haulerz.com",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/haulerz.sa",
    },
    {
      icon: FaXTwitter,
      link: "https://x.com/haulerz",
    },
    {
      icon: FaSnapchat,
      link: "https://www.snapchat.com/@haulerz",
    },
  ];

  return (
    <footer
      className="relative bg-[#101010] mt-[250px] lg:mt-[200px] bg-cover bg-center bg-no-repeat pt-16 lg:pt-[120px] pb-6 "
      dir="rtl"
      style={{
        backgroundImage: "url('/images/layer-3.png')",
      }}
      id="contactUs"
    >
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.16, 0.3, 0.16],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[120px] right-[-130px] w-[340px] h-[340px] rounded-full bg-[#FFBF44]/25 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.22, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="absolute bottom-[80px] left-[-140px] w-[360px] h-[360px] rounded-full bg-white/10 blur-[130px]"
      />

      <div className="container mx-auto px-4 relative z-[99999999]">
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.96,
            filter: "blur(12px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: smoothEase }}
          className="relative mt-[-300px] rounded-[24px] lg:rounded-[28px] px-5 sm:px-8 lg:px-16 py-10 lg:py-14 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: "url('/images/layer-4.png')",
          }}
        >
          <motion.div
            animate={{
              x: [0, -18, 0],
              y: [0, 14, 0],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-20 -right-20 w-[240px] h-[240px] bg-white/25 rounded-full blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, 16, 0],
              y: [0, -12, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="absolute -bottom-24 left-[-40px] w-[260px] h-[260px] bg-[#101010]/20 rounded-full blur-3xl"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4 relative z-10">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-7 text-center lg:text-right order-1"
            >
              <motion.h2
                variants={fadeUp}
                className="text-[#101010] text-[24px] sm:text-[28px] lg:text-custom28 font-[700] mb-4 leading-[1.5]"
              >
                خل شحناتك تمشي بدون تعقيد
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-[#101010]/80 text-custom14 lg:text-base leading-8 max-w-[560px] mx-auto lg:mx-0"
              >
                سواء عندك متجر ناشئ أو شركة كبيرة، هولرز يوفرلك طريقة أسرع وأسهل
                لإدارة الشحنات داخل السعودية.
              </motion.p>

              <StoreButtons fadeUp={fadeUp} />
            </motion.div>

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-5 order-2"
            >
              <div className="relative hidden lg:flex items-end justify-center min-h-[300px] sm:min-h-[360px] lg:min-h-[230px]">
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, -1.5, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-[0px] lg:top-[-150px] left-1 lg:left-0 -translate-x-1/2 lg:translate-x-0 z-20"
                >
                  <motion.div
                    whileHover={{ scale: 1.035, rotate: -1 }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 18,
                    }}
                  >
                    <Image
                      src="/images/mobile.png"
                      alt="Haulerz"
                      width={440}
                      height={650}
                      quality={100}
                      className="object-fill w-[600px] h-[450px]"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    x: [0, 6, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="absolute top-[35px] sm:top-[25px] lg:top-[50px] left-1/2 lg:right-0 -translate-x-1/2 lg:translate-x-0 z-10"
                >
                  <motion.div
                    whileHover={{ scale: 1.06, rotate: 2 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 18,
                    }}
                  >
                    <Image
                      src="/images/mini.png"
                      alt="mini"
                      width={300}
                      height={200}
                      className="w-[190px] sm:w-[240px] lg:w-[300px] h-auto object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.20)]"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center mt-12"
        >
          <motion.div variants={fadeUp}>
            <Image
              src="/images/1.svg"
              alt="Haulerz"
              width={160}
              height={40}
              className="mx-auto mb-8"
            />
          </motion.div>

          <motion.ul
            variants={stagger}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-white/60 text-custom13"
          >
            {[
              ["الرئيسية", "#home"],
              ["ليش هولرز؟", "#whyUs"],
              ["التسعيرات", "#prices"],
              ["ليش تختار هولرز؟", "#whyChoose"],
              ["آراء عملائنا", "#testimonials"],
              ["تواصل معنا", "#contactUs"],
            ].map(([title, href]) => (
              <motion.li
                key={title}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
              >
                <Link
                  className="text-custom14 hover:text-[#FFBF44] transition-colors"
                  href={href}
                >
                  {title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={stagger}
            className="flex flex-wrap items-center justify-center gap-3 mt-8"
          >
            {socialIcons.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -7, scale: 1.1 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                >
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/70 hover:text-[#FFBF44] hover:border-[#FFBF44]/40 hover:shadow-[0_14px_35px_rgba(255,191,68,0.12)] transition-all"
                  >
                    <motion.span
                      whileHover={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                    >
                      <Icon />
                    </motion.span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="mt-10 pt-5 border-t border-white/10 text-center gap-4 text-white text-custom12"
        >
          <p className="text-center text-custom12">
            © 2026 هولرز. جميع الحقوق محفوظة.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 220, damping: 16 }}
      >
        <Link
          href="https://wa.me/96612345678"
          target="_blank"
          className="fixed bottom-8 right-5 lg:bottom-7 lg:right-7 z-50 group"
        >
          <span className="absolute inset-0 rounded-full bg-primary blur-xl opacity-40 transition-all duration-500 animate-pulse" />

          <motion.span
            whileHover={{ scale: 1.12, rotate: 8 }}
            whileTap={{ scale: 0.92 }}
            className="relative w-[58px] h-[58px] lg:w-[64px] lg:h-[64px] rounded-full bg-gradient-to-br from-primary to-primary flex items-center justify-center text-white text-[30px] border border-white/20 backdrop-blur-md transition-all duration-500"
          >
            <Image
              src="/images/whatsapp.svg"
              alt="whatsapp"
              width={24}
              height={24}
              quality={100}
              className="object-cover"
            />
          </motion.span>

          <span className="absolute inset-0 rounded-full border border-primary/40 animate-ping" />
        </Link>
      </motion.div>
    </footer>
  );
}