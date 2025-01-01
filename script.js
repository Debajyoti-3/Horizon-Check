
const apiKey ='df57236f22859d09485fff8c7ac05caa';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
   
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    function colorChange(){
        if(response.status == 404){
            document.querySelector(".card").style.background = "linear-gradient(135deg,rgb(208, 199, 68),rgb(216, 67, 67))";
        }
        else{
            document.querySelector(".card").style.background =  "linear-gradient(135deg, #00feba, #5b548a);";
        }
    }
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        colorChange();
        // document.querySelector(".card").style.background =  "linear-gradient(135deg,rgb(208, 199, 68),rgb(216, 67, 67))";
    }
    else{
        let data = await response.json()

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        colorChange();
        // document.querySelector(".card").style.background =  "linear-gradient(135deg, #00feba, #5b548a);";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images_clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png"
    }

    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display ="none";
}
}   

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
