import styles from '../styles/Home.module.css'
import React from 'react';
import useGeolocation from 'hooks/geolocation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';

export default function Home() {
  const geolocation = useGeolocation();

  return (
    <div className={styles.container}>
      <h1>HIHIHI</h1>
      <main>
        <p>
         {`You are at ${geolocation.latitude}, ${geolocation.longitude}`}
        </p>

        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        onSwiper={(swiper) => (window.swiper = swiper)}
        slidesPerView={3}
        spaceBetween={50}
        navigation
        loop
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
      </main>
    </div>
  )
}
