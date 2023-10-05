(() => {
  const menu = document.querySelector('.twpxHeader1Menu');
  const slidemenu = document.querySelector('.twpxHeader1Slidemenu');
  const slidemenuList = slidemenu.querySelector(
    '.landing-block-node-slidemenu-list'
  );
  const slideAnchorClass = slidemenuList.querySelector(
    '.landing-block-node-slidemenu-list-item-link'
  ).className;
  const sandwich = document.querySelector('.twpxHeader1Sandwich');

  sandwich.addEventListener('click', (e) => {
    e.preventDefault();
    sandwich.classList.toggle('landing-block-node-sandwich--cross');

    slidemenu.classList.toggle('landing-block-node-slidemenu--show');

    menu.classList.toggle('opacity-0');

    //copy menu items
    slidemenuList.innerHTML = '';
    menu
      .querySelectorAll('.landing-block-node-menu-list-item-link')
      .forEach((anch) => {
        const newAnch = anch.cloneNode(true);
        newAnch.className = slideAnchorClass;
        newAnch.removeAttribute('title');
        newAnch.removeAttribute('data-selector');
        newAnch.addEventListener('click', (e) => {
          e.preventDefault();
          anch.click();
        });
        const span = document.createElement('span');
        span.className =
          'landing-block-node-slidemenu-list-item d-block g-mb-14';
        span.appendChild(newAnch);
        slidemenuList.appendChild(span);
      });
  });

  slidemenu.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
      closetSlidemenu();
      return true;
    }
  });

  function closetSlidemenu() {
    sandwich.classList.remove('landing-block-node-sandwich--cross');

    slidemenu.classList.remove('landing-block-node-slidemenu--show');

    menu.classList.remove('opacity-0');
  }
})();
