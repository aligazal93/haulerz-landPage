import Image from "next/image";

export default function Video() {
  return (
    <section className="my-4">
      <div className="container">
        <div className="relative z-[9999999999] rounded-[12px]">
          {/* Video Thumbnail */}
          <Image
            src="/images/video.png"
            width={1280}
            height={720}
            alt="video"
            className="w-full object-fill h-auto lg:h-[600px]"
          />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/play.svg"
              width={100}
              height={100}
              alt="play"
              className="cursor-pointer w-[50px] lg:w-[200px] hover:scale-110 transition-all duration-300"
            />
          </div>

          {/* Logo */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <Image
              src="/images/1.png"
              width={140}
              height={70}
              alt="logo"
              quality={100}
              className="w-[60px] lg:w-[100px] h-[50px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}