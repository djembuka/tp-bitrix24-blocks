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

    const mode = sandwich.classList.contains(
      'landing-block-node-sandwich--cross'
    )
      ? 'open'
      : 'closed';

    sandwich.classList.toggle('landing-block-node-sandwich--cross');

    if (mode === 'closed') {
      slidemenu.classList.toggle('landing-block-node-slidemenu--block');

      setTimeout(() => {
        slidemenu.classList.toggle('landing-block-node-slidemenu--show');
      }, 100);
    } else if (mode === 'open') {
      slidemenu.classList.remove('landing-block-node-slidemenu--show');

      setTimeout(() => {
        slidemenu.classList.remove('landing-block-node-slidemenu--block');
      }, 300);
    }

    menu.classList.toggle('opacity-0');

    //copy menu items
    /*slidemenuList.innerHTML = '';
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
      });*/
  });

  slidemenuList.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
      closeSlidemenu();
      return true;
    }
  });

  slidemenu.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
      closeSlidemenu();
      return true;
    }
  });

  function closeSlidemenu() {
    sandwich.classList.remove('landing-block-node-sandwich--cross');

    slidemenu.classList.remove('landing-block-node-slidemenu--show');

    setTimeout(() => {
      slidemenu.classList.remove('landing-block-node-slidemenu--block');
    }, 1000);

    menu.classList.remove('opacity-0');
  }
})();
