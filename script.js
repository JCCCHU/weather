var APIKey = "61f2f11564379daf65524554b0fe1a06";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=";
//query format: city name
var query = "";

//query format: queryUVURL + api key + &lat= + lat + &lon= + lon
var queryUVURL = "http://api.openweathermap.org/data/2.5/uvi?appid=";

console.log("hello");

// A function that would generate cards for each day of the week.
function weatherCard(day,weather,temp,humidity) {
  
}

// A function that would create a new recent search item on the 
// sidebar every time the user searched up a new city.
function newRecent(city) {

}

// A function that would execute the search. Would be called from
// clicking the search button, or clicking a recent city.
function searchCity(city) {

}

$(document).ready(function() {
  $("#search-btn").on("click", function() {
    query = $("#search-query").val();
    $.ajax({
      url: queryURL + query + "&appid=" + APIKey,
      method: "GET"
    }).then(function(response) {
      $("#city-heading").text(response.name);
      $("#temp").text("Temperature: " + response.main.temp);
      $("#humid").text("Humidity: " + response.main.humidity);
      $("#wspd").text("Wind speed: " + response.wind.speed + " mps at " + response.wind.deg + " degrees")

      $.ajax({
        url: queryUVURL + APIKey + "&lat=" + response.coord.lat + "&lon=" + response.coord.lon,
        method: "GET"
      }).then(function(response) {
        $("#UV").text(response.value);
        if (response.value < 2.5) {
          $("#UV").css({background:"green"},{color:"white"});
        } else if (response.value < 5.5) {
          $("#UV").css({background:"yellow"},{color:"white"});
        } else if (response.value < 7.5) {
          $("#UV").css({background:"orange"},{color:"black"});
        } else if (response.value < 11.5) {
          $("#UV").css({background:"red"},{color:"white"});
        } else {
          $("#UV").css({background:"violet"},{color:"white"});
        }
      })
    })



  })
})

