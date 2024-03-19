import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="bg-blue-700 py-4">
            <div className="container mx-auto flex justify-between items-center flex-wrap"> {/* Добавляем классы flex-wrap и overflow-x для предотвращения съедания элементов */}
                <div className="text-white text-xl font-bold">Gull Med</div>
                <nav className={`md:flex md:items-center hidden ${isMenuOpen ? 'absolute' : 'static'}`}> {/* Используем классы absolute и static для мобильного меню */}
                    <ul className="flex space-x-4 text-white">
                        <li>
                            <NavLink to="/" className={window.location.pathname === '/' ? 'text-gray-400' : ''}>Главная</NavLink>
                        </li>
                        <li>
                            <NavLink to="/procedure" className={window.location.pathname === '/procedure' ? 'text-gray-400' : ''}>Процедуры и обследования</NavLink>
                        </li>
                        <li>
                            <NavLink to="/results" className={window.location.pathname === '/results' ? 'text-gray-400' : ''}>Результаты обследований</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className="ml-7">Войти</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        <FaBars />
                    </button>
                </div>
            </div>
            {/* Мобильное меню */}
            {isMenuOpen && (
                <nav className="md:hidden bg-blue-700 w-full">
                    <ul className="flex flex-col space-y-4 text-white items-center">
                        <li>
                            <NavLink to="/" className={window.location.pathname === '/' ? 'text-gray-400' : ''} onClick={toggleMenu}>Главная</NavLink>
                        </li>
                        <li>
                            <NavLink to="/procedure" className={window.location.pathname === '/procedure' ? 'text-gray-400' : ''} onClick={toggleMenu}>Процедуры и обследования</NavLink>
                        </li>
                        <li>
                            <NavLink to="/results" className={window.location.pathname === '/results' ? 'text-gray-400' : ''} onClick={toggleMenu}>Результаты обследований</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" onClick={toggleMenu}>Войти</NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;
