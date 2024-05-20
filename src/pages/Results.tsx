import React, {useState} from 'react';
import {Modal, Card, Button, Descriptions} from 'antd';
import {useTranslation} from "react-i18next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import jsPDF from 'jspdf';


const Results: React.FC = () => {
    const {t} = useTranslation();

    // Данные пациента
    const patientData = {
        firstName: 'Иван',
        lastName: 'Иванов',
        birthDate: '01.01.1980',
        phoneNumber: '+1234567890'
    };


    // Мокап данных о процедурах
    const proceduresData = [
        {
            id: 1,
            name: 'Процедура 1',
            date: '01.04.2024',
            time: '10:00',
            conclusion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio vestibulum, ultrices libero vel, dapibus dui. Fusce id placerat turpis, at rhoncus erat.',
        },
        {
            id: 2,
            name: 'Процедура 2',
            date: '02.04.2024',
            time: '12:00',
            conclusion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio vestibulum, ultrices libero vel, dapibus dui. Fusce id placerat turpis, at rhoncus erat.',
        }, {
            id: 2,
            name: 'Процедура 2',
            date: '02.04.2024',
            time: '12:00',
            conclusion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio vestibulum, ultrices libero vel, dapibus dui. Fusce id placerat turpis, at rhoncus erat.',
        }, {
            id: 2,
            name: 'Процедура 2',
            date: '02.04.2024',
            time: '12:00',
            conclusion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio vestibulum, ultrices libero vel, dapibus dui. Fusce id placerat turpis, at rhoncus erat.',
        }, {
            id: 2,
            name: 'Процедура 2',
            date: '02.04.2024',
            time: '12:00',
            conclusion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio vestibulum, ultrices libero vel, dapibus dui. Fusce id placerat turpis, at rhoncus erat.',
        },
        // Добавьте другие процедуры по аналогии, если необходимо
    ];

    // Состояние для отображения модального окна с подробной информацией
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProcedure, setSelectedProcedure] = useState<any>(null); // Выбранная процедура

    // Функция для открытия модального окна с подробной информацией
    const handleCardClick = (procedure: any) => {
        setSelectedProcedure(procedure);
        setModalVisible(true);
    };

    // Функция для закрытия модального окна
    const handleModalClose = () => {
        setModalVisible(false);
    };

    // Base64 закодированный DejaVuSans шрифт
    const dejavuSansBase64 = 'data:font/truetype;base64,<your-base64-encoded-font>';

    // Функция для скачивания результатов в PDF формате
    const handleDownloadPDF = () => {
        
    };

    return (
        <div>
            <Header/>
            <div className="container mx-auto py-8">
                <div className="px-2">
                    <Card title={t('Results.patientInfo')} className="mb-6">
                        <div className="grid grid-cols-2 gap-x-4">
                            <div>
                                <a className="text-gray-600">{t('Results.firstName')}:</a><br/>
                                <a className="font-semibold">{patientData.firstName}</a>
                            </div>
                            <div>
                                <a className="text-gray-600">{t('Results.lastName')}:</a><br/>
                                <a className="font-semibold">{patientData.lastName}</a>
                            </div>
                            <div>
                                <a className="text-gray-600">{t('Results.birthDate')}:</a><br/>
                                <a className="font-semibold">{patientData.birthDate}</a>
                            </div>
                            <div>
                                <a className="text-gray-600">{t('Results.phoneNumber')}:</a><br/>
                                <a className="font-semibold">{patientData.phoneNumber}</a>
                            </div>
                        </div>
                    </Card>
                </div>
                <h1 className="text-3xl ml-3 mb-4">{t('Results.title')}</h1>
                <div className="grid grid-cols-1 mb-10 px-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {proceduresData.map((procedure) => (
                        <Card key={procedure.id} onClick={() => handleCardClick(procedure)}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-lg"><b>{procedure.name}</b></p>
                                    <a><b>{t('Results.date')}</b>: {procedure.date}</a><br/>
                                    <a><b>{t('Results.time')}</b>: {procedure.time}</a>
                                </div>
                                <div className="py-5">
                                    <Button>{t('Results.open')}</Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer/>
            <Modal
                title={selectedProcedure ? selectedProcedure.name : ''}
                visible={modalVisible}
                onCancel={handleModalClose}
                footer={[
                    <Button key="cancel" onClick={handleModalClose}>{t('Results.close')}</Button>,
                    <Button key="download" type="default" onClick={handleDownloadPDF}>{t('Results.download')}</Button>,
                ]}
            >
                {selectedProcedure && (
                    <Descriptions bordered column={1}>
                        <Descriptions.Item label={t('Results.date')}>{selectedProcedure.date}</Descriptions.Item>
                        <Descriptions.Item label={t('Results.time')}>{selectedProcedure.time}</Descriptions.Item>
                        <Descriptions.Item label={t('Results.conclusion')}>{selectedProcedure.conclusion}</Descriptions.Item>
                    </Descriptions>
                )}
            </Modal>
        </div>
    );
};

export default Results;
