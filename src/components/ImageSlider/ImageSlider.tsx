import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  name: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, name }) => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
    >
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            alt={name}
            width={420}
            height={200}
            className="r-post-image"
          />
        </div>
      ))}
    </Carousel>
  );
}

export default ImageSlider;