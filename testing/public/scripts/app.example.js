import Binar from "./binar.js";
import Car from "./car.example.js";

const DENGAN_SUPIR = 1;
const TANPA_SUPIR = 2;

class App {
  constructor() {
    this.driverType = document.getElementById("driverType");
    this.selectedDate = document.getElementById("selectedDate");
    this.availableAt = document.getElementById("availableAt");
    this.passengers = document.getElementById("passengers");
    this.searchButton = document.getElementById("searchButton");
    this.carContainerElement = document.getElementById("rowCars");
  }

  async init() {
    let self = this;

    // Register click listener
    this.searchButton.addEventListener("click", async function () {
      await self.load();
      self.clear();
      self.run();
    });
  }
  // Render cars
  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("col-md-4");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    // Get all cars
    let cars = await Binar.listCars();

    // Filter cars based on selected date, available at, driver type, and row seat
    let filteredCars = cars.filter((car) => {
        return car.available == true && car.capacity >= this.passengers.value;
    });

    console.log(filteredCars);

    Car.init(filteredCars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
        child.remove();
        child = this.carContainerElement.firstElementChild;
    }
};
}

export default App;
