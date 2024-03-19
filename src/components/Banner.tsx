import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../index.css'

import axios from "axios";

const Banner: React.FC = () => {
    const [banners, setBanners] = useState<string[]>([]);

    useEffect(() => {
        // Запрос к API для получения изображений баннера
        axios.get('/api/banners')
            .then(response => {
                // Обработка успешного ответа
                setBanners(response.data);
            })
            .catch(error => {
                // Обработка ошибки
                console.error('Failed to fetch banners:', error);
            });
    }, []);

    return (
        <>
            <Swiper
                className="mySwiper"
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                scrollbar={{draggable: true}}
                navigation={true}
                modules={[Autoplay, Navigation]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 50
                    }
                }}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                {/*{banners.map((banner, index) => (*/}
                {/*    <SwiperSlide key={index}>*/}
                {/*        <img src={banner} alt={`Banner ${index + 1}`} />*/}
                {/*    </SwiperSlide>*/}
                {/*))}*/}
            </Swiper>
        </>
    );
}

export default Banner;
