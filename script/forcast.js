const key = 'RRW1SCs464v9cWLwYld0cSk7DRNiL3Hc';

const getCity = async (city) => {
    base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    params = `?apikey=${key}&q=${city}`;
    query = base + params

    const response = await fetch(query);
    console.log(response.status)
    if (response.status !== 200) { 
        console.log('here')
        throw new Error('errrr');

     }

    let data = await response.json();
    return data[0]

};

const getWeatherCondition = async (cityID) => {
    base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    params = `${cityID}?apikey=${key}`;
    query = base + params;
    const response = await fetch(query );
    // console.log(response)
    const data = await response.json();
//    console.log(data)
    return data
};

 
// getCity('tehran').then( data => {
//    return getWeatherCondition(data.Key)
// }).then( data => {
//     console.log(data)
// })