$('document').ready(function(){
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

			console.log(temperature,condition,country,city)
		});	
	});
});