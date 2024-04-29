import React from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Login: React.FC = () => {
    const {t} = useTranslation();

    const onFinish = (values: any) => {
        console.log('Received values:', values);
    };

    return (
        <div>
            <Header/>
            <div className="container mx-auto py-8 login-content" style={{width: 400}}>
                <h2 className="text-xl mb-4">{t('Login.h1')}</h2>
                <Form
                    name="login_form"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    wrapperCol={{span: 24}}
                >
                    <Form.Item
                        label={t('Login.pnumber')}
                        name="pnumber"
                        rules={[{required: true, message: t('Error-messages.pnumber')}]}
                    >
                        <Input
                            addonBefore="+998"
                            maxLength={14}
                            minLength={7}/>
                    </Form.Item>

                    <Form.Item
                        label={t('Login.password')}
                        name="password"
                        rules={[{required: true, message: t('Error-messages.password')}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>{t('Login.remember')}</Checkbox>
                    </Form.Item>

                    <Form.Item className="text-center">
                        <Button type="default" htmlType="submit">
                            {t('Login.login')}
                        </Button>
                    </Form.Item>
                </Form>
                <div className="register-tip">
                    {t('Login.register-tip')}{' '}<br/>
                    <Link to="/register" className="text-blue-400">{t('Login.register')}</Link>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;
