import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderProps } from "./Slider.props";

export function Slider({ children }: SliderProps) {
  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,

    accessibility: true,
    dots: true,
    autoplaySpeed: 2000,
    draggable: true,
    speed: 500,
  };

  return (
    <>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </>
  );
}
