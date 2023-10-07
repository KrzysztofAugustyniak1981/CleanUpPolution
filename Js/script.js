/*Zmienne*/
let food = 2;
let wood = 0;
let stone = 0;
let skils = 0;
let pop = 1;
let freeHouse = 5;
let defensive = 0;
let pollution = 1;

/*uchwyty*/
const viewFarm = document.getElementById("Farm");
const viewPollution = document.getElementById("wPollution");
const viewMountains = document.getElementById("Mountains");
const viewGarage = document.getElementById("Garage");
const viewVilige = document.getElementById("Vilige");
const viewForest = document.getElementById("Forest");
const viewCity = document.getElementById("City");

/*uchwyty do liczników*/
const counterViewFood = document.getElementById("Food");
const counterViewWood = document.getElementById("Wood");
const counterViewStone = document.getElementById("Stone");
const counterViewSkils = document.getElementById("Skils");
const counterViewPopulation = document.getElementById("Population");
const counterViewDefensive = document.getElementById("Defensive");
const counterViewPollution = document.getElementById("Pollution");

/*Funkcje*/
function ViewFarm() {
  viewFarm.classList.remove("d-none");
  
}

function ViewHome() {
  viewVilige.classList.remove("d-none");
}

function ViewPollution() {
  viewPollution.classList.remove("d-none");
}

function ViewGarage() {
  viewGarage.classList.remove("d-none");
}

function ViewForest() {
  viewForest.classList.remove("d-none");
}

function ViewMountains() {
  viewMountains.classList.remove("d-none");
}

function ViewCity() {
  viewCity.classList.remove("d-none");
}

/*Window Off*/
function offAll() {
  viewFarm.classList.add("d-none");
  viewVilige.classList.add("d-none");
  viewPollution.classList.add("d-none");
  viewGarage.classList.add("d-none");
  viewForest.classList.add("d-none");
  viewMountains.classList.add("d-none");
  viewCity.classList.add("d-none");
  refreshCounters()
}

function refreshCounters() {
  counterViewFood.innerHTML = "Food : " + food;
  counterViewWood.innerHTML = "Wood : " + wood;
  counterViewStone.innerHTML = "Stone : " + stone;
  counterViewSkils.innerHTML = "Skils lvl : " + skils;
  counterViewPopulation.innerHTML = "Pop. : " + pop;
  counterViewDefensive.innerHTML = "Defensive : " + defensive;
  counterViewPollution.innerHTML = "Pollution lvl : " + pollution;
}

/*EventListner*/
document.getElementById("hFarm").addEventListener("click", ViewFarm);
document.getElementById("hHome").addEventListener("click", ViewHome);
document.getElementById("hPollution").addEventListener("click", ViewPollution);
document.getElementById("hGarage").addEventListener("click", ViewGarage);
document.getElementById("hForest").addEventListener("click", ViewForest);
document.getElementById("hMountains").addEventListener("click", ViewMountains);
document.getElementById("hCity").addEventListener("click", ViewCity);
