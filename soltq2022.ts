
class Tiedot {
    timestamp: Date
    unit: string
    value: string
}
//Hakee tiedot serveriltä ja luo tarvittavat html elementit
function getTiedot(){
    //Tähän serveri missä API pyörii + /Tiedot jolla API paluattaa datan mallissa Tiedot kts. ylempää
    fetch('https://localhost:7239/Tiedot')
  .then(response => response.json())
  .then(data => {
    if(data.length == 0){console.log('ERROR Rajapintaa ei saavutettu')}
    else{
      let pohja = document.getElementById('tiedot')
      for (let i = 0; i < data.length; i++) {
        let div = document.createElement('div')
        let labeli = document.createElement('label')
        let value = document.createElement('p')
        pohja.append(div)
        div.append(labeli)
        div.append(value)
        labeli.textContent = data[i].timestamp.toString()
        value.textContent = data[i].value + " " + data[i].unit
      }
    }
  });

                
               
}

