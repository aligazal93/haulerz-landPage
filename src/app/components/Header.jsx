"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-[999999] transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div className="bg-white/5 border lg:mb-0 mb-8 mt-8 relative z-[9999999999999] w-[90%] mx-auto px-8 py-3 border-white/5 backdrop-blur-[17px] rounded-[10px]">
        <div className="grid grid-cols-12 gap-2 items-center">
          <div className="col-span-12 lg:col-span-2">
            <div className="flex justify-between items-center">
              <Link href="/">
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

          <div className=" hidden lg:block col-span-12 lg:col-span-8">
            <ul className="items-center justify-center gap-6 hidden xl:flex">
              <li>
                <Link
                  href="#home"
                  className="text-custom14 font-[400] transition-all duration-500 hover:text-primary text-white"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="#whyUs"
                  className="text-custom14 font-[400] transition-all duration-500 hover:text-primary text-white"
                >
                  ليش هولرز ؟
                </Link>
              </li>
              <li>
                <Link
                  href="#prices"
                  className="text-custom14 font-[400] transition-all duration-500 hover:text-primary text-white"
                >
                  التسعيرات
                </Link>
              </li>
              <li>
                <Link
                  href="#whyChoose"
                  className="text-custom14 font-[400] transition-all duration-500 hover:text-primary text-white"
                >
                  ليش تختار هولرز؟
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-custom14 font-[400] transition-all duration-500 hover:text-primary text-white"
                >
                  آراء عملائنا
                </Link>
              </li>
              <li>
                <Link
                  href="#contactUs"
                  className="text-custom14 font-[400] transition-all duration-500 hover:text-primary text-white"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden lg:block col-span-12 lg:col-span-2">
            <Link
              href="/"
              className="lg:block hidden bg-primary hover:bg-secondary hover:text-white transition-all duration-500 p-4 rounded-full text-custom12 float-end text-secondary font-[700] px-8 "
            >
              حمل التطبيق الان
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`fixed xl:hidden top-0 right-0 h-full w-[70%] bg-primary text-white transform transition-all duration-300 z-[999999999999] p-5 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundImage: "url('/images/layer.png')",
        }}
      >
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={300}
            height={50}
            className="w-[90px] h-[30px] transition-all duration-500 object-cover hover:scale-110 animate-fadeInUp"
          />
        </Link>

        <ul className="mt-[40px]">
          <li>
            <Link
              href="/"
              className="text-custom14 block my-4 font-[400] transition-all duration-500 hover:text-primary text-white"
            >
              الرئيسية
            </Link>
          </li>
          <li>
            <Link
              href="#whyUs"
               onClick={() => setOpen(false)}
              className="text-custom14 block my-4 font-[400] transition-all duration-500 hover:text-primary text-white"
            >
              ليش هولرز ؟
            </Link>
          </li>
          <li>
            <Link
              href="#prices"
               onClick={() => setOpen(false)}

              className="text-custom14 block my-4 font-[400] transition-all duration-500 hover:text-primary text-white"
            >
              التسعيرات
            </Link>
          </li>
          <li>
            <Link
              href="#whyChoose"
               onClick={() => setOpen(false)}

              className="text-custom14 block my-4 font-[400] transition-all duration-500 hover:text-primary text-white"
            >
              ليش تختار هولرز؟
            </Link>
          </li>
          <li>
            <Link
              href="#testimonials"
               onClick={() => setOpen(false)}

              className="text-custom14 block my-4 font-[400] transition-all duration-500 hover:text-primary text-white"
            >
              آراء عملائنا
            </Link>
          </li>
          <li>
            <Link
              href="#contactUs"
               onClick={() => setOpen(false)}

              className="text-custom14 block my-4 font-[400] transition-all duration-500 hover:text-primary text-white"
            >
              تواصل معنا
            </Link>
          </li>
        </ul>

        <Link
          href="/"
          className="block bg-primary text-center mt-[50px] hover:bg-secondary hover:text-white transition-all duration-500 p-4 rounded-full text-custom12  text-secondary font-[700] px-8 "
        >
          حمل التطبيق الان
        </Link>
      </div>
    </>
  );
}
