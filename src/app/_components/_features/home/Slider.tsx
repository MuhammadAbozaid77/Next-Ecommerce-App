"use client";
import React, { useState } from "react";
import { slides } from "../../lib/sliderData";

export default function Slider() {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div className="h-[calc(100vh-80px)] overflow-hidden">
        <div className="w-max transition-all h-full flex ease-in-out duration-1000">
          {slides.map((el, index) => (
            <div key={el?.id}>
              <div>
                <h2> {el.description} </h2>
                <h2> {el.title} </h2>
              </div>
              <div>Images</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
