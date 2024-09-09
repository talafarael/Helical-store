import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "./cardImg.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardImg({ img }: { img: string[] }) {
  const [nav1, setNav1] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider1, setSlider1] = useState<any>(null);

  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  const settings = {
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
    <>
      <Slider
        {...settings}
        ref={(slider) => setSlider1(slider)}
      >
        {img.map((item, idx) => (
          <div key={idx}>
            {/* Use Next.js Image component for better image optimization */}
            <Image src={`/${item}`} alt={`Slide ${idx}`} width={600} height={400} />
          </div>
        ))}
      </Slider>
      
      <div className="thumb-wrapper">
        {img.map((item, idx) => (
          <div
            key={item}
            className={currentSlide === idx ? "active" : ""}
            onClick={() => slider1?.slickGoTo(idx)}
          >
            <Image src={`/${item}`} alt={`Thumbnail ${idx}`} width={100} height={70} />
          </div>
        ))}
      </div>
    </>
  );
}
