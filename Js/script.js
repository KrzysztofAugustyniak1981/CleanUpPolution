/*Zmienne*/
let food = 2;
let farmers = 0;
let wood = 5;
let lumberjacks = 0;
let stone = 5;
let miners = 0;
let skils = 0;
let people = 2; // 2
let house = 5; // 5
let defensive = 0;
let pollution = 1;
let workers = 0;
let freeWorkers = 2; // 2
let i = 0;
let sliderValue = 0;
let power;

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
const houseBuildingCounter = document.getElementById("HauseBuildingCounter");
const farmerCounter = document.getElementById("FarmersCounter");
const addedFarmers = document.getElementById("AddedFarmWorkers");
const pollutionCounterSmall = document.getElementById("PollutionLvlCounter");
const cleanersCounter = document.getElementById("CleanersAddView");
const minersCounter = document.getElementById("MinersCounter");
const minersAddedCounter = document.getElementById("MinersAddedCounter");
const peopleToLearnCounter = document.getElementsByClassName(
  "PeopleToLearnCounter"
);
const studentsAddedCounter = document.getElementById("StudentsAddedCounter");
const lumberjacksCounter = document.getElementById("LumberjacksCounter");
const lumberjacksAddedCounter = document.getElementById(
  "LumberjacksAddedCounter"
);
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
  refreshCounters();
}
/*Function for quantity change*/
function AddHouse() {
  if ((freeWorkers > 0) & (wood > 4) & (stone > 1)) {
    bulider++;
    nfreeHouse += 5;
    wood -= 5;
    stone -= 2;
    freeWorkers--;
  } else {
  }
  refreshCounters();
}
function AddHouse10() {
  if ((freeWorkers >= 10) & (wood >= 50) & (stone >= 20)) {
    bulider += 10;
    nfreeHouse += 50;
    wood -= 50;
    stone -= 20;
    freeWorkers -= 10;
  } else {
  }
  refreshCounters();
}
function DeductHouse() {
  if (nfreeHouse > 0) {
    bulider--;
    nfreeHouse -= 5;
    wood += 5;
    stone += 2;
    freeWorkers++;
  } else {
  }
  refreshCounters();
}
function DeductHouse10() {
  if (nfreeHouse >= 50) {
    bulider -= 10;
    nfreeHouse -= 50;
    wood += 50;
    stone += 20;
    freeWorkers += 10;
  } else {
  }
  refreshCounters();
}

function AddFarmers() {
  if (freeWorkers > 0) {
    addFarmers++;
    workers++;
    freeWorkers--;
  } else {
  }
  refreshCounters();
}
function DeductFarmers() {
  if (addFarmers > 0) {
    addFarmers--;
    workers--;
    freeWorkers++;
  } else if (farmers > 0) {
    farmers--;
    workers--;
    freeWorkers++;
  } else {
  }
  refreshCounters();
}
function AddFarmers10() {
  if (freeWorkers >= 10) {
    addFarmers += 10;
    workers += 10;
    freeWorkers -= 10;
  } else {
  }
  refreshCounters();
}
function DeductFarmers10() {
  if (addFarmers >= 10) {
    addFarmers -= 10;
    workers -= 10;
    freeWorkers += 10;
  } else if (farmers > 10) {
    farmers -= 10;
    workers -= 10;
    freeWorkers += 10;
  } else {
  }
  refreshCounters();
}

function AddCleaners() {
  if (freeWorkers > 0) {
    addCleaners++;
    workers++;
    freeWorkers--;
  } else {
  }
  refreshCounters();
}
function DeductCleaners() {
  if (addCleaners > 0) {
    addCleaners--;
    workers--;
    freeWorkers++;
  } else {
  }
  refreshCounters();
}
function AddCleaners10() {
  if (freeWorkers >= 10) {
    addCleaners += 10;
    workers += 10;
    freeWorkers -= 10;
  } else {
  }
  refreshCounters();
}
function DeductCleaners10() {
  if (addCleaners >= 10) {
    addCleaners -= 10;
    workers -= 10;
    freeWorkers += 10;
  } else {
  }
  refreshCounters();
}

function AddMiners() {
  if (freeWorkers > 0) {
    addMiners++;
    workers++;
    freeWorkers--;
  } else {
  }
  refreshCounters();
}
function DeductMiners() {
  if (addMiners > 0) {
    addMiners--;
    workers--;
    freeWorkers++;
  } else if (miners > 0) {
    miners--;
    workers--;
    freeWorkers++;
  } else {
  }
  refreshCounters();
}
function AddMiners10() {
  if (freeWorkers >= 10) {
    addMiners += 10;
    workers += 10;
    freeWorkers -= 10;
  } else {
  }
  refreshCounters();
}
function DeductMiners10() {
  if (addMiners >= 10) {
    addMiners -= 10;
    workers -= 10;
    freeWorkers += 10;
  } else if (miners > 10) {
    miners -= 10;
    workers -= 10;
    freeWorkers += 10;
  } else {
  }
  refreshCounters();
}

function AddStudents() {
  if (freeWorkers > 0) {
    addStudents++;
    workers++;
    freeWorkers--;
  } else {
  }
  refreshCounters();
}
function DeductStudents() {
  if (addStudents > 0) {
    addStudents--;
    workers--;
    freeWorkers++;
  } else {
  }
  refreshCounters();
}
function AddStudents10() {
  if (freeWorkers >= 10) {
    addStudents += 10;
    workers += 10;
    freeWorkers -= 10;
  } else {
  }
  refreshCounters();
}
function DeductStudents10() {
  if (addStudents >= 10) {
    addStudents -= 10;
    workers -= 10;
    freeWorkers += 10;
  } else {
  }
  refreshCounters();
}

function AddLumberjacks() {
  if (freeWorkers > 0) {
    addLumberjacks++;
    workers++;
    freeWorkers--;
  } else {
  }
  refreshCounters();
}
function DeductLumberjacks() {
  if (addLumberjacks > 0) {
    addLumberjacks--;
    workers--;
    freeWorkers++;
  } else if (lumberjacks > 0) {
    lumberjacks--;
    workers--;
    freeWorkers++;
  } else {
  }
  refreshCounters();
}
function AddLumberjacks10() {
  if (freeWorkers >= 10) {
    addLumberjacks += 10;
    workers += 10;
    freeWorkers -= 10;
  } else {
  }
  refreshCounters();
}
function DeductLumberjacks10() {
  if (addLumberjacks >= 10) {
    addLumberjacks -= 10;
    workers -= 10;
    freeWorkers += 10;
  } else if (lumberjacks > 10) {
    lumberjacks -= 10;
    workers -= 10;
    freeWorkers += 10;
  } else {
  }
  refreshCounters();
}

function AddScouts() {
  if (freeWorkers > 0) {
    addScouts++;
    workers++;
    freeWorkers--;
  } else {
  }
  refreshCounters();
}
function DeductScouts() {
  if (addScouts > 0) {
    addScouts--;
    workers--;
    freeWorkers++;
  } else {
  }
  refreshCounters();
}
function AddScouts10() {
  if (freeWorkers >= 10) {
    addScouts += 10;
    workers += 10;
    freeWorkers -= 10;
  } else {
  }
  refreshCounters();
}
function DeductScouts10() {
  if (addScouts >= 10) {
    addScouts -= 10;
    workers -= 10;
    freeWorkers += 10;
  } else {
  }
  refreshCounters();
}

/*Info function*/

function foodMouseOver() {}

/*End Of Turn*/

function EndOfTurn() {
  i++;
  farmers += addFarmers;
  addFarmers = 0;
  food += farmers * 3;

  lumberjacks += addLumberjacks;
  addLumberjacks = 0;
  wood += lumberjacks * 2;

  miners += addMiners;
  addMiners = 0;
  stone += miners * 1;

  skils += addStudents / 10;
  freeWorkers += addStudents;
  addStudents = 0;
  if (skils.toString().length >4) {
    skils = Math.round(skils);
  }

  freeWorkers += bulider;
  house += nfreeHouse;
  bulider = 0;
  nfreeHouse = 0;

  if (i < 5) {
    pollution += 0.25; /*Increas for end of turn*/
    pollution -= addCleaners / 2;
    freeWorkers += addCleaners;
    addCleaners = 0;
  } else {
    pollution++; /*Increas for end of turn*/
    pollution -= addCleaners * 0.2;
    freeWorkers += addCleaners;
    addCleaners = 0;
  }
  if (pollution.toString().length > 4) {
    pollution = Math.round(pollution);
  }
  switch (true) {
    case pollution >= 2 && pollution < 3:
      document.getElementById("hPollution").src = "./Photo/Polution2.jpg";
      break;
    case pollution < 5 && pollution >= 3:
      document.getElementById("hPollution").src = "./Photo/Polution3.jpg";
      break;
    case pollution <= 8 && pollution >= 5:
      document.getElementById("hPollution").src = "./Photo/Polution4.jpg";
      break;
    case pollution > 8:
      document.getElementById("hPollution").src = "./Photo/Polution5.jpg";
      break;
    default:
      document.getElementById("hPollution").src = "./Photo/Polution1.jpg";
  }
  /*food consumption*/
  food = food - people;
  if (pollution < 0) {
    pollution = 0;
  }
  /*city*/

  people += 2 * addScouts;
  freeWorkers += 2 * addScouts;
  food += 1 * addScouts;
  wood++;
  stone++;
  freeWorkers += addScouts;
  addScouts = 0;

  if (house < people) {
    let z = house - people;
    freeWorkers += z;
    people = house;
    alert("You have lost people bulid more hauses");
  }
  if (food < 0) {
    let z = people + food;
    freeWorkers = z;
    people += food;
    food = 0;
    alert("Your people are starving ! Bulid more Farmers !");
  }
  if (people < 1) {
    freeWorkers = 0;
    alert("You Lost, everybody are dead !!!");
  }
  defensive = freeWorkers*skils
  refreshCounters();
}

/* 2 ways of doing thisame*/
function refreshCounters() {
  counterViewFood.innerHTML = food;
  document.getElementById("FoodChange").innerHTML =
    food + (farmers + addFarmers) * 3 - people + addScouts;
  counterViewWood.innerHTML = wood;
  document.getElementById("WoodChange").innerHTML =
    wood + (lumberjacks + addLumberjacks) * 2;
  counterViewStone.innerHTML = stone;
  document.getElementById("StoneChange").innerHTML =
    stone + (miners + addMiners);
  counterViewSkils.innerHTML = skils;
  document.getElementById("SkilsChange").innerHTML = skils + addStudents / 10;
  counterPeople.innerHTML = people;
  counterViewPopulation.innerHTML = house;
  counterViewDefensive.innerHTML = defensive;
  document.getElementById("DefensiveChange").innerHTML = freeWorkers*skils;
  counterViewPollution.innerHTML = pollution;
  document.getElementById("PollutionChange").innerHTML =
    pollution + 0.25 - addCleaners * 0.2;
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
  for (let a = 0; a < peopleToLearnCounter.length; a++) {
    peopleToLearnCounter[a].innerHTML = freeWorkers;
  }
}

/*EventListner*/
document.getElementById("hFarm").addEventListener("click", ViewFarm);
document.getElementById("hHome").addEventListener("click", ViewHome);
document.getElementById("hPollution").addEventListener("click", ViewPollution);
document.getElementById("hGarage").addEventListener("click", ViewGarage);
document.getElementById("hForest").addEventListener("click", ViewForest);
document.getElementById("hMountains").addEventListener("click", ViewMountains);
document.getElementById("hCity").addEventListener("click", ViewCity);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    offAll();
  }
});
/*EventListner text info*/
