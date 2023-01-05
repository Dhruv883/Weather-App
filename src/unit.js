function convert(num) {
      let temp = document.getElementById('temp')
      let alttemp = document.getElementById('altTemp')
      temp.textContent = `${Math.round(convertVal(temp.textContent, num) * 10) / 10}`;
      alttemp.textContent = `${Math.round(convertVal(alttemp.textContent, num) * 10) / 10}`;

}

function convertVal(val, num) {
      if (num === 0) {
            return (val * 1.8) + 32
      }
      else {
            return (val - 32) / 1.8
      }
}

export default convert;