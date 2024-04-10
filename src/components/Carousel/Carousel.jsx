import React, { useEffect } from 'react';
import './Carousel.css';

const CarouselComponent = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        //style={{backgroundImage:'url(../../icon/become_volunteer.svg)'}}
        <div>
            <div class="gallery js-flickity"
                data-flickity-options='{ "freeScroll": true, "wrapAround": true , "autoPlay":true }'>
                <div class="gallery-cell" style={{backgroundImage:'url(../../icon/become_volunteer.svg)'}} >
                    <h6>Станьте волонтёром в новых регионах</h6>
                </div>
                <div class="gallery-cell" style={{backgroundImage:'url(../../icon/Free_training_for_programmers.svg)'}}>
                    <h6>Бесплатные курсы для будущих программистов</h6>
                </div>
                <div class="gallery-cell" style={{backgroundImage:'url(../../icon/Report_problems_with_payments_mobile.svg)'}}>
                    <h6>Сообщите о проблемах с выплатами</h6>
                </div>
                <div class="gallery-cell" style={{backgroundImage:'url(../../icon/IT_mortgage_mobile.svg)'}}>
                    <h6>Новые условия<br></br>ИТ-ипотеки</h6>
                </div>
                <div class="gallery-cell" style={{backgroundImage:'url(../../icon/Fan_card.svg)'}}>
                    <h6>Карта болельщика</h6>
                </div>
                <div class="gallery-cell" style={{backgroundImage:'url(../../icon/Tax_notice.svg)'}}>
                    <h6>Налоговые уведомления</h6>
                </div>
                <div class="gallery-cell" style={{backgroundImage:'url(../../icon/ZKH_in_application.svg)'}}>
                    <h6>«Госуслуги Дом»: всё ЖКХ в одном приложении</h6>
                </div>
                <div class="gallery-cell" style={{backgroundImage:'url(../../icon/gu_new_regions.svg)'}}>
                    <h6>Госуслуги для новых регионов</h6>
                </div>
                <div class="gallery-cell" style={{backgroundImage:'url(../../icon/Millitary_service_contract.svg)'}}>
                    <h6>Военная служба по контракту</h6>
                </div>
            </div>
        </div>
    );
};

export default CarouselComponent;
