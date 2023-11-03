const apiKey = "5ae5eacdd6489ed78c15b47d83a6bf8f"
const url = "https://api.openweathermap.org/data/2.5/weather?"

const CityName = document.getElementById("input-city");
const Enter = document.getElementById("search");

const city = document.querySelector('.CityName');
const image = document.querySelector('.image');
const temp = document.querySelector('.temperature');
const description = document.querySelector('.description');
const WindSpeed = document.querySelector('.WindSpeed');
const Humidity = document.querySelector('.Humidity');


// https://api.openweathermap.org/data/2.5/weather?q=London&APPID=5ae5eacdd6489ed78c15b47d83a6bf8f
async function checkWeather(){
    const response = await fetch (url + "q="+CityName.value+"&APPID="+apiKey+"&units=metric");
    var data = await response.json();
    console.log(data)

    city.innerHTML = data.name;
    description.innerHTML = data.weather[0].description;
    temp.innerHTML = data.main.temp+"°C";
    WindSpeed.innerHTML = data.wind.speed+" Km/hr";
    Humidity.innerHTML = data.main.humidity+"%";

    if (data.weather[0].main === "Clouds") {
        image.src = "Assets/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        image.src = "Assets/clear.png";
    } else if (data.weather[0].main === "Rain") {
        image.src = "Assets/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        image.src = "Assets/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        image.src = "Assets/mist.png";
    }
    
    document.querySelector('.weather').style.display = "block";
}




Enter.addEventListener("click",()=>{
    checkWeather();
})
