import weather from "./weather";
import disp from "./disp";
import convert from "./unit";

let tempUnit = document.getElementById('temp-unit')
let search = document.getElementById('search')
let back = document.getElementById('back')
let searchIcon = document.getElementById('search-btn');
let error = document.getElementById('error')

searchIcon.addEventListener('click', async () => {
      if (search.value !== '') {
            const data = await weather(search.value)
            disp.changeDetails(data)
            disp.toggle(0);
      }
})

document.addEventListener('keydown', async (e) => {
      if (e.key === 'Enter') {
            if (search.value !== '') {
                  const data = await weather(search.value)
                  disp.changeDetails(data)
                  disp.toggle(0);
            }
      };
});

back.addEventListener('click', () => {
      disp.toggle(1);
      search.value = ''
      tempUnit.textContent = '°C'
      error.setAttribute('style', 'display:none')
})


tempUnit.addEventListener('click', () => {
      if (tempUnit.textContent === '°C') {
            convert(0);
            tempUnit.textContent = '°F'

      } else {
            convert(1);
            tempUnit.textContent = '°C'
      }
})






