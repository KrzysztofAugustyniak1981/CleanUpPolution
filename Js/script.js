/*Zmienne*/
let food = 2;
let farmers = 0;
let wood = 5;
let lumberjacks = 0;
let stone = 5;
let miners = 0;
let skils = 0;
let people = 1; /*function random*/
let house = 5;
let defensive = 0;
let pollution = 1;
let workers = 0;
let freeWorkers = 1;
let i = 0;

/*let for end of turn*/
let nfreeHouse = 0;
let bulider = 0;
let addFarmers = 0;
let addCleaners = 0;
let addMiners = 0;
let addStudents = 0;
let addLumberjacks = 0;
let addScouts = 0;

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
const counterPeople = document.getElementById("FreePeople");
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
const cleanersCounter = document.getElementById("CleanersAddView");
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
  if (freeWorkers>0 & wood>4 & stone>1) {
  bulider++;
  nfreeHouse += 5;
  wood -= 5;
  stone -= 2;
  freeWorkers-- ;
  }
  else {}
  refreshCounters();
}
function DeductHouse() {
  if (nfreeHouse>0) {
  bulider--;
  nfreeHouse -= 5;
  wood += 5;
  stone += 2;
  freeWorkers++ ;
  } 
  else {}
  refreshCounters();
}

function AddFarmers() {
  if (freeWorkers>0) {
    addFarmers++ ;
    workers++ ;
    freeWorkers-- ;
  }
  else {}
  refreshCounters();
}
function DeductFarmers() {
  if (addFarmers>0) {
    addFarmers-- ;
    workers-- ;
    freeWorkers++ ;
  }
  else {}
  refreshCounters();
}

function AddCleaners() {
  if (freeWorkers>0) {
    addCleaners++;
    workers++;
    freeWorkers--;
  }
  else {}
  refreshCounters();
}
function DeductCleaners() {
  if (addCleaners>0) {
    addCleaners-- ;
    workers-- ;
    freeWorkers++ ;
  }
  else {}
  refreshCounters();
}

function AddMiners() {
  if (freeWorkers>0) {
    addMiners++;
    workers++;
    freeWorkers--;
  }
  else {}
  refreshCounters();
}
function DeductMiners() {
  if (addMiners>0) {
    addMiners-- ;
    workers-- ;
    freeWorkers++ ;
  }
  else {}
  refreshCounters();
}

function AddStudents() {
  if (freeWorkers>0) {
    addStudents++;
    workers++;
    freeWorkers--;
  }
  else {}
  refreshCounters();
}
function DeductStudents() {
  if (addStudents>0) {
    addStudents-- ;
    workers-- ;
    freeWorkers++ ;
  }
  else {}
  refreshCounters();
}

function AddLumberjacks() {
  if (freeWorkers>0) {
    addLumberjacks++;
    workers++;
    freeWorkers--;
  }
  else {}
  refreshCounters();
}
function DeductLumberjacks() {
  if (addLumberjacks>0) {
    addLumberjacks-- ;
    workers-- ;
    freeWorkers++ ;
  }
  else {}
  refreshCounters();
}

function AddScouts() {
  if (freeWorkers>0) {
    addScouts++;
    workers++;
    freeWorkers--;
  }
  else {}
  refreshCounters();
}
function DeductScouts() {
  if (addScouts>0) {
    addScouts-- ;
    workers-- ;
    freeWorkers++ ;
  }
  else {}
  refreshCounters();
}

/*End Of Turn*/

function EndOfTurn() {
  i++
  farmers += addFarmers;
  addFarmers = 0;
  food += farmers * 2;

  lumberjacks += addLumberjacks;
  addLumberjacks = 0;
  wood += lumberjacks * 2;

  miners += addMiners;
  addMiners = 0;
  stone += miners * 1;

  skils += addStudents/10;
  freeWorkers += addStudents;
  addStudents = 0;

  freeWorkers += bulider;
  house += nfreeHouse;
  bulider = 0;
  nfreeHouse = 0;

  if (i < 5) {
  pollution = pollution + 0.25;/*Increas for end of turn*/
  pollution -= (addCleaners/2);
  freeWorkers += addCleaners;
  addCleaners = 0;
  }
  else {
    pollution++/*Increas for end of turn*/
  pollution -= (addCleaners/5);
  freeWorkers += addCleaners;
  addCleaners = 0;
  }
  /*city*/
  
    people += 2*addScouts;
    freeWorkers += 2*addScouts;
    food += 1*addScouts;
    wood++;
    stone++;
    freeWorkers += addScouts;
    addScouts = 0;
  
  


  refreshCounters()
}



function refreshCounters() {
  counterViewFood.innerHTML = food;
  counterViewWood.innerHTML = wood;
  counterViewStone.innerHTML = stone;
  counterViewSkils.innerHTML = skils;
  counterPeople.innerHTML = people
  counterViewPopulation.innerHTML = house;
  counterViewDefensive.innerHTML = defensive;
  counterViewPollution.innerHTML = pollution;
  pollutionCounterSmall.innerHTML = pollution;
  houseBuildingCounter.innerHTML = nfreeHouse;
  freeHouseCounter.innerHTML = people;
  houseCounter.innerHTML = house;
  addedFarmers.innerHTML = addFarmers;
  farmerCounter.innerHTML = farmers;
  cleanersCounter.innerHTML = addCleaners;
  minersAddedCounter.innerHTML = addMiners;
  minersCounter.innerHTML = miners;
  studentsAddedCounter.innerHTML = addStudents;
  peopleToLearnCounter.innerHTML = freeWorkers;
  lumberjacksAddedCounter.innerHTML = addLumberjacks;
  lumberjacksCounter.innerHTML = lumberjacks;
  scoutsAddedCounter.innerHTML = addScouts;
}

/*EventListner*/
document.getElementById("hFarm").addEventListener("click", ViewFarm);
document.getElementById("hHome").addEventListener("click", ViewHome);
document.getElementById("hPollution").addEventListener("click", ViewPollution);
document.getElementById("hGarage").addEventListener("click", ViewGarage);
document.getElementById("hForest").addEventListener("click", ViewForest);
document.getElementById("hMountains").addEventListener("click", ViewMountains);
document.getElementById("hCity").addEventListener("click", ViewCity);
