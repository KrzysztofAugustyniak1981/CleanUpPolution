/*Zmienne*/
let food = 2;
let wood = 5;
let stone = 5;
let skils = 0;
let pop = 1;
let freeHouse = 5;
let defensive = 0;
let pollution = 1;
let workers = 0;
let freepeople = pop - workers;

/*let for end of turn*/
let nfreeHouse = 5;

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
const counterFreePeople = document.getElementById("FreePeople");
const counterViewPopulation = document.getElementById("Population");
const counterViewDefensive = document.getElementById("Defensive");
const counterViewPollution = document.getElementById("Pollution");
/*small counters*/
const houseCounter = document.getElementById("HousesCounter");
const freeHouseCounter = document.getElementById("FreeBadsCounter");
const houseBuildingCounter = document.getElementById("HauseBuildingCounter")
const farmerCounter = document.getElementById("FarmersCounter");
const addedFarmers = document.getElementById("AddedFarmWorkers");
const pollutionCounterSmall = document.getElementById("PollutionLvlCounter");
const cleanersAddCounter = document.getElementById("CleanersAdd");
const minersCounter = document.getElementById("MinersCounter");
const minersAddedCounter = document.getElementById("MinersAddedCounter");
const peopleToLearnCounter = document.getElementById("PeopleToLearnCounter");
const studentsAddedCounter = document.getElementById("StudentsAddedCounter");
const lumberjacksCounter = document.getElementById("LumberjacksCounter");
const lumberjacksAddedCounter = document.getElementById("LumberjacksAddedCounter");
const scoutsAddedCounter = document.getElementById("ScoutsAddedCounter");



/*Funkcje*/
/*View Windows*/
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
/*Function for quantity change*/
function AddHouse() {
  if (freepeople>0 & wood>4 & stone>1) {
  workers--;
  nfreeHouse += 5;
  wood -= 5;
  stone -= 2;
  houseBuildingCounter.innerHTML = nfreeHouse
  }
  else {}
  refreshCounters();
}



function refreshCounters() {
  counterViewFood.innerHTML = food;
  counterViewWood.innerHTML = wood;
  counterViewStone.innerHTML = stone;
  counterViewSkils.innerHTML = skils;
  counterViewPopulation.innerHTML = pop;
  counterViewDefensive.innerHTML = defensive;
  counterViewPollution.innerHTML = pollution;
}

/*EventListner*/
document.getElementById("hFarm").addEventListener("click", ViewFarm);
document.getElementById("hHome").addEventListener("click", ViewHome);
document.getElementById("hPollution").addEventListener("click", ViewPollution);
document.getElementById("hGarage").addEventListener("click", ViewGarage);
document.getElementById("hForest").addEventListener("click", ViewForest);
document.getElementById("hMountains").addEventListener("click", ViewMountains);
document.getElementById("hCity").addEventListener("click", ViewCity);
