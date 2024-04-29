import React, {useState} from 'react';
import {Button, DatePicker, Form, Input, Modal, Select, Space, Table, TableProps} from "antd";
import moment from "moment";

interface DataType {
    key: React.Key;
    name: string;
    surname: string;
    bdate: string;
    pnumber: string;
    procedure: string;
    appointment_time: string;
    price: number;
}

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
        title: 'Цена',
        dataIndex: 'price',
        key: 'price',
    },

    {
        title: 'Действия',
        key: 'action',
        render: (_) => (
            <Space size="middle">
                <a className="text-yellow-600">Изменить</a>
                <a className="text-red-500">Удалить</a>
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
        price: 10000,
    },
    {
        key: '2',
        name: 'John',
        surname: 'Brown',
        bdate: '22.07.2001',
        pnumber: '+998777777777',
        procedure: 'Процедура 2',
        appointment_time: '01.04.2024 10:30',
        price: 10000,
    },
    {
        key: '3',
        name: 'John',
        surname: 'Brown',
        bdate: '22.07.2001',
        pnumber: '+998777777777',
        procedure: 'Процедура 3',
        appointment_time: '01.04.2024 11:00',
        price: 10000,
    },

];

const { Option } = Select;



const AdminDashboard: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [form] = Form.useForm();

    const handleAddPatient = () => {
        form.resetFields(); // Сбросить значения формы
        setModalVisible(true);
    };

    const handleModalCancel = () => {
        setModalVisible(false);
    };

    const onFinish = (values: any) => {
        const formattedValues = {
            patient: {
                name: values.name,
                surname: values.surname,
                birthDate: moment(values.bdate).format('DD.MM.YYYY'),
                phoneNumber: values.pnumber,
            },
            procedure: values.procedure,
            dateTime: moment(values.appointment_time).format('DD.MM.YYYY HH:mm'),
            role: 'unauthorized',
        };
        console.log(JSON.stringify(formattedValues, null, 4)); // Улучшенный вывод значений полей в консоль в формате JSON
        setModalVisible(false);
    };


    return (
        <div>
            <h2 className="mt-3 mb-3 text-2xl text-center">Админ панель</h2>
            <div className="py-4 px-4">
                <div style={{ marginBottom: 16 }}>
                    <Button type="default" onClick={handleAddPatient}>Добавить</Button>
                </div>
                <Table columns={columns} dataSource={data} onChange={onChange} />
            </div>
            <Modal
                title="Добавить пациента"
                open={modalVisible}
                onCancel={handleModalCancel}
                footer={null}
            >
                <Form
                    form={form}
                    name="add_patient_form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Имя"
                        name="name"
                        rules={[{ required: true, message: 'Пожалуйста, введите имя' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Фамилия"
                        name="surname"
                        rules={[{ required: true, message: 'Пожалуйста, введите фамилию' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Дата рождения"
                        name="bdate"
                        rules={[{ required: true, message: 'Пожалуйста, введите дату рождения' }]}
                    >
                        <DatePicker format="DD.MM.YYYY" />
                    </Form.Item>
                    <Form.Item
                        label="Номер телефона"
                        name="pnumber"
                        rules={[{ required: true, message: 'Пожалуйста, введите номер телефона' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Процедура"
                        name="procedure"
                        rules={[{ required: true, message: 'Пожалуйста, выберите процедуру' }]}
                    >
                        <Select>
                            <Option value="Процедура 1">Процедура 1</Option>
                            <Option value="Процедура 2">Процедура 2</Option>
                            <Option value="Процедура 3">Процедура 3</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Дата и время"
                        name="appointment_time"
                        rules={[{ required: true, message: 'Пожалуйста, введите дату и время' }]}
                    >
                        <DatePicker
                            showTime
                            format="DD.MM.YYYY HH:mm"
                            inputReadOnly={true} // Блокирует ввод с клавиатуры
                            needConfirm={false}
                            minuteStep={30}
                            showNow={false}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="default" htmlType="submit">Добавить</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default AdminDashboard;

