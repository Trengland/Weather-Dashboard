var searchButton = document.querySelector(".search-button")


function GetInfo() {
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");

fetch("https://api.openweathermap.org/data/2.5/weather?units=imperial&q="+ newName.value + "&limit=5&appid=fdd2027bdc0107a47dfd6036ffb932e9")
    .then(response => response.json())
    .then(data => {

console.log(data)
    var city = data.name
    var lat = data.coord.lat
    var lon = data.coord.lon
    cityName.textContent = city
    document.querySelector("#todaysdate").textContent = moment().format("MM/DD/YYYY")
    document.querySelector("#weathericon").setAttribute("src","https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png")
    document.querySelector("#currentTemp").textContent = "Temperature: " + data.main.temp + "°F"
    document.querySelector("#currentWind").textContent = "Wind: " + data.wind.speed + "MPH"
    document.querySelector("#currentHumidity").textContent = "Humidity: " + data.main.humidity + "%"

    
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=fdd2027bdc0107a47dfd6036ffb932e9")
    .then(response => response.json())
    .then((data) => {

console.log(data)



for (let i = 0; i < data.list.length; i += 8 ) {
    //this should give us one hour forecast for each of the five days
    console.log(data.list[i])
    document.getElementById('day'+(i+2))
  }

})
})

.catch(err => alert("Something went wrong. Please Try again."))
}


searchButton.addEventListener("click", GetInfo)



// // function to autopopulate results on initial page load?
// function DefaultScreen() {
//     document.getElementById("cityInput").defaultValue = "San Diego";
//     GetInfo();
// }

// var d = new Date();
// var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// function checkDay(day) {
//     if (day + d.getDay() > 6) {
//         return day + d.getDay() - 7;
//     }
//     else {
//         return day + d.getDay();
//     }
// }





// // function to show search history?
// function searchHistory() {
//     var recentSearch = []
//     recentSearch.push($('#cityInput').val());

//     $.each(recentSearch, function (index, value) {
//         const button = document.createElement("button");
//         button.innerHTML = value;
//         document.getElementById("searchHistory").appendChild(button);
//     })
// }

