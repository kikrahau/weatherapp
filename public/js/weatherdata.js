var QUOTES = [{quote: "The secret of getting ahead is getting started", author: "Mark Twain"},
{quote: "The secret of getting ahead is getting started", author: "Mark Twain"},
{quote: "Keep your eyes on the stars, and your feet on the ground.", author: "Theodore Roosevelt"},
{quote: "Always do your best. What you plant now, you will harvest later.", author: "Og Mandino"},
{quote: "You are never too old to set another goal or to dream a new dream.", author: "C. S. Lewis"},
{quote: "If you can dream it, you can do it.", author: "Walt Disney"}]

$('document').ready(function(){

	var imageUrl = (Math.floor(Math.random()* 9)).toString()
	$('html').css('background', 'url(/images/' + imageUrl + '.jpg) no-repeat center center fixed');
	$(".quote").text(QUOTES[Math.floor(Math.random()* QUOTES.length)].quote)
	$('<p> - ' + QUOTES[Math.floor(Math.random()* QUOTES.length)].author + '</p>').appendTo("footer")

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
			$("<img src='http://openweathermap.org/img/w/" + w_icon + ".png' >" ).prependTo(".icon-container")
		});	
	});
});