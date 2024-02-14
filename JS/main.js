
const celcius = document.getElementById("celcius")
const fahrenheit = document.getElementById("fahrenheit")
const rumus = document.getElementById("rumus")

  let celError = document.getElementById("celError")
  let fhrError = document.getElementById("fhrError")

  celError.style.display = "none"
  fhrError.style.display = "none"

function onConv() {
  const c = ((celcius.value * 9 / 5) + 32)
  if (celcius.value) {
    fahrenheit.value = c.toFixed(2)
    rumus.value = `${celcius.value}∘C * (9/5) + 32 = ${fahrenheit.value}∘F`
  } else if (fahrenheit.value) {
    const f = ((fahrenheit.value - 32) * 5 / 9)
    celcius.value = f.toFixed(2)
    rumus.value = `(${fahrenheit.value}∘F - 32) * 5/9 = ${celcius.value}∘C`
  }
  
   if(!celcius.value && !fahrenheit.value ){
    celError.style.display = "block"
    fhrError.style.display = "block"
   } 
   

}
function onRst() {
  celcius.value = ""
  fahrenheit.value = ""
  rumus.value = ""
}
function onVers() {
  let reverseCelcius = celcius.value
  let valuevVersCel = reverseCelcius.slice(0, -1)
  celcius.value = valuevVersCel
  let reverseFahrenheit = fahrenheit.value
  let valueVersFhr = reverseFahrenheit.slice(0, -1)
  fahrenheit.value = valueVersFhr
}











// function fahrenheitToCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5/9;
// }
// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9/5) + 32;
// }

