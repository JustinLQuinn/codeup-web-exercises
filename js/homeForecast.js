 function getHomeForcast(lngLat) {
     let queryParams = new URLSearchParams({
         APPID: OPENWEATHER_API_KEY,
         lat: 29.4252,
         lon: -98.4916,
         units: "imperial"
     });
     fetch("https://api.openweathermap.org/data/2.5/onecall?" + queryParams, {
             method: "GET"
         }
     ).then(async function (response) {
         let homeData = await response.json();
         console.log(homeData.daily);
         homeWeather(homeData.daily)
     })

     const homeCardsInfo = document.querySelector(".footer");
     function homeWeather(dailyForecasts) {
         let dts = [];
         let dayName = [];
         for (let i = 0; i < dailyForecasts.length; i++) {
             dts.push(dailyForecasts[i].dt);
             let date = (new Date(dailyForecasts[i].dt * 1000).toDateString()).split(" ");
             dayName.push(date[0]);
             console.log(dayName);
         }

         homeCardsInfo.innerHTML = `
    <div class="card footer-card">
        <div class="card-title">
            <h2>${dayName[0]}</h2>
        </div>
        <div class="card-body">
            Humidity: ${dailyForecasts[0].humidity}<br>
            Hi temp: ${parseInt(dailyForecasts[0].temp.max)}<br>
            Low temp: ${parseInt(dailyForecasts[0].temp.min)}<br>
            Feels like: ${parseInt(dailyForecasts[0].feels_like.day)}<br>
            Wind: ${parseInt(dailyForecasts[0].wind_gust)}<br>
          
        </div>
    </div>
    <div class="card footer-card">
        <div class="card-title">
            <h2>${dayName[1]}</h2>
        </div>
        <div class="card-body">
                Humidity: ${dailyForecasts[1].humidity}<br>
                Hi temp: ${parseInt(dailyForecasts[1].temp.max)}<br>
                Low temp: ${parseInt(dailyForecasts[1].temp.min)}<br>
                Feels like: ${parseInt(dailyForecasts[1].feels_like.day)}<br>
                Wind: ${parseInt(dailyForecasts[1].wind_gust)}<br>
        </div>
    </div>
    <div class="card footer-card">
        <div class="card-title">
            <h2>${dayName[2]}</h2>
        </div>
        <div class="card-body">
                Humidity: ${dailyForecasts[2].humidity}<br>
                Hi temp: ${parseInt(dailyForecasts[2].temp.max)}<br>
                Low temp: ${parseInt(dailyForecasts[2].temp.min)}<br>
                Feels like: ${parseInt(dailyForecasts[2].feels_like.day)}<br>
                Wind: ${parseInt(dailyForecasts[2].wind_gust)}<br>
        </div>
    </div>
    <div class="card footer-card">
        <div class="card-title">
            <h2>${dayName[3]}</h2>
        </div>
        <div class="card-body">
                Humidity: ${dailyForecasts[3].humidity}<br>
                Hi temp: ${parseInt(dailyForecasts[3].temp.max)}<br>
                Low temp: ${parseInt(dailyForecasts[3].temp.min)}<br>
                Feels like: ${parseInt(dailyForecasts[3].feels_like.day)}<br>
                Wind: ${parseInt(dailyForecasts[3].wind_gust)}<br>
        </div>
    </div>
    <div class="card footer-card">
        <div class="card-title">
            <h2>${dayName[4]}</h2>
        </div>
        <div class="card-body">
                Humidity: ${dailyForecasts[4].humidity}<br>
                Hi temp: ${parseInt(dailyForecasts[4].temp.max)}<br>
                Low temp: ${parseInt(dailyForecasts[4].temp.min)}<br>
                Feels like: ${parseInt(dailyForecasts[4].feels_like.day)}<br>
                Wind: ${parseInt(dailyForecasts[4].wind_gust)}<br>
        </div>
    </div>`

     }
 }