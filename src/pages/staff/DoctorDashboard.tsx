import React, { useState } from 'react';
import {Button, Card, Modal, Space, Table, TableProps} from "antd";
import moment from "moment/moment";

interface DataType {
    key: React.Key;
    name: string;
    surname: string;
    bdate: string;
    pnumber: string;
    procedure: string;
    appointment_time: string;
}

const DoctorDashboard: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState<DataType | null>(null);

    const handleOpenModal = (record: DataType) => {
        setSelectedPatient(record);
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setSelectedPatient(null);
        setModalVisible(false);
    };

    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Фамилия',
            dataIndex: 'surname',
            key: 'surname',
        },
        {
            title: 'Дата рождения',
            dataIndex: 'bdate',
            key: 'bdate',
        },
        {
            title: 'Номер телефона',
            dataIndex: 'pnumber',
            key: 'pnumber',
        },
        {
            title: 'Процедура',
            dataIndex: 'procedure',
            key: 'procedure',
        },
        {
            title: 'Дата и время',
            dataIndex: 'appointment_time',
            key: 'appointment_time',
            sorter: {
                compare: (a, b) => moment(a.appointment_time, 'DD.MM.YYYY HH:mm').unix() - moment(b.appointment_time, 'DD.MM.YYYY HH:mm').unix(),
            },
        },
        {
            title: 'Действия',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button type="link" onClick={() => handleOpenModal(record)}>Открыть карту пациента</Button>
                </Space>
            ),
        },
    ];

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const data: DataType[] = [
        {
            key: '1',
            name: 'John',
            surname: 'Brown',
            bdate: '22.07.2001',
            pnumber: '+998777777777',
            procedure: 'Процедура 1',
            appointment_time: '01.04.2024 10:00',
        },
        {
            key: '2',
            name: 'John',
            surname: 'Brown',
            bdate: '22.07.2001',
            pnumber: '+998777777777',
            procedure: 'Процедура 2',
            appointment_time: '01.04.2024 10:30',
        },
        {
            key: '3',
            name: 'John',
            surname: 'Brown',
            bdate: '22.07.2001',
            pnumber: '+998777777777',
            procedure: 'Процедура 3',
            appointment_time: '01.04.2024 11:00'
        },
    ];

    //пациент
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
            id: 3,
            name: 'Процедура 3',
            date: '02.04.2024',
            time: '12:00',
            conclusion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio vestibulum, ultrices libero vel, dapibus dui. Fusce id placerat turpis, at rhoncus erat.',
        }, {
            id: 4,
            name: 'Процедура 4',
            date: '02.04.2024',
            time: '12:00',
            conclusion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio vestibulum, ultrices libero vel, dapibus dui. Fusce id placerat turpis, at rhoncus erat.',
        }, {
            id: 5,
            name: 'Процедура 5',
            date: '02.04.2024',
            time: '12:00',
            conclusion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio vestibulum, ultrices libero vel, dapibus dui. Fusce id placerat turpis, at rhoncus erat.',
        },
        // Добавьте другие процедуры по аналогии, если необходимо
    ];

    // Состояние для отображения модального окна с подробной информацией
    const [pasModalVisible, setPasModalVisible] = useState(false);
    const [selectedProcedure, setSelectedProcedure] = useState<any>(null); // Выбранная процедура

    // Функция для открытия модального окна с подробной информацией
    const handleCardClick = (procedure: any) => {
        setSelectedProcedure(procedure);
        setPasModalVisible(true);
    };

    // Функция для закрытия модального окна
    const handlePasModalClose = () => {
        setPasModalVisible(false);
    };

    // Функция для скачивания результатов в PDF формате
    const handleDownloadPDF = () => {
        // Код для скачивания PDF файла
        console.log('Downloading PDF...');
    };

    return (
        <div>
            <h2 className="mt-3 mb-3 text-2xl text-center">Панель врача</h2>
            <div className="py-4 px-4">
                <Table columns={columns} dataSource={data} onChange={onChange} />
            </div>
            <Modal
                title="Карта пациента"
                open={modalVisible}
                onCancel={handleModalClose}
                footer={null}
                width={1000}
            >
                {selectedPatient && (
                    <div className="container mx-auto py-8">
                        <div className="px-2">
                            <Card title='Пациент' className="mb-6">
                                <div className="grid grid-cols-2 gap-x-4">
                                    <div>
                                        <a className="text-gray-600">Имя:</a><br/>
                                        <a className="font-semibold">{patientData.firstName}</a>
                                    </div>
                                    <div>
                                        <a className="text-gray-600">Фамилия:</a><br/>
                                        <a className="font-semibold">{patientData.lastName}</a>
                                    </div>
                                    <div>
                                        <a className="text-gray-600">Дата рождения:</a><br/>
                                        <a className="font-semibold">{patientData.birthDate}</a>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <h1 className="text-3xl ml-3 mb-4">Пройденные процедуры</h1>
                        <div className="grid grid-cols-1 mb-10 px-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {proceduresData.map((procedure) => (
                                <Card key={procedure.id} onClick={() => handleCardClick(procedure)}>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-lg"><b>{procedure.name}</b></p>
                                            <a><b>Дата</b>: {procedure.date}</a><br/>
                                            <a><b>Время</b>: {procedure.time}</a>
                                        </div>
                                        <div className="py-5">
                                            <Button>Открыть</Button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
            </Modal>
            <Modal
                title={selectedProcedure ? selectedProcedure.name : ''}
                visible={pasModalVisible}
                onCancel={handlePasModalClose}
                footer={[
                    <Button key="cancel" danger onClick={handlePasModalClose}>Закрыть</Button>,
                    <Button key="change" className="yellow" onClick={handlePasModalClose}>Изменить</Button>,
                    <Button key="save" color="green" onClick={handlePasModalClose}>Сохранить</Button>,
                    <Button key="download" type="default" onClick={handleDownloadPDF}>Печать</Button>,
                ]}
            >
                {selectedProcedure && (
                    <div>
                        <a><b>Дата</b>: {selectedProcedure.date}</a><br/>
                        <a><b>Время</b>: {selectedProcedure.time}</a><br/>
                        <a><b>Заключение</b>: {selectedProcedure.conclusion}</a>
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default DoctorDashboard;
