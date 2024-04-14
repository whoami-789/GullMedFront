import React from 'react';
import {Menu, Dropdown} from 'antd';
import {GlobalOutlined, ZhihuOutlined} from '@ant-design/icons';

const LanguageSwitcherButton: React.FC = () => {
    const menu = (
        <Menu>
            <Menu.Item key="1">English</Menu.Item>
            <Menu.Item key="2">Русский</Menu.Item>
            {/* Добавьте другие языки, если необходимо */}
        </Menu>
    );

    return (
        <div className="mr-8">
            <Dropdown overlay={menu} trigger={['click']}>
                <ZhihuOutlined style={{fontSize: '24px', color: '#ffffff'}}/>
            </Dropdown>
        </div>
    );
};

export default LanguageSwitcherButton;
