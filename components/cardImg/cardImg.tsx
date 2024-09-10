import React, { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import "./cardImg.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardImg({ img }: { img: string[] }) {
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [slider1, setSlider1] = useState<any>(undefined);
  const sliderRef = useRef<Slider>(null);
  useEffect(() => {
    setNav1(sliderRef.current ?? undefined)
  }, [sliderRef]);

  const settings: Settings = {
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    lazyLoad: "ondemand",
    asNavFor: nav1,
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
  };

  console.log(img);

  return (
    <div className="containerSlider">
      <Slider {...settings} ref={sliderRef}>
        {img.map((item, idx) => (
          <div key={idx}>
            {/* Use Next.js Image component for better image optimization */}
            <Image
              src={`/${item}`}
              alt={`Slide ${idx}`}
              width={700}
              height={600}
            />
          </div>
        ))}
      </Slider>

      <div className="thumb-wrapper">
        {img.map((item, idx) => (
          <div
            key={item}
            className={currentSlide === idx ? "active" : ""}
            onClick={() => sliderRef.current?.slickGoTo(idx)}
          >
            <Image src={`/${item}`} alt="" width={80} height={80} />
          </div>
        ))}
      </div>
    </div>
  );
}
