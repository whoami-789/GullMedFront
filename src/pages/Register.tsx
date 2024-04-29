// Register.tsx
import React from 'react';
import {Form, Input, Button, DatePicker} from 'antd';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Register: React.FC = () => {
    const {t} = useTranslation();

    const onFinish = (values: any) => {
        console.log('Received values:', values);
    };

    return (
        <div>
            <Header/>
            <div className="container mx-auto py-8 register-content" style={{width: 400}}>
                <h2 className="text-xl mb-4">{t('Register.h1')}</h2>
                <Form
                    name="register_form"
                    onFinish={onFinish}
                    wrapperCol={{span: 24}}
                >

                    <Form.Item
                        label={t('Register.name')}
                        name="firstName"
                        rules={[{required: true, message: t('Error-messages.name')}]}
                    >
                        <Input/>
                    </Form.Item>


                    <Form.Item
                        label={t('Register.surname')}
                        name="lastName"
                        rules={[{required: true, message: t('Error-messages.surname')}]}
                    >
                        <Input/>
                    </Form.Item>


                    <Form.Item
                        label={t('Register.bdate')}
                        name="bdate"
                        rules={[{required: true, message: t('Error-messages.bdate')}]}
                    >
                        <DatePicker
                            className="w-full"
                            inputReadOnly={true}/>
                    </Form.Item>


                    <Form.Item
                        label={t('Register.pnumber')}
                        name="phoneNumber"
                        rules={[{required: true, message: t('Error-messages.pnumber')}]}
                    >
                        <Input
                            addonBefore="+998"
                            maxLength={14}
                            minLength={7}/>
                    </Form.Item>

                    <Form.Item
                        label={t('Register.password')}
                        name="password"
                        rules={[{required: true, message: t('Error-messages.password')}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        label={t('Register.conf-password')}
                        name="confirm"
                        dependencies={['password']}
                        rules={[
                            {required: true, message: t('Error-messages.conf-password')},
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error(t('Error-messages.match-password')));
                                },
                            }),
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item className="text-center">
                        <Button type="default" htmlType="submit">
                            {t('Register.register')}
                        </Button>
                    </Form.Item>
                </Form>
                <div className="login-tip mb-8">
                    {t('Register.login-tip')}{' '} <br/>
                    <Link to="/login" className="text-blue-400">{t('Register.login')}</Link>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Register;
