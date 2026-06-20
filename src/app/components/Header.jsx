"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import ChangeLanguage from "./ChangeLanguage";

export default function Header({ locale }) {
  const [open, setOpen] = useState(false);

  const isArabic = locale === "ar";

  const links = [
    { title: isArabic ? "الرئيسية" : "Home", href: "#home" },
    { title: isArabic ? "ليش هولرز ؟" : "Why Haulerz?", href: "#whyUs" },
    { title: isArabic ? "التسعيرات" : "Pricing", href: "#prices" },
    {
      title: isArabic ? "ليش تختار هولرز؟" : "Why Choose Haulerz?",
      href: "#whyChoose",
    },
    {
      title: isArabic ? "آراء عملائنا" : "Testimonials",
      href: "#testimonials",
    },
    { title: isArabic ? "تواصل معنا" : "Contact Us", href: "#contactUs" },
  ];

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-[999998] transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div className="bg-white/5 border lg:mb-0 mb-8 mt-8 relative z-[50] w-[90%] mx-auto px-8 py-3 border-white/5 backdrop-blur-[17px] rounded-[10px]">
        <div className="grid grid-cols-12 gap-2 items-center">
          <div className="col-span-12 lg:col-span-2">
            <div className="flex justify-between items-center">
              <Link href={`/${locale}`}>
                <Image
                  src="/images/1.svg"
                  alt="logo"
                  width={200}
                  height={50}
                  quality={100}
                  className="block mx-auto h-auto transition-all duration-500 object-fill hover:scale-110 animate-fadeInUp"
                />
              </Link>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="flex xl:hidden lg:flex justify-end items-center text-secondary text-custom28 cursor-pointer"
              >
                <FaBars className="text-white mt-[0px]" size={28} />
              </button>
            </div>
          </div>

          <div className="hidden lg:block col-span-12 lg:col-span-8">
            <ul className="items-center justify-center gap-6 hidden xl:flex">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-custom16 font-[400] transition-all duration-500 hover:text-primary text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex col-span-12 lg:col-span-2 gap-2">
            <ChangeLanguage />

            <Link
              href="#contactUs"
              className="lg:block hidden bg-primary hover:bg-secondary hover:text-white transition-all duration-500 p-4 rounded-full text-custom14 float-end text-secondary font-[700] px-6"
            >
              {isArabic ? "حمل التطبيق الآن" : "Download App"}
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`fixed xl:hidden top-0 ${
          isArabic ? "right-0" : "left-0"
        } h-full w-[70%] max-w-[320px] bg-primary text-white transform transition-transform duration-300 z-[999999] p-5 overflow-hidden ${
          open
            ? "translate-x-0"
            : isArabic
            ? "translate-x-full"
            : "-translate-x-full"
        }`}
        style={{
          backgroundImage: "url('/images/layer.png')",
        }}
      >
        <Link href={`/${locale}`}>
          <Image
            src="/images/1.png"
            alt="logo"
            width={300}
            height={50}
            className="w-[90px] h-[30px] transition-all duration-500 object-cover hover:scale-110 animate-fadeInUp"
          />
        </Link>

        <ul className="mt-[40px]">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-custom14 block my-4 font-[400] transition-all duration-500 hover:text-primary text-white"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contactUs"
          onClick={() => setOpen(false)}
          className="block bg-primary text-center mt-[50px] hover:bg-secondary hover:text-white transition-all duration-500 p-4 rounded-full text-custom12 text-secondary font-[700] px-8"
        >
          {isArabic ? "حمل التطبيق الآن" : "Download App"}
        </Link>
      </div>
    </>
  );
}