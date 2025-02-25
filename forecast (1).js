//https://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=c1f36c95697c0562f029d71ce8cb4e56

const key = "c1f36c95697c0562f029d71ce8cb4e56";

const getForecast = async (city) => {
    const base = "https://api.openweathermap.org/data/2.5/forecast";
    const query = `?q=${city}&units=metric&appid=${key}`;

    const response = await fetch(base + query);
    if (!response.ok)
        throw new Error("Status Code : " + response.status);

    const data = await response.json();
    return data;

}

//getForecast('Gujarat')
//    .then(data => console.log(data))
//    .catch(err => console.warn(err));
