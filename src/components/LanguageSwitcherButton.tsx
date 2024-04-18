import React, { useEffect, useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import i18n from '../i18n'; // Подключаем наш модуль с i18n

const LanguageSwitcherButton: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'uz'); // Получаем выбранный язык из localStorage или устанавливаем по умолчанию 'uz'

    useEffect(() => {
        console.log("Selected language:", selectedLanguage); // Выводим выбранный язык в консоль
    }, [selectedLanguage]);

    const changeLanguage = (language: string) => {
        setSelectedLanguage(language); // Устанавливаем выбранный язык в state
        localStorage.setItem('selectedLanguage', language); // Сохраняем выбранный язык в localStorage
        i18n.changeLanguage(language); // Изменяем текущий язык в i18n
    };

    const menu = (
        <Menu>
            <Menu.Item key="uz" onClick={() => changeLanguage('uz')}>O'zbek</Menu.Item>
            <Menu.Item key="ru" onClick={() => changeLanguage('ru')}>Русский</Menu.Item>
            {/* Добавьте другие языки, если необходимо */}
        </Menu>
    );

    return (
        <div className="mr-8">
            <Dropdown overlay={menu} trigger={['click']}>
                <GlobalOutlined style={{ fontSize: '24px', color: '#ffffff' }} />
            </Dropdown>
        </div>
    );
};

export default LanguageSwitcherButton;
