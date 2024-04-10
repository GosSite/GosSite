import React from 'react';
import './Updater.css';

const UpdateBanner = ({ onClose }) => {
  const isAndroid = () => {
    return /Android/i.test(navigator.userAgent);
  };
  return (
    <div id="demo-modal" class="modal">
    <div class="modal__content">
        <h1>Доступно обновления мобильного приложения!</h1>
        <p>
            Нажмите кнопку обновить, чтобы установить последнее обновление
        </p>

        <div class="modal__footer">
        {isAndroid() ? (
            <a href="../../../mobileBuild/GosUslugi.apk" download="GosUslugi.apk">ОБНОВИТЬ</a>
          ) : (
            <a href="../../../mobileBuild/GosUslugi.ipa" download="GosUslugi.ipa">ОБНОВИТЬ</a>
          )}
        </div>
    </div>
</div>
  );
};

export default UpdateBanner;
