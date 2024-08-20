ymaps.ready(init);
function init()
{
	var center = $('.landing-block-card').data('center');
	// Создание карты.
	var myMap = new ymaps.Map("map", {
		center: center,
		zoom: 7
	});
}