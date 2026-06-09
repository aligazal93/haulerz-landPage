import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
          <section className="container mt-[-100px] lg:mt-[-100px]">
        <div
          dir="rtl"
          className="relative overflow-hidden rounded-[24px] min-h-[210px] flex items-center justify-between px-8 lg:px-16 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bg.png')",
          }}
        >
          <div className="relative flex items-center z-10 max-w-[520px] text-center lg:text-right">
            <h2 className="text-[#121212] text-custom20 lg:text-[26px] font-[800] leading-[1.9]">
              سواء كنت فرد أو صاحب شركة،<br />
              هولرز توفرلك حلول ذكية لشحناتك 
              تتناسب مع احتياجك
            </h2>
          </div>

          <Image
            src="/images/cars.png"
            alt="Haulerz Cars"
            width={420}
            height={180}
            quality={100}
            className="relative z-10 hidden md:block lg:w-[300px] h-auto object-contain"
          />
        </div>
      </section>
  )
}
