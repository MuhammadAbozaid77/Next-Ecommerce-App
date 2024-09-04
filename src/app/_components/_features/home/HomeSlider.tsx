"use client";
import React, { useEffect, useState } from "react";
import { slides } from "../../lib/sliderData";
import Link from "next/link";
import Image from "next/image";

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div className="h-[calc(100vh-80px)] overflow-hidden">
        <div
          className="w-max transition-all h-full flex ease-in-out duration-1000"
          style={{ transform: `translateX(-${current * 100}vw)` }}
        >
          {slides.map((el, index) => (
            <div
              key={el?.id}
              className={`${el.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            >
              <div className="h-1/2 xl:w-1/2 xl:h-full flex justify-center items-center gap-8 2xl:gap-12 flex-col text-center">
                <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                  {el.description}
                </h2>
                <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold px-8">
                  {el.title}
                </h1>
                <Link href={el.url}>
                  <button className="uppercase rounded-md bg-black text-white py-3 px-4">
                    Shop now
                  </button>
                </Link>
              </div>
              <div className="relative h-1/2  xl:h-full xl:w-1/2">
                <Image
                  alt=""
                  src={el?.img}
                  fill
                  sizes="100%"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
          {slides.map((slideButton, index) => (
            <div
              key={slideButton.id}
              className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex justify-center items-center ${
                current === index ? "scale-150" : ""
              }`}
              onClick={() => setCurrent(index)}
            >
              {current === index && (
                <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
