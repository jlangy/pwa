import styles from '../styles/Home.module.css'
import React, {useEffect, useState} from 'react';
import useGeolocation from 'hooks/geolocation';
import useWindowDimensions from 'hooks/windowDimensions';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  const geolocation = useGeolocation();
  const { height, width } = useWindowDimensions();
  const imageHeight = Math.round(height * 0.8)

  return (
    <div className={styles.container}>
      <h1>Local Art</h1>
      <main>
        {/* <p>
         {`You are at ${geolocation.latitude}, ${geolocation.longitude}`}
        </p> */}
        <div className="swiper-container">
          <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
          onSwiper={(swiper) => (window.swiper = swiper)}
          slidesPerView={1}
          keyboard={{ enabled: true }}
          spaceBetween={0}
          navigation
          loop
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
        ><SwiperSlide><img src={`https://picsum.photos/id/1/${width}/${imageHeight}`} /></SwiperSlide> 
           <SwiperSlide><img src={`https://picsum.photos/id/20/${width}/${imageHeight}`} /></SwiperSlide> 
           <SwiperSlide><img src={`https://picsum.photos/id/30/${width}/${imageHeight}`} /></SwiperSlide> 
           <SwiperSlide><img src={`https://picsum.photos/id/40/${width}/${imageHeight}`} /></SwiperSlide> 
           <SwiperSlide><img src={`https://picsum.photos/id/50/${width}/${imageHeight}`} /></SwiperSlide>
        </Swiper>
        </div>
      </main>
    </div>
  )
}
