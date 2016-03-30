var popupButton = $(".popup-action"),
		popup = $(".modal-content"),
		popupClose = $(".modal-content-close"),//для обратной формы и карты - обработка закрытия одинаковая
		mapButton = $(".map-action"),
		map = $(".modal-map");

popupButton.click(function () {
	event.preventDefault();
	popup.css("display", "block");
	popup.find("#input-name").focus();
});

popupClose.click(function () {
	event.preventDefault();
	popup.css("display", "none");
	map.css("display", "none");
})

mapButton.click(function () {
	event.preventDefault();
	map.css("display", "block");
});



