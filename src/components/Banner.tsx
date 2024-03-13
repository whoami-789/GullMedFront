import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from "react-slick";

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {banners.map((banner, index) => (
                <div key={index}>
                    <img src={banner} alt={`Banner ${index + 1}`} />
                </div>
            ))}
        </Slider>
    );
}

export default Banner;