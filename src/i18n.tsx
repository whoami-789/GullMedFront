// i18n.tsx
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируем языковые файлы
import translationUZ from './lang/uz.json';
import translationRU from './lang/ru.json';

// Настройка i18next
i18n
    .use(initReactI18next) // Подключаем React
    .init({
        resources: {
            uz: {
                translation: translationUZ,
            },
            ru: {
                translation: translationRU,
            },
        },
        lng: 'uz', // Устанавливаем начальный язык
        fallbackLng: 'uz', // Устанавливаем язык по умолчанию
        interpolation: {
            escapeValue: false, // не экранировать специальные символы
        },
    });

export default i18n;
