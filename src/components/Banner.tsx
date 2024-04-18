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

    // useEffect(() => {
    //     // Запрос к API для получения изображений баннера
    //     axios.get('/api/banners')
    //         .then(response => {
    //             // Обработка успешного ответа
    //             setBanners(response.data);
    //         })
    //         .catch(error => {
    //             // Обработка ошибки
    //             console.error('Failed to fetch banners:', error);
    //         });
    // }, []);

    return (
        <>
            <Swiper
                className="mySwiper"
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Autoplay, Navigation]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 40
                    },
                    1440: {
                        slidesPerView: 1,
                        spaceBetween: 50
                    }
                }}
            >
                <SwiperSlide><img src='https://i.pinimg.com/originals/ca/26/2e/ca262e0354eea311c41134c3e4bc3bc2.gif'></img></SwiperSlide>
                <SwiperSlide><img src='https://i.pinimg.com/originals/ca/26/2e/ca262e0354eea311c41134c3e4bc3bc2.gif'></img></SwiperSlide>
                <SwiperSlide><img src='https://i.pinimg.com/originals/ca/26/2e/ca262e0354eea311c41134c3e4bc3bc2.gif'></img></SwiperSlide>

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
