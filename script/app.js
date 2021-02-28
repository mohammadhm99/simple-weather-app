const cityInput = document.querySelector('body > div > form');
const card = document.querySelector('.card');
const information = document.querySelector('.infos');
const tempMessure = "Metric";

const timeImg = document.querySelector('.time');
const conditionIcon = document.querySelector('.icon img')
// ---------------------------------------
const getData = async (city) => {

    const cityData = await getCity(city);
    const weatherData = await getWeatherCondition (cityData.Key)

    return { cityData : cityData, weatherData : weatherData}
            // --- or ---   
//  return { cityData, weatherData}
}

const updateUI = (data) => {

    console.log(data)
    // ----- insert weather condition in "information div in html"
    information.innerHTML = `
    <h5 class="my-3">${data.cityData.EnglishName}</h5>
    <div class="my-3">${data.weatherData[0].WeatherText}</div>
    <div class="my-4 display-4 temp">
        <span>${data.weatherData[0].Temperature.Metric.Value}</span>
        <span>&deg;c </span>
    </div>`

    // set temperature by temp messure
    if( tempMessure == "Imperial"){

        document.querySelector('.temp').innerHTML = `
        <span>${data.weatherData[0].Temperature.Imperial.Value}</span>
        <span>&deg;f </span>`
    }
    
    //  ---- set time img --------
    if( data.weatherData[0].IsDayTime){

     timeImg.setAttribute('src', './img/day.svg')  
    } else{
        timeImg.setAttribute('src', './img/night.svg')
    }

    const iconNum = data.weatherData[0].WeatherIcon
    const iconSRC = `./img/icons/${iconNum}.svg`;
    conditionIcon.setAttribute('src', iconSRC); 
    if (card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

}
cityInput.addEventListener( 'submit' , (e) =>{
    e.preventDefault()
    cityName = e.target.location.value.trim();

    getData(cityName).then( data => updateUI(data) )
                     .catch(err  => console.log(err) )
})


