import React from "react";
import './Footer.css'
const Footer = () =>{
    return(
        <>
        <div className="footer">
            <div className="footer_text">
                <div>
                <p>Личный кабинет</p>
                <p>Регистрация</p>
                <p>Контакты</p>
                </div>
                <div>
                    <p>Как найти услугу</p>
                    <p>Помощь</p>
                    <p>Карта центров обслуживания</p>
                </div>
                <div>
                    <p>Партнёрам</p>
                    <p>Для иностранцев</p>
                    <p><img src="../../icon/navigation.svg" alt="icon"/>Москва</p>
                </div>
            </div>
            <div className="footer_icon">
                <img src="../../icon/telegram-gray.svg" alt="icon"></img>
                <img src="../../icon/vk-gray-v2.svg" alt="icon"></img>
                <img src="../../icon/ok-gray.svg" alt="icon"></img>
                <img src="../../icon/rutube-gray.svg" alt="icon"></img>
            </div>
        </div>
        </>
    );
}

export default Footer;