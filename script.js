const apiKey = "65f64364d26fdec690de1adf305a4264"
const url = "https://api.openweathermap.org/data/2.5/weather?"

const CityName = document.getElementById("input-city").value;
const Enter = document.getElementById("search");


async function checkWeather(){
    const response = await fetch (url + "q=${"+CityName.value+"}&appid=${"+apiKey+"}")
    console.log(response)
}




Enter.addEventListener("click",()=>{
    checkWeather();
})
