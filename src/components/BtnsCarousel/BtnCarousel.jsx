import React, { useEffect } from 'react';
import './BtnCarousel.css';

const BtnCarouselComponent = () => {
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
        <div className='btncarousel'>
            <div class="gallery js-flickity"
                data-flickity-options='{ "freeScroll": true, "wrapAround": true , "autoPlay":true }'>
                <div class="gallery-cell" >
                    <button>
                        <img src='../../icon/Alice.svg' alt="img" />
                        <div className="btn_text">
                            Госуслуги и Алиса
                        </div>
                    </button>
                </div>
                <div class="gallery-cell">
                    <button>
                        <img src='../../icon/actions.svg' alt="img" />
                        <div className="btn_text">
                            Служба по контракту
                        </div>
                    </button>
                </div>
                <div class="gallery-cell">
                    <button>
                        <img src='../../icon/pension.svg' alt="img" />
                        <div className="btn_text">
                            Все соцвыплати теперь в СФР
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BtnCarouselComponent;
