import React from 'react';
import {useTranslation} from "react-i18next";

const Footer: React.FC = () => {
    const {t} = useTranslation();

    return (
        <footer className="fixed bottom-0 w-full bg-blue-700 text-white text-center py-4">
            <div className="container mx-auto text-center text-white">
                <a>{t('footer')}</a>
            </div>
        </footer>
    );
}

export default Footer;
