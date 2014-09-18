
$('document').ready(function(){

	var imageUrl = (Math.floor(Math.random()* 9)).toString()
	$('body').css('background-image', 'url(public/images/' + imageUrl + '.jpg)');
	$.get("http://freegeoip.net/json/", function(data){
		var lat = data.latitude
		var lon = data.longitude
		var country = data.country_name
		$.get("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon, function(data){
			var city = data.name
			$(".city").text(city)
			$(".country").text(country)
			var condition = data.weather[0].description
			$(".condition").text(condition)
			var temperature = Math.round(data.main.temp - 273.15)
			$(".temperature").text(temperature)
			$("<a> °C</a>").appendTo(".temperature")
			var w_icon = data.weather[0].icon
			console.log(w_icon)
			$("<img src='http://openweathermap.org/img/w/" + w_icon + ".png' >" ).prependTo(".icon-container")
		});	
	$('myOjbect').css('background-image', 'url(' + imageUrl + ')');
	});





});