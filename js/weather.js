const weatherCardsInfo = document.getElementById("weatherCardsInfo")
function weatherCards(dailyForecasts){
    weatherCardsInfo.innerHTML = `
    <div class="card">
        <div class="card-title">
            <h2>${new Date(dailyForecasts[0].dt * 1000).toDateString()}</h2>
        </div>
        <div class="card-body">
            <ul class="feature-list">
                <li class="feature-item">Humidity: ${dailyForecasts[0].humidity}</li>
                <li class="feature-item">Hi temp: ${parseInt(dailyForecasts[0].temp.max)}</li>
                <li class="feature-item">Low temp: ${parseInt(dailyForecasts[0].temp.min)}</li>
                <li class="feature-item">Feels like: ${parseInt(dailyForecasts[0].feels_like.day)}</li>
                <li class="feature-item">Wind: ${parseInt(dailyForecasts[0].wind_gust)}</li>
            </ul>
        </div>
    </div>
    <div class="card">
        <div class="card-title">
            <h2>${new Date(dailyForecasts[1].dt * 1000).toDateString()}</h2>
        </div>
        <div class="card-body">
            <ul class="feature-list">
                <li class="feature-item">Humidity: ${dailyForecasts[1].humidity}</li>
                <li class="feature-item">Hi temp: ${parseInt(dailyForecasts[1].temp.max)}</li>
                <li class="feature-item">Low temp: ${parseInt(dailyForecasts[1].temp.min)}</li>
                <li class="feature-item">Feels like: ${parseInt(dailyForecasts[1].feels_like.day)}</li>
                <li class="feature-item">Wind: ${parseInt(dailyForecasts[1].wind_gust)}</li>
            </ul>
        </div>
    </div>
    <div class="card">
        <div class="card-title">
            <h2>${new Date(dailyForecasts[2].dt * 1000).toDateString()}</h2>
        </div>
        <div class="card-body">
            <ul class="feature-list">
                <li class="feature-item">Humidity: ${dailyForecasts[2].humidity}</li>
                <li class="feature-item">Hi temp: ${parseInt(dailyForecasts[2].temp.max)}</li>
                <li class="feature-item">Low temp: ${parseInt(dailyForecasts[2].temp.min)}</li>
                <li class="feature-item">Feels like: ${parseInt(dailyForecasts[2].feels_like.day)}</li>
                <li class="feature-item">Wind: ${parseInt(dailyForecasts[2].wind_gust)}</li>
            </ul>
        </div>
    </div>
    <div class="card">
        <div class="card-title">
            <h2>${new Date(dailyForecasts[3].dt * 1000).toDateString()}</h2>
        </div>
        <div class="card-body">
            <ul class="feature-list">
                <li class="feature-item">Humidity: ${dailyForecasts[3].humidity}</li>
                <li class="feature-item">Hi temp: ${parseInt(dailyForecasts[3].temp.max)}</li>
                <li class="feature-item">Low temp: ${parseInt(dailyForecasts[3].temp.min)}</li>
                <li class="feature-item">Feels like: ${parseInt(dailyForecasts[3].feels_like.day)}</li>
                <li class="feature-item">Wind: ${parseInt(dailyForecasts[3].wind_gust)}</li>
            </ul>
        </div>
    </div>
    <div class="card">
        <div class="card-title">
            <h2>${new Date(dailyForecasts[4].dt * 1000).toDateString()}</h2>
        </div>
        <div class="card-body">
            <ul class="feature-list">
                <li class="feature-item">Humidity: ${dailyForecasts[4].humidity}</li>
                <li class="feature-item">Hi temp: ${parseInt(dailyForecasts[4].temp.max)}</li>
                <li class="feature-item">Low temp: ${parseInt(dailyForecasts[4].temp.min)}</li>
                <li class="feature-item">Feels like: ${parseInt(dailyForecasts[4].feels_like.day)}</li>
                <li class="feature-item">Wind: ${parseInt(dailyForecasts[4].wind_gust)}</li>
            </ul>
        </div>
    </div>`

}


