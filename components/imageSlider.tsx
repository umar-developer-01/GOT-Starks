"use client";
import { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { ArrowBigLeft, ArrowBigRight, CircleDot,Circle } from "lucide-react";
import sliderStyles from "./slides.module.css";

interface Slide {
  url: string | StaticImageData;
  title: string;
}

interface Slides {
  slides: Slide[];
}

export default function ImageSlider({ slides }: Slides) {
  const [imageIndex, setimageIndex] = useState<number>(0);

  const showPrevImage = () => {
    const isFirstSlide = imageIndex === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : imageIndex - 1;
    setimageIndex(newSlide);
  };

  const showNextImage = () => {
    const isLastSlide = imageIndex === slides.length - 1;
    const newSlide = isLastSlide ? 0 : imageIndex + 1;
    setimageIndex(newSlide);
  };

  console.log("this is the image index", imageIndex);
  return (
    <>
      <div className={sliderStyles.container}>
        {slides.map((ele, index) => {
          return (
            <Image
              src={ele.url}
              key={index}
              alt={"slider"}
              className={sliderStyles.imageSize}
              style={{translate:`${-100 * imageIndex}%`}}
            />
          );
        })}
      </div>
      <button
        className={`${sliderStyles.sliderButton} ${sliderStyles.left}`}
        onClick={showPrevImage}
      >
        <ArrowBigLeft />
      </button>
      <button
        className={`${sliderStyles.sliderButton} ${sliderStyles.right}`}
        onClick={showNextImage}
      >
        <ArrowBigRight />
      </button>
      <div className={sliderStyles.dots}>
        {
          slides.map((_,index)=>{
            return (
          
              <button onClick={()=>setimageIndex(index)} key={index} className={sliderStyles.dotButton}>
                {index=== imageIndex? <CircleDot/>:<Circle/>}</button>
       
            )
          })
        }
      </div>
    </>
  );
}
