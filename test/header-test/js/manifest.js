$(document).ready(function () {
  $('.unreg_block').on('click', function () {
    BX24.callMethod(
      'landing.repo.unregister',
      {
        code: 'twinpx.maps',
      },
      function (result) {
        if (result.error()) console.error(result.error());
        else console.log('Removed');
        console.info(result.data());
      }
    );
  });

  $('.reg_block').on('click', function (e) {
    e.preventDefault();
    BX24.callMethod(
      'landing.repo.register',
      {
        code: 'twinpx.maps',
        fields: {
          NAME: 'Карта Яндекс',
          DESCRIPTION: 'Карта с вкладками',
          SECTIONS: 'cover,about,other',
          CONTENT: `
        <div class="b-map">
        <div class="b-map__nav">
          <div class="b-map__nav-item i-active tabs-card tabs-label">Детские сады</div>
          <div class="b-map__nav-item tabs-card tabs-label">Музеи</div>
        </div>
        <div id="yMap" class="data-number"></div>
      </div>
      `,
        },
        manifest: {
          nodes: {
            '.tabs-label': {
              name: 'Имя вкладки',
              type: 'text',
            },
          },
          cards: {
            '.tabs-card': {
              name: 'Вкладка',
              additional: {
                attrs: [
                  {
                    name: 'Координаты',
                    type: 'text',
                    attribute: 'data-pointer',
                  },
                ],
              },
            },
          },
          attrs: {
            '.data-number': {
              name: 'Центр карты',
              attribute: 'data-map-center',
              type: 'text',
            },
          },
          assets: {
            css: ['https://bitrix24.2px.ru/maps_custom/css/style.css'],
            js: ['https://bitrix24.2px.ru/maps_custom/js/script.js'],
          },
        },
      },
      function (result) {
        if (result.error()) console.error(result.error());
        else console.log('Added');
        console.info(result.data());
      }
    );
  });

  //список сайтов24
  /*BX24.callMethod(
  'landing.site.getList',
  {
      params: {
          select: [
              'ID', 'TITLE', 'DOMAIN.DOMAIN'
          ],
          order: {
              ID: 'DESC'
          }
      }
  },
  function(result)
  {
      if(result.error())
      {
          console.error(result.error());
      }
      else
      {
          console.info(result.data());
      }
  }
);*/

  /*BX24.callMethod(
  'landing.block.cloneCard',
  {
      lid: 14,
      selector: '.nav-edit@0'
  },
  function(result)
  {
      if(result.error())
      {
          console.error(result.error());
      }
      else
      {
          console.info(result.data());
      }
  }
);*/
});
