import React, {useState} from 'react';
import {Modal, DatePicker, TimePicker, Button} from 'antd';
import moment, {Moment} from 'moment';
import {useTranslation} from "react-i18next";

const SchedulePopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Moment | null>(null);
    const [selectedTime, setSelectedTime] = useState<Moment | null>(null);

    const handleOk = () => {
        if (selectedDate && selectedTime) {
            const formattedDate = selectedDate.format("DD.MM.YYYY");
            const formattedTime = selectedTime.format("HH:mm");
            console.log("Выбранная дата:", formattedDate);
            console.log("Выбранное время:", formattedTime);
        }
        setIsVisible(false);
    };

    const handleCancel = () => {
        setIsVisible(false);
    };

    const {t} = useTranslation();


    return (
        <div className="py-2">
            <Button onClick={() => setIsVisible(true)}>
                {t('Procedures.button')}
            </Button>
            <Modal
                width={300}
                title={t('Procedures.modal_title')}
                visible={isVisible}
                onCancel={handleCancel}
                footer={[
                    <Button key="cancel" danger onClick={handleCancel} className="float-start">{t('Procedures.cancel')}</Button>, // кнопка "Отмена"
                    <Button key="ok" color="green" onClick={handleOk}>{t('Procedures.button')}</Button>, // кнопка "OK" с переданными стилями
                ]}
            >
                <div className="content-center">
                    <div style={{marginBottom: 20}}>
                        <DatePicker
                            className="w-full"
                            onChange={(date) => setSelectedDate(date ? moment(date.valueOf()) : null)} // Преобразуем в Moment
                            format="DD.MM.YYYY"
                            placeholder={t('Procedures.date')}
                            inputReadOnly={true} // Блокирует ввод с клавиатуры
                        />
                    </div>
                    <div>
                        <TimePicker
                            className="w-full ant-btn-default"
                            onChange={(time) => setSelectedTime(time ? moment(time.valueOf()) : null)} // Преобразуем в Moment
                            format="HH:mm"
                            minuteStep={30}
                            showNow={false}
                            placeholder={t('Procedures.time')}
                            needConfirm={false}
                            inputReadOnly={true} // Блокирует ввод с клавиатуры
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default SchedulePopup;
