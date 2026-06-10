"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const stores = [
  {
    src: "/images/appstrore.png",
    alt: "App Store",
    fallback:
      "https://apps.apple.com/sa/app/haulerz-%D9%87%D9%88%D9%84%D8%B1%D8%B2/id6753316208?l=ar",
    appLink: "haulerz://home",
  },
  {
    src: "/images/googleplay.png",
    alt: "Google Play",
    fallback:
      "https://play.google.com/store/apps/details?id=com.haulerz.order&pcampaignid=web_share",
    appLink:
      "intent://home#Intent;scheme=haulerz;package=com.haulerz.order;end",
  },
];

export default function StoreButtons({ fadeUp }) {
  const openApp = (store) => {
    const userAgent = navigator.userAgent || navigator.vendor;

    // Android
    if (/android/i.test(userAgent)) {
      window.location.href = store.appLink;

      setTimeout(() => {
        window.location.href = store.fallback;
      }, 1500);
    }

    // iPhone
    else if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href = store.appLink;

      setTimeout(() => {
        window.location.href = store.fallback;
      }, 1500);
    }

    // Desktop
    else {
      window.open(store.fallback, "_blank");
    }
  };

  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6"
    >
      {stores.map((store, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <button
            onClick={() => openApp(store)}
            className="border-0 bg-transparent p-0"
          >
            <Image
              src={store.src}
              alt={store.alt}
              quality={100}
              width={140}
              height={80}
              className="h-auto object-fill"
            />
          </button>
        </motion.div>
      ))}
    </motion.div>
  );
}