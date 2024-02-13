"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperRef from "swiper";
import { twMerge } from "tailwind-merge";

import "swiper/css";
import "swiper/css/navigation";

const data = {
  inscription:
    "We utilize a distinct set of tools based on your specific requirements",
  tools: "Tools",
  cawi: "CAWI",
  description:
    "Computer-Assisted Web Interviewing is a vital tool in our arsenal, allowing us to conduct surveys and collect data through online platforms with the assistance of specialized software, ensuring efficient and accurate data collection for our clients' market research needs",
};

const cardList = Array(6)
  .fill(0)
  .map(() => ({ ...data }));

export const ResearchCardList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperRef | null>(null);

  const onSwiper = (swiper: SwiperRef) => {
    swiperRef.current = swiper;
    setActiveIndex(swiper.activeIndex);
  };

  const onSlideChange = (indexToSet: number) => {
    if (indexToSet && indexToSet > cardList.length - 1) {
      return;
    }

    swiperRef.current?.slideTo(indexToSet);
  };

  return (
    <div className="py-[3.75rem]">
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={30}
        onSwiper={onSwiper}
        onSlideChange={onSwiper}
        className="mb-[2.25rem] max-w-[95vw] md:mb-[3.25rem] md:max-w-[unset] lg:mb-[3.75rem]"
      >
        {cardList.map((card, index, arr) => (
          <SwiperSlide
            key={index}
            className={twMerge(
              "max-w-[30.125rem] md:max-w-[80vw] lg:max-w-[48.125rem]",
              index === 0 && "md:ml-[5vw]",
              index === arr.length - 1 && "md:mr-[5vw]",
            )}
          >
            <div className="border-accent max-w-[30.125rem] rounded-[0.625rem] border-2 bg-gradient-to-r from-[#142F28] to-[rgba(52,57,57,0.38)] px-[1.813rem] py-[0.875rem] md:max-w-[40.125rem] lg:max-w-[48.125rem] lg:px-[2.813rem] lg:py-[1.875rem]">
              <p className="text-accentLight mb-[1.25rem] text-center text-[1rem] font-[500] italic leading-[1.15] lg:text-[1.12rem]">
                {card.inscription}
              </p>
              <div className=" mb-[3.75rem] flex items-center justify-between md:mb-[5.5rem] lg:mb-[7.5rem]">
                <p className=" text-accentLight text-[1.5rem] font-bold italic leading-[1.15] md:text-[2rem] lg:text-[2.5rem]">
                  {card.tools}
                </p>
                <p className="text-[1.5rem] font-bold leading-[1.15] md:text-[2rem] lg:text-[2.5rem]">
                  {card.cawi}
                </p>
              </div>
              <p className="mb-[0.5rem] text-[1.25rem] font-[500] leading-[1.15] md:mb-[3rem] lg:mb-[4rem] lg:text-[1.75rem]">
                {card.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-[0.938rem]">
        <button
          onClick={() => onSlideChange(activeIndex - 1)}
          className="border-accent hover:bg-accent active:bg-accent flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border-2 hover:bg-opacity-15 active:bg-opacity-25"
        >
          <Image
            src="/images/arrowLeft.png"
            width={20}
            height={20}
            alt="Arrow left"
          />
        </button>
        <button
          onClick={() => onSlideChange(activeIndex + 1)}
          className="border-accent hover:bg-accent active:bg-accent flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border-2 hover:bg-opacity-15 active:bg-opacity-25"
        >
          <Image
            src="/images/arrowLeft.png"
            width={20}
            height={20}
            className="rotate-180"
            alt="Arrow right"
          />
        </button>
      </div>
    </div>
  );
};
