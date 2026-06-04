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
  FaFacebookF,
} from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Footer() {
  const socialIcons = [
    FaEnvelope,
    FaTiktok,
    FaInstagram,
    FaXTwitter,
    FaSnapchat,
    FaFacebookF,
  ];

  return (
    <footer
      className="relative bg-[#101010] mt-[100px] lg:mt-[200px] bg-cover bg-center bg-no-repeat pt-16 lg:pt-[120px] pb-6 "
      dir="rtl"
      style={{
        backgroundImage: "url('/images/layer-3.png')",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mt-[-300px] rounded-[24px] lg:rounded-[28px] px-5 sm:px-8 lg:px-16 py-10 lg:py-14 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: "url('/images/layer-4.png')",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute -top-20 -right-20 w-[220px] h-[220px] bg-white/20 rounded-full blur-3xl"
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
                سواء عندك متجر ناشئ أو شركة كبيرة، هولرز يوفرلك طريقة أسرع
                وأسهل لإدارة الشحنات داخل السعودية.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6"
              >
                {[
                  { src: "/images/google.png", alt: "Google Play" },
                  { src: "/images/appstrore.png", alt: "App Store" },
                ].map((store, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <Link href="#">
                      <Image
                        src={store.src}
                        alt={store.alt}
                        width={150}
                        height={45}
                        className="h-[42px] sm:h-[45px] w-auto"
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <div className="lg:col-span-5 order-2">
              <div className="relative hidden lg:flex items-end justify-center min-h-[300px] sm:min-h-[360px] lg:min-h-[230px]">
                <motion.div
                  initial={{ opacity: 0, y: 90, rotate: -4 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                  animate={{ y: [0, -10, 0] }}
                  className="absolute top-[0px] sm:bottom-[-70px] lg:top-[-108px] left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 z-20"
                >
                  <Image
                    src="/images/mob-2.png"
                    alt="Haulerz"
                    width={440}
                    height={450}
                    className="w-[280px] sm:w-[340px] lg:w-[440px] h-[400px] object-fill"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 80, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
                  animate={{ y: [0, 8, 0] }}
                  className="absolute top-[35px] sm:top-[25px] lg:top-[50px] left-1/2 lg:right-[-120px] -translate-x-1/2 lg:translate-x-0 z-10"
                >
                  <Image
                    src="/images/mini.png"
                    alt="mini"
                    width={300}
                    height={200}
                    className="w-[190px] sm:w-[240px] lg:w-[300px] h-auto object-contain"
                  />
                </motion.div>
              </div>
            </div>
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
              src="/images/logo.png"
              alt="Haulerz"
              width={130}
              height={50}
              className="mx-auto mb-8 w-[120px] h-auto"
            />
          </motion.div>

          <motion.ul
            variants={stagger}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-white/60 text-custom13"
          >
            {[
              ["الرئيسية", "/"],
              ["ليش هولرز؟", "#why"],
              ["التسعيرات", "#prices"],
              ["ليش تختار هولرز؟", "#advantages"],
              ["آراء عملائنا", "#reviews"],
              ["تواصل معنا", "#contact"],
            ].map(([title, href]) => (
              <motion.li key={title} variants={fadeUp}>
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
            {socialIcons.map((Icon, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/70 hover:text-[#FFBF44] hover:border-[#FFBF44]/40 transition-all"
                >
                  <Icon />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-10 pt-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-custom12 text-center md:text-start"
        >
          <p>© 2026 هولرز. جميع الحقوق محفوظة.</p>

          <div className="flex items-center gap-5">
            <Link className="hover:text-white transition-colors" href="#">
              سياسة الخصوصية
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              الشروط والأحكام
            </Link>
          </div>
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
          className="fixed bottom-5 right-5 lg:bottom-7 lg:right-7 z-50 group"
        >
          <span className="absolute inset-0 rounded-full bg-primary blur-xl opacity-40 transition-all duration-500 animate-pulse" />

          <motion.span
            whileHover={{ scale: 1.12, rotate: 8 }}
            whileTap={{ scale: 0.92 }}
            className="relative w-[58px] h-[58px] lg:w-[64px] lg:h-[64px] rounded-full bg-gradient-to-br from-primary to-primary flex items-center justify-center text-white text-[30px] border border-white/20 backdrop-blur-md transition-all duration-500"
          >
            <Image
              src="/images/whatsapp.png"
              alt="whatsapp"
              width={40}
              height={40}
              className="w-[30px] h-[30px] object-cover"
            />
          </motion.span>

          <span className="absolute inset-0 rounded-full border border-primary/40 animate-ping" />
        </Link>
      </motion.div>
    </footer>
  );
}