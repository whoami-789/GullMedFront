import React, { useState } from 'react';
import {Button, Card, Form, Input, Modal, Select} from 'antd';

const { Option } = Select;

const RootDashboard: React.FC = () => {
    // Фейковые данные процедур
    const fakeProcedureData = [
        { id: 1, category: 'Category 1', name: 'Procedure 1', description: 'Description for Procedure 1', price: '100$' },
        { id: 2, category: 'Category 1', name: 'Procedure 2', description: 'Description for Procedure 2', price: '120$' },
        { id: 3, category: 'Category 2', name: 'Procedure 3', description: 'Description for Procedure 3', price: '150$' },
        { id: 4, category: 'Category 2', name: 'Procedure 4', description: 'Description for Procedure 4', price: '250$' },
        { id: 5, category: 'Category 3', name: 'Procedure 5', description: 'Description for Procedure 5', price: '200$' },
    ];

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isAddCategoryModalVisible, setAddCategoryModalVisible] = useState(false);
    const [isAddProcedureModalVisible, setAddProcedureModalVisible] = useState(false);
    const [editingProcedureId, setEditingProcedureId] = useState<number | null>(null);
    const [editingProcedurePrice, setEditingProcedurePrice] = useState<string>('');


    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
    };

    const handleAddCategory = () => {
        setAddCategoryModalVisible(true);
    };

    const handleAddProcedure = () => {
        setAddProcedureModalVisible(true);
    };

    const handleAddCategoryModalOk = (values: any) => {
        console.log('Adding category:', values.categoryName);
        setAddCategoryModalVisible(false);
    };

    const handleAddCategoryModalCancel = () => {
        setAddCategoryModalVisible(false);
    };

    const handleAddProcedureModalOk = (values: any) => {
        console.log('Adding procedure:', values);
        setAddProcedureModalVisible(false);
    };

    const handleAddProcedureModalCancel = () => {
        setAddProcedureModalVisible(false);
    };

    const handleEditPrice = (procedure: any) => {
        setEditingProcedureId(procedure.id);
        setEditingProcedurePrice(procedure.price);
    };

    const handleSavePrice = (procedure: any) => {
        // Добавьте здесь логику для сохранения изменений цены процедуры
        console.log(`Сохранение изменений цены для процедуры: ${procedure.name}, новая цена: ${editingProcedurePrice}`);
        setEditingProcedureId(null);
    };


    return (
        <div style={{padding: '20px'}}>
            <h2 className='text-center text-2xl mb-6'>Root Dashboard</h2>
            <div>
                <h3 className='mb-3'><b>Выберите категорию</b></h3>
                <Select defaultValue="Select category" style={{width: 200}} onChange={handleCategorySelect}>
                    {Array.from(new Set(fakeProcedureData.map(proc => proc.category))).map(category => (
                        <Option key={category} value={category}>{category}</Option>
                    ))}
                </Select>
            </div>
            <div style={{marginTop: '20px'}}>
                <Button onClick={handleAddCategory} style={{marginRight: '10px'}}>Добавить категорию</Button>
                <Button onClick={handleAddProcedure}>Добавить процедуру</Button>
            </div>
            {selectedCategory && (
                <div style={{marginTop: '20px'}}>
                    <h3 className='mb-3'><b>Процедуры {selectedCategory}</b></h3>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {fakeProcedureData
                            .filter(proc => proc.category === selectedCategory)
                            .map(procedure => (
                                <Card key={procedure.id} style={{width: '30%', margin: '0 10px 20px 0'}}>
                                    <p><strong>{procedure.name}</strong></p>
                                    <p>Description: {procedure.description}</p>
                                    <p>
                                        Price: {editingProcedureId === procedure.id ? (
                                        <Input
                                            style={{width: '60px'}}
                                            value={editingProcedurePrice}
                                            onChange={e => setEditingProcedurePrice(e.target.value)}
                                        />
                                    ) : (
                                        <span>{procedure.price}</span>
                                    )}
                                        {editingProcedureId === procedure.id ? (
                                            <Button type="default" size="small"
                                                    onClick={() => handleSavePrice(procedure)}>Сохранить</Button>
                                        ) : (
                                            <Button type="link" size="small"
                                                    onClick={() => handleEditPrice(procedure)}>Изменить</Button>
                                        )}
                                    </p>
                                </Card>
                            ))}
                    </div>
                </div>
            )}
            <Modal
                title="Add Category"
                visible={isAddCategoryModalVisible}
                onCancel={handleAddCategoryModalCancel}
                footer={[
                    <Button key="cancel" danger onClick={handleAddCategoryModalCancel}>Cancel</Button>,
                    <Button key="ok" onClick={handleAddCategoryModalOk}>OK</Button>
                ]}
            >
                <Form onFinish={handleAddCategoryModalOk}>
                    <Form.Item name="categoryName" label="Category Name"
                               rules={[{required: true, message: 'Please input category name!'}]}>
                        <Input/>
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title="Add Procedure"
                visible={isAddProcedureModalVisible}
                onCancel={handleAddProcedureModalCancel}
                footer={[
                    <Button key="cancel" danger onClick={handleAddProcedureModalCancel}>Cancel</Button>,
                    <Button key="ok" onClick={handleAddProcedureModalOk}>OK</Button>
                ]}
            >
                <Form onFinish={handleAddProcedureModalOk}>
                    <Form.Item name="category" label="Category"
                               rules={[{required: true, message: 'Please select category!'}]}>
                        <Select style={{width: '100%'}}>
                            {Array.from(new Set(fakeProcedureData.map(proc => proc.category))).map(category => (
                                <Option key={category} value={category}>{category}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item name="procedureName" label="Procedure Name"
                               rules={[{required: true, message: 'Please input procedure name!'}]}>
                    <Input />
                    </Form.Item>
                    <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please input procedure description!' }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Please input procedure price!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="uz" label="Uz" rules={[{ required: true, message: 'Please input procedure uz name!' }]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default RootDashboard;
