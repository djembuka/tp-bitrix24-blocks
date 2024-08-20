window.addEventListener('load', () => {
  document
    .querySelectorAll('.landing-block-node-consent-popup')
    .forEach((popup) => {
      if (
        window.localStorage &&
        localStorage.getItem('twpx-consent-popup-allowed') !== 'Y'
      ) {
        setTimeout(function () {
          popup.classList.add('landing-block-node-consent-popup--show');
        }, 200);

        var cookieAlertIntervalId = setInterval(function () {
          popup.classList.add('animate__animated', 'animate__shakeX');
          setTimeout(function () {
            popup.classList.remove('animate__shakeX');
          }, 1000);
        }, 4000);

        //click button
        popup
          .querySelector('.landing-block-node-consent-popup-button')
          .addEventListener('click', function (e) {
            e.preventDefault();
            //set cookie
            localStorage.setItem('twpx-consent-popup-allowed', 'Y');
            //hide alert
            popup.classList.add('landing-block-node-consent-popup--hide');
            //remove alert from the page
            setTimeout(function () {
              popup.remove();
            }, 500);
            //clear interval
            clearInterval(cookieAlertIntervalId);
          });
      }
    });
});
