"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function Video() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    if (!videoRef.current) return;

    setIsPlaying(true);

    try {
      await videoRef.current.play();
    } catch (error) {
      setIsPlaying(false);
    }
  };

  return (
    <section className="my-4">
      <div className="container">
        <div className="relative overflow-hidden rounded-[12px]">
          {/* Video */}
          <video
            ref={videoRef}
            src="/images/vid.mp4"
            poster="/images/video.png"
            playsInline
            preload="metadata"
            controls={isPlaying}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            className="h-auto w-full object-fill lg:h-[700px] "
          />

          {/* Play Button */}
          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="تشغيل الفيديو"
              className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center"
            >
              <Image
                src="/images/play.svg"
                width={200}
                height={200}
                alt=""
                className="w-[50px] transition-all duration-300 hover:scale-110 sm:w-[80px] md:w-[120px] lg:w-[200px]"
              />
            </button>
          )}

          {/* Logo */}
          <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 sm:bottom-4 lg:bottom-6">
            <Image
              src="/images/1.png"
              width={140}
              height={70}
              alt="logo"
              quality={100}
              className="h-[40px] w-[60px] object-contain sm:h-[50px] sm:w-[80px] lg:w-[100px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}