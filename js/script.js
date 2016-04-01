var popupButton = $(".popup-action"),
		popup = $(".modal-content"),
		popupClose = $(".modal-content-close"),//для обратной формы и карты - обработка закрытия одинаковая
		mapButton = $(".map-action"),
		map = $(".modal-map"),
		featuresButton = $(".features-button"),
		featuresRight = $(".features-right");

popupButton.click(function () {
	event.preventDefault();
	popup.css("display", "block");
	popup.find("#input-name").focus();
});

popupClose.click(function () {//для обратной формы и карты - обработка закрытия одинаковая
	event.preventDefault();
	popup.css("display", "none");
	map.css("display", "none");
})

mapButton.click(function () {
	event.preventDefault();
	map.css("display", "block");
});

function numberActiveFeature () { //определение номера элемента массива при клике
	for(var i = 0; i < featuresButton.length; i++) {
		if($(featuresButton[i]).hasClass("features-button-active")) return i;		
	}
}

featuresButton.click(function () { //переключение преимуществ
	$(".features-button-active").removeClass("features-button-active");
	$(this).addClass("features-button-active");
	var numberFeature = numberActiveFeature();
	$(".features-active").removeClass("features-active");
	$(featuresRight[numberFeature]).addClass("features-active");
});

$(".big-category-item").click(function () { //слайдер
	if($("#radio1").prop("checked")) {
		$("#radio2").prop("checked", true);
	}
	else {
		$("#radio1").prop("checked", true);
	}
});


