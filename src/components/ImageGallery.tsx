"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Zoom } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  return (
    <div className="w-full h-[70vh] overflow-hidden">
      <Swiper
        modules={[Pagination, Zoom]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        zoom={{
          maxRatio: 3,
          minRatio: 1,
        }}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center overflow-hidden">
            <div className="swiper-zoom-container w-full h-full flex items-center justify-center p-4 overflow-hidden">
              <Image
                src={image}
                alt={`${title} - Image ${index + 1}`}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
                priority={index === 0}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
