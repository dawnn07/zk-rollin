'use client'
import { useClaim } from "@/hooks/useClaim";
import Image from "next/image";
import React, { useRef, useState } from "react";


const Slider = (props: any) => {
  const [activeSlide, setActiveSlide] = useState(props.activeSlide);
  const [autoPlayInterval, setAutoPlayInterval] = useState<number | null>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const startAutoPlay = () => {
    if (props.data.length > 1) {
      setAutoPlayInterval(
        window.setInterval(() => {
          next();
        }, 3000) // Adjust the interval as needed (e.g., 3000 ms = 3 seconds)
      );
    }
  };

  const stopAutoPlay = () => {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      setAutoPlayInterval(null);
    }
  };
  const next = () => {
    if (activeSlide < props.data.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(0); // loop back to the first slide
    }
  };

  const prev = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(props.data.length - 1); // loop to the last slide
    }
  };

  const handleSlideClick = (index: number) => {
    setActiveSlide(index);
  };



  const getStyles = (index: number) => {
    const currentIndex = activeSlide % props.data.length;

    if (index === currentIndex) {
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10
      };
    } else if (index === (currentIndex - 1 + props.data.length) % props.data.length) {
      return {
        opacity: 1,
        transform: "translateX(-320px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9
      };
    } else if (index === (currentIndex + 1) % props.data.length) {
      return {
        opacity: 1,
        transform: "translateX(320px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9
      };
    } else if (index === (currentIndex - 2 + props.data.length) % props.data.length) {
      return {
        opacity: 1,
        transform: "translateX(-640px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8
      };
    } else if (index === (currentIndex + 2) % props.data.length) {
      return {
        opacity: 1,
        transform: "translateX(640px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8
      };
    } else {
      return {
        opacity: 0,
        transform: "translateX(0px) translateZ(-500px) rotateY(0deg)",
        zIndex: 7
      };
    }
  };

  return (
    <>
      {/* carousel */}
      <div className="slideC" ref={slideRef}>
        {props.data.map((item: any, i: any) => (
          <React.Fragment key={item.id}>
            <div
              className="slide"
              style={{
                background: item.bgColor,
                boxShadow: `0 5px 20px ${item.bgColor}30`,
                ...getStyles(i)
              }}
              onClick={() => handleSlideClick(i)}
            >
              <SliderContent {...item} />
            </div>
            <div
              className="reflection"
              style={{
                background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                ...getStyles(i)
              }}
            />
          </React.Fragment>
        ))}
      </div>
      {/* carousel */}

      {/* <div className="btns">
        <button className="btn z-20 relative" onClick={prev}>
          &#9664;
        </button>
        <button className="btn z-20 relative" onClick={next}>
          &#9654;
        </button>
      </div> */}
    </>
  );
};

const SliderContent = (props: any) => {
  const { claim } = useClaim();
  return (
    <div className="sliderContent relative hover:cursor-pointer">
      <Image src={props.image} alt={props.id} className="rounded-2xl" />
      <div className="absolute bottom-4 mx-4 p-[10.768px_14.357px] max-w-[360px] flex items-center gap-[10.768px] w-full justify-between rounded-[14.357px] backdrop-blur-[44.8669319152832px]">
        <div className="flex flex-col gap-[10.768px]">
          <div className="text-[#FFF] text-sm flex items-center gap-[7.179px]">
            <span>Crypto Unicorns</span>
            <span>#2745</span>
          </div>
          <div className="flex items-center gap-[8.443px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
              <circle cx="10.6364" cy="10.6257" r="10" fill="#EDF0F4" />
              <path d="M10.6091 4.62573L10.5295 4.89595V12.7362L10.6091 12.8156L14.2484 10.6644L10.6091 4.62573Z" fill="#343434" />
              <path d="M10.6091 4.62573L6.9697 10.6644L10.6091 12.8156V9.01014V4.62573Z" fill="#8C8C8C" />
              <path d="M10.6091 13.5047L10.5642 13.5593V16.3522L10.6091 16.483L14.2506 11.3546L10.6091 13.5047Z" fill="#3C3C3B" />
              <path d="M10.6091 16.483V13.5047L6.9697 11.3546L10.6091 16.483Z" fill="#8C8C8C" />
              <path d="M10.6091 12.8156L14.2484 10.6644L10.6091 9.01013V12.8156Z" fill="#141414" />
              <path d="M6.9697 10.6644L10.6091 12.8156V9.01013L6.9697 10.6644Z" fill="#393939" />
            </svg>
            <span className="text-[#FFF] text-sm font-semibold">1.09</span>
            <span className="text-[#FFF] text-sm">$1.09</span>
          </div>
        </div>
        <button onClick={
          claim
        } className="p-[8px_16px] rounded-lg bg-[#1D39C4] transition-all hover:opacity-70">
          <span>Mint</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;