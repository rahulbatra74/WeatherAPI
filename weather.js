let city = document.getElementById("cityName");
function cityName() {
    getApi(city.value);
  }

  
  
  const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
    
  };
  
  function getApi(city) {
    fetch(
      `${weatherApi.baseUrl}?q=${city} &appid=${weatherApi.key}&units=metric`
    )
      .then((response) => {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        document.getElementById("city").innerHTML = data.name;
        document.getElementById("temp").innerHTML = data.main.temp;
        document.getElementById("des").innerHTML = data.weather[0].description;
      });
  }

