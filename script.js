let key = "eb29bffd05be4c4a38e7c6f71b90134b";

let cityinput = document.querySelector(".cityinput");
let checkbutton = document.querySelector(".checkbutton");
let infobox = document.querySelector(".infobox");
let cityname = document.querySelector(".cityname");
let countryname = document.querySelector(".country");
let temp = document.querySelector(".temp");
let tempmin = document.querySelector(".tempmin");
let tempmax = document.querySelector(".tempmax");
let desc = document.querySelector(".desc");
let windspeed = document.querySelector(".windspeed");
let humidity = document.querySelector(".humidity");
let pressure = document.querySelector(".pressure");
let bgimg = document.querySelector(".bgimg")
let morebtn = document.querySelector(".more");
let details = document.querySelector(".details");

const userAction = (city) =>{

  if(city===""){
    city= "delhi";
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
  .then(response => response.json())
  .then(jsondata => {
      
      cityname.innerHTML = jsondata.name;
      countryname.innerHTML = jsondata.sys.country;
      temp.innerHTML =  (jsondata.main.temp -273.15).toFixed(1);
      tempmin.innerHTML = (jsondata.main.temp_min -273.15).toFixed(1);
      tempmax.innerHTML = (jsondata.main.temp_max -273.15).toFixed(1);
      desc.innerHTML = jsondata.weather[0].description;
      windspeed.innerHTML = jsondata.wind.speed;
      humidity.innerHTML = jsondata.main.humidity;
      pressure.innerHTML = jsondata.main.pressure;
      
      if(jsondata.weather[0].description.includes("cloud")||jsondata.weather[0].description.includes("rain")){
        document.querySelector(".fa-cloud").style.display="block";
        document.querySelector(".fa-bolt").style.display="none";
        document.querySelector(".fa-sun").style.display="none";

      }
      else if(jsondata.weather[0].description.includes("thunderstorm")){
        document.querySelector(".fa-cloud").style.display="none";
        document.querySelector(".fa-bolt").style.display="block";
        document.querySelector(".fa-sun").style.display="none";

      }
      else if(jsondata.weather[0].description.includes("sun")){
        document.querySelector(".fa-cloud").style.display="none";
        document.querySelector(".fa-bolt").style.display="none";
        document.querySelector(".fa-sun").style.display="block";

      }
      else{
        document.querySelector(".fa-cloud").style.display="none";
        document.querySelector(".fa-bolt").style.display="none";
        document.querySelector(".fa-sun").style.display="none";
      }
      bgimg.src = `https://source.unsplash.com/1600x900/?${jsondata.weather[0].description}`;
  });

  infobox.style.display = "block";
  cityinput.value="";
}


checkbutton.addEventListener('click',()=>{
    userAction(cityinput.value);
})

morebtn.addEventListener('click',()=>{
  if(details.style.display==="none" || details.style.display===""){
    details.style.display="block";
  }else if(details.style.display==="block"){
    details.style.display="none";
  }
})