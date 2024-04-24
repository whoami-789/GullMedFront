import React from 'react';
import {useTranslation} from "react-i18next";

const Footer: React.FC = () => {
    const {t} = useTranslation();

    return (
        <footer className="w-full bg-blue-700 text-white text-center py-4 mb-0 m-0">
            <div className="container mx-auto text-center text-white mb-0 m-0">
                <a>{t('footer')}</a>
                <br/>
            </div>
        </footer>
    );
}

export default Footer;
