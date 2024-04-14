import React from 'react';
import { Menu, Dropdown } from 'antd';
import {ZhihuOutlined} from '@ant-design/icons';
import i18n from '../i18n'; // Импортируем объект i18n для доступа к функции изменения языка

const LanguageSwitcherButton: React.FC = () => {
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng); // Изменяем текущий язык при выборе из меню
    };

    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={() => changeLanguage('uz')}>O'zbek</Menu.Item>
            <Menu.Item key="2" onClick={() => changeLanguage('ru')}>Русский</Menu.Item>
            {/* Добавьте другие языки, если необходимо */}
        </Menu>
    );

    return (
        <div className="mr-8">
            <Dropdown overlay={menu} trigger={['click']}>
                <ZhihuOutlined style={{ fontSize: '24px', color: '#ffffff' }} />
            </Dropdown>
        </div>
    );
};

export default LanguageSwitcherButton;
