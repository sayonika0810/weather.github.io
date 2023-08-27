const apiKey="b074c787e99811ec6635185d07047449";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector('.search input');
const searchbtn=document.querySelector('.search button');
const weatherIcon=document.querySelector('.weather-icon');

async function checkWeather(city){
    const response=await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data=await response.json();

    console.log(data);

    if(response.status==404){
        document.querySelector('.error').style.display="block";
        document.querySelector('.weather').style.display="none";
    }
    else{
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML=data.main.temp + "°C";
        document.querySelector('.humidity').innerHTML=data.main.humidity +"%";
        document.querySelector('.wind').innerHTML=data.wind.speed + "km/h";

        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="clear.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="mist.png";
        }
        else if(data.weather[0].main=="rain"){
            weatherIcon.src="rain.png";
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src="snow.png";
        }
        else if(data.weather[0].main=="Haze"){
            weatherIcon.src="haze.jpg";
        }
        else if(data.weather[0].main=="Thunderstorm"){
            weatherIcon.src="thunder.jpg";
        }

        document.querySelector('.weather').style.display="block";
        document.querySelector('.error').style.display="none";
    }

    
}

searchbtn.addEventListener(
   "click",()=>{
        checkWeather(searchbox.value);
    }
)
