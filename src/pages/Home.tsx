import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import doc from "../doctor.avif"
import {Button} from "antd";
import {Parallax} from 'react-parallax';


const Home: React.FC = () => {
    return (
        <div>
            <Header/>
            <div className="flex justify-center items-center flex-col">
                <div className='mt-2 mb-4'>
                    <Banner/>
                </div>
                <div className="max-w-5xl"> {/* Добавлен класс для контейнера */}
                    <div className="flex items-center justify-center py-8 mb-4">
                        <div className="max-w-xxl mx-auto flex-grow">
                            <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                <div className="lg:w-1/2 lg:mr-8">
                                    <h1 className="text-3xl font-bold text-blue-600 mb-4 max-[479px]:text-center m-1">Gull
                                        Med</h1>
                                    <p className="text-lg text-gray-700 leading-relaxed max-[479px]:text-center m-1">Добро
                                        пожаловать в клинику Gull Med, где ваше здоровье находится под надежной защитой
                                        нашей команды экспертов. Мы предлагаем самые современные методы диагностики и
                                        лечения, включая МРТ, УЗИ и многие другие процедуры. Наши
                                        высококвалифицированные врачи с большим опытом работы готовы помочь вам в любое
                                        время дня и ночи. Доверьте свое здоровье профессионалам в Gull
                                        Med, и вы получите доступ к первоклассным медицинским услугам в уютной и
                                        дружелюбной обстановке.</p>
                                </div>
                                <div className="lg:w-1/2 mt-4 lg:mt-0 max-[479px]:m-1">
                                    <img src={doc} alt="Фото врача"
                                         className="max-w-full h-auto object-cover rounded-lg lg:ml-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center">
                        <div className="w-full lg:mr-40 flex-grow">
                            <div className="bg-blue-600 text-white rounded-lg py-4 px-7 max-[479px]:m-1">
                                <h2 className="text-lg font-bold mb-2">Наши медицинские услуги</h2>
                                <p className="text-sm">Мы предлагаем широкий спектр
                                    медицинских услуг, чтобы удовлетворить потребности наших пациентов. Наша команда
                                    состоит из высококвалифицированных врачей, специализирующихся в различных областях
                                    медицины. Наша цель - помочь вам сохранить здоровье и жизнь в лучшем состоянии. Обращайтесь к нам с
                                    доверием, и мы сделаем все возможное, чтобы вам было комфортно и безопасно.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 mt-4 lg:mt-0 flex-grow">
                            <Button
                                className="w-full lg:w-auto bg-blue-600 hover:bg-blue-600 text-white font-bold px-8 rounded-full max-[479px]: h-10">
                                Записаться на обследование
                            </Button>
                        </div>
                    </div>
                    <div className='mt-10 mb-4'>
                        <h3 className='text-2xl font-bold text-blue-600 text-center mb-3'>Можете найти нас тут и сразу
                            вызвать такси</h3>
                        <iframe className='map rounded-lg' src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=136843806339"
                                height="400"></iframe>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
