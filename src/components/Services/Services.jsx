import React from "react";
import './Services.css'
const Services = () => {
    return (
        <div className="services">
            <div className="header">
                <h1>Полезные сервисы</h1>
            </div>
            <div className="service_btns">
                <div className="first">
                    <a className="service_content" href="/">
                        <div className="text">
                            <h3>Донорство</h3>
                            <p>Как записаться на донацию крови, подать заявку в регистр доноров костного мозга и почему это безопасно</p>
                        </div>
                        <img className="donor" src="../../icon/donation_icon.svg" alt="Иконка донорства" />
                    </a>
                </div>
                <div className="other">
                    <a className="other_content" href="/">
                        <img src="../../icon/decide_together_app_blu_digitale.svg" alt="Иконка донорства" />
                        <div className="text">
                            <h3>«Госуслуги Решаем вместе»</h3>
                            <p>Задайте вопрос, подайте жалобу, внесите предложение</p>
                        </div>
                    </a>
                </div>
                <div className="other">
                    <a className="other_content" href="/">
                        <img src="../../icon/loudspeaker.svg" alt="Иконка донорства" />
                        <div className="text">
                            <h3>Общественные голосования</h3>
                            <p>Участвуйте в жизни региона: голосуйте, делитесь мнением</p>
                        </div>
                    </a>
                </div>
                <div className="other">
                    <a className="other_content" href="/">
                        <img src="../../icon/hand_braille_blu_digitale.svg" alt="Иконка донорства" />
                        <div className="text">
                            <h3>Людям с инвалидностью</h3>
                            <p>Справки, обращения, льготы, услуги для реабилитации</p>
                        </div>
                    </a>
                </div>
                <div className="other">
                    <a className="other_content" href="/">
                        <img src="../../icon/auto_app_blu_digitale.svg" alt="Иконка донорства" />
                        <div className="text">
                            <h3>«Госуслуги Авто»</h3>
                            <p>Электронные документы и сервисы для автовладельцев</p>
                        </div>
                    </a>
                </div>
                <div className="other">
                    <a className="other_content" href="/">
                        <img src="../../icon/child_blu_digitale.svg" alt="Иконка донорства" />
                        <div className="text">
                            <h3>Рождение ребёнка</h3>
                            <p>Первые документы, детский сад, пособия и другие услуги</p>
                        </div>
                    </a>
                </div>
                <div className="other">
                    <a className="other_content_final" href="/">
                        <div className="back">
                            <img src="../../icon/ruble.svg" alt="Иконка донорства" />
                        </div>
                        <div className="text_final">
                            <p>Оплата штрафов и госпошлин</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Services