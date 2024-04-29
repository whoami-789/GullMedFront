import React, {useState} from 'react';
import {Modal, DatePicker, TimePicker, Button} from 'antd';
import moment, {Moment} from 'moment';
import {useTranslation} from "react-i18next";

const SchedulePopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedDateTime, setSelectedDateTime] = useState<Moment | null>(null);

    const handleOk = () => {
        if (selectedDateTime) {
            const formattedDateTime = selectedDateTime.format("DD.MM.YYYY HH:mm");
            console.log("Выбранная дата:", formattedDateTime);
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
                            showTime
                            onChange={(date) => setSelectedDateTime(date ? moment(date.valueOf()) : null)} // Преобразуем в Moment
                            format="DD.MM.YYYY HH:mm"
                            placeholder={t('Procedures.date-time')}
                            inputReadOnly={true} // Блокирует ввод с клавиатуры
                            needConfirm={false}
                            minuteStep={30}
                            showNow={false}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default SchedulePopup;
