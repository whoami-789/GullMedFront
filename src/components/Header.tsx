import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FaBars, FaUser} from "react-icons/fa";
import logo from '../logo.webp'
import {UserOutlined} from '@ant-design/icons';
import LanguageSwitcherButton from './LanguageSwitcherButton';
import {useTranslation} from "react-i18next"; // Импорт компонента кнопки перевода


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { t } = useTranslation();


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        // Проверяем, залогинен ли пользователь
        // Здесь может быть логика для проверки авторизации
        setIsLoggedIn(false); // Заглушка, установите реальную логику авторизации
    }, []);

    return (
        <header className="bg-blue-700 py-4">
            <div className="container mx-auto flex justify-between items-center flex-wrap">
                <div className="text-white flex">
                    <div className="text-xl font-bold mr-10">
                        <img className='max-w-28' src={logo} alt=""/>
                    </div>
                    <nav className={`md:flex md:items-center hidden ${isMenuOpen ? 'absolute' : 'static'}`}>
                        <ul className="flex space-x-4">
                            <li>
                                <NavLink to="/"
                                         className={window.location.pathname === '/' ? 'text-gray-400' : ''}>{t('header.main')}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/procedure"
                                         className={window.location.pathname === '/procedure' ? 'text-gray-400' : ''}>{t('header.procedures')}</NavLink>
                            </li>
                            {isLoggedIn && (
                                <li>
                                    <NavLink to="/results"
                                             className={window.location.pathname === '/results' ? 'text-gray-400' : ''}>{t('header.results')}</NavLink>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
                <nav className={`md:flex md:items-center hidden ${isMenuOpen ? 'absolute' : 'static'}`}>
                    <ul className="flex space-x-4 text-white">
                        <li className="flex items-center">
                            <LanguageSwitcherButton/>
                            <div className='block mr-4 text-center'>
                                <span className="text-white">{t('header.grafik')}</span>
                                <p/>
                                <span className="text-white">+998956007117</span>
                            </div>
                            {isLoggedIn ? (
                                <NavLink to="/results" className="ml-7 flex items-center">
                                    <UserOutlined/> <p className="ml-2">{t('header.account')}</p>
                                </NavLink>
                            ) : (
                                <NavLink to="/login" className="ml-7 flex items-center">
                                    {t('header.login')}
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </nav>

                <div className="flex md:hidden">
                    <LanguageSwitcherButton/>
                    <button onClick={toggleMenu} className="text-white mr-5">
                        <FaBars/>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <nav className="md:hidden bg-blue-700 w-full text-center">
                    <ul className="flex flex-col space-y-4 text-white items-center text-center">
                        <li>
                            <NavLink to="/" className={window.location.pathname === '/' ? 'text-gray-400' : ''}
                                     onClick={toggleMenu}>{t('header.main')}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/procedure"
                                     className={window.location.pathname === '/procedure' ? 'text-gray-400 text-center' : ''}
                                     onClick={toggleMenu}>{t('header.procedures')}</NavLink>
                        </li>
                        {isLoggedIn && (
                            <li>
                                <NavLink to="/results"
                                         className={window.location.pathname === '/results' ? 'text-gray-400 text-center' : ''}
                                         onClick={toggleMenu}>{t('header.results')}</NavLink>
                            </li>
                        )}
                        <li>
                            {isLoggedIn ? (
                                <NavLink to="/results" className="flex items-center">
                                    {t('header.account')}
                                </NavLink>
                            ) : (
                                <NavLink to="/login" className="flex items-center">
                                    {t('header.login')}
                                </NavLink>
                            )}
                        </li>

                        <a href="tel:+998956007117" className="text-white">+998956007117</a>

                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;
