import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { List, Card, Button } from 'antd';
import {useTranslation} from "react-i18next";
import SchedulePopup from "../components/SchedulePopup";

const Procedures: React.FC = () => {
    const { t } = useTranslation();
    // Данные для списка процедур
    const proceduresData = [
        {
            id: 1,
            category: 'Категория 1',
            name: 'Процедура 1',
            description: 'Описание процедуры 1',
            price: '100$',
        },
        {
            id: 2,
            category: 'Категория 1',
            name: 'Процедура 2',
            description: 'Описание процедуры 2',
            price: '150$',
        },
        {
            id: 3,
            category: 'Категория 2',
            name: 'Процедура 3',
            description: 'Описание процедуры 3',
            price: '200$',
        },
        {
            id: 4,
            category: 'Категория 2',
            name: 'Процедура 4',
            description: 'Описание процедуры 4',
            price: '250$',
        },{
            id: 3,
            category: 'Категория 2',
            name: 'Процедура 3',
            description: 'Описание процедуры 3',
            price: '200$',
        },
        {
            id: 4,
            category: 'Категория 2',
            name: 'Процедура 4',
            description: 'Описание процедуры 4',
            price: '250$',
        },{
            id: 3,
            category: 'Категория 2',
            name: 'Процедура 3',
            description: 'Описание процедуры 3',
            price: '200$',
        },
        {
            id: 4,
            category: 'Категория 2',
            name: 'Процедура 4',
            description: 'Описание процедуры 4',
            price: '250$',
        },{
            id: 3,
            category: 'Категория 2',
            name: 'Процедура 3',
            description: 'Описание процедуры 3',
            price: '200$',
        },
        {
            id: 4,
            category: 'Категория 2',
            name: 'Процедура 4',
            description: 'Описание процедуры 4',
            price: '250$',
        },{
            id: 3,
            category: 'Категория 2',
            name: 'Процедура 3',
            description: 'Описание процедуры 3',
            price: '200$',
        },
        {
            id: 4,
            category: 'Категория 2',
            name: 'Процедура 4',
            description: 'Описание процедуры 4',
            price: '250$',
        },{
            id: 3,
            category: 'Категория 2',
            name: 'Процедура 3',
            description: 'Описание процедуры 3',
            price: '200$',
        },
        {
            id: 4,
            category: 'Категория 2',
            name: 'Процедура 4',
            description: 'Описание процедуры 4',
            price: '250$',
        },{
            id: 3,
            category: 'Категория 2',
            name: 'Процедура 3',
            description: 'Описание процедуры 3',
            price: '200$',
        },
        {
            id: 4,
            category: 'Категория 2',
            name: 'Процедура 4',
            description: 'Описание процедуры 4',
            price: '250$',
        },
        // Добавьте другие процедуры и категории по аналогии, если необходимо
    ];

    // Группировка процедур по категориям
    const groupedProcedures = proceduresData.reduce((acc, procedure) => {
        if (!acc[procedure.category]) {
            acc[procedure.category] = [];
        }
        acc[procedure.category].push(procedure);
        return acc;
    }, {} as { [key: string]: typeof proceduresData });

    return (
        <div>
            <Header />
            <div className="container mx-auto py-8 pb-28">
                {Object.entries(groupedProcedures).map(([category, procedures]) => (
                    <div key={category} className="mb-8 px-2 py-7">
                        <h2 className="text-2xl mb-4">{category}</h2>
                        <List
                            grid={{ gutter: 16, column: 1 }}
                            dataSource={procedures}
                            renderItem={(procedure) => (
                                <List.Item>
                                    <Card style={{height: 100}}>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-xl">{procedure.name}</p>
                                                <p className="text-sm">Цена: {procedure.price}</p>
                                            </div>
                                            <div>
                                                <SchedulePopup/>
                                            </div>
                                        </div>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default Procedures;
