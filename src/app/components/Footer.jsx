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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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
      className="relative  bg-[#101010] mt-[100px] lg:mt-[200px] bg-cover bg-center bg-no-repeat pt-16 lg:pt-[120px] pb-6"
      dir="rtl"
      style={{
        backgroundImage: "url('/images/layer-3.png')",
      }}
      id="contactUs"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative -mt-[120px] lg:-mt-[220px] rounded-[24px] lg:rounded-[28px] px-5 sm:px-8 lg:px-16 py-10 lg:py-10 bg-cover bg-center bg-no-repeat"
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
                سواء عندك متجر ناشئ أو شركة كبيرة، هولرز يوفرلك طريقة أسرع وأسهل
                لإدارة الشحنات داخل السعودية.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6"
              >
                {[
                  {
                    src: "/images/appstrore.png",
                    alt: "App Store",
                    href: "https://apps.apple.com/sa/app/haulerz-%D9%87%D9%88%D9%84%D8%B1%D8%B2/id6753316208?l=ar",
                  },
                  {
                    src: "/images/googleplay.png",
                    alt: "Google Play",
                    href: "https://play.google.com/store/apps/details?id=com.haulerz.order&pcampaignid=web_share",
                  },
                ].map((store, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <Link
                      href={store.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={store.src}
                        alt={store.alt}
                        quality={100}
                        width={140}
                        height={80}
                        className="h-auto object-fill"
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <div className="lg:col-span-5 order-2">
              <div className="relative hidden lg:flex items-end justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 90, rotate: -4 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                  animate={{ y: [0, -10, 0] }}
                  className="absolute top-[0px] sm:bottom-[-70px] lg:top-[-220px] left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 z-20"
                >
                  <Image
                    src="/images/mobile.png"
                    alt="Haulerz"
                    width={440}
                    height={650}
                    quality={100}
                    priority
                    className="w-[420px] h-auto object-contain"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
                  animate={{ y: [0, 8, 0] }}
                  className="absolute top-[35px] sm:top-[-50px] lg:top-[-50px] left-1/2 lg:right-0 -translate-x-1/2 lg:translate-x-0 z-10"
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
              src="/images/1.svg"
              alt="Haulerz"
              width={160}
              height={40}
              className="mx-auto mb-8 "
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
            {socialIcons.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/70 hover:text-[#FFBF44] hover:border-[#FFBF44]/40 transition-all"
                  >
                    <Icon />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
