const disp = (() => {

      function changeDetails(data) {
            let weath = document.getElementById('weather')
            let city = document.getElementById('city')
            let country = document.getElementById('country')
            let temp = document.getElementById('temp')
            let alttemp = document.getElementById('altTemp')
            let humidity = document.getElementById('humidity')
            let wind = document.getElementById('wind')
            let pressure = document.getElementById('pressure')

            weath.textContent = `${data.weather}`
            city.textContent = `${data.city}`
            country.textContent = `${data.country}`
            temp.textContent = `${(Math.round(data.main.temp * 10)) / 10}`
            alttemp.textContent = `${(Math.round(data.main.feels_like * 10)) / 10}`
            humidity.textContent = `${data.main.humidity}`
            pressure.textContent = `${data.main.pressure}`
            wind.textContent = `${data.wind}`
      }

      function toggle(num) {
            let container = document.getElementById('container');
            let weatherBox = document.getElementById('weather-box')

            if (num === 0) {
                  container.setAttribute('style', 'display:none')
                  weatherBox.setAttribute('style', 'display:block')
            }
            else {
                  weatherBox.setAttribute('style', 'display:none')
                  container.setAttribute('style', 'display:block')
            }
      }

      return { changeDetails, toggle }
})();

export default disp;

