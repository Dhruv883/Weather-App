let error = document.getElementById('error')
let search = document.getElementById('search')

async function weather(city) {
      try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=137c4ebd53c2e7690e3075aaaf98290b`, { mode: 'cors' })
            const obj = await response.json();

            const data = {
                  city: obj.name,
                  country: obj.sys.country,
                  main: obj.main,
                  wind: obj.wind.speed,
                  weather: obj.weather[0].main
            }

            return data;

      } catch (err) {
            error.setAttribute('style', 'display:block')
            setTimeout(() => {
                  error.setAttribute('style', 'display:none')
                  search.value = ''

            }, 3500)
      }
}

export default weather;