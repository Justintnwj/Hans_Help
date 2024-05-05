import Binar from "./binar.js";
import Car from "./car.example.js";

const DENGAN_SUPIR = 1;
const TANPA_SUPIR = 2;

class App {
  constructor() {
    this.driverType = document.getElementById("driverType");
    this.selectedDate = document.getElementById("selectedDate");
    this.availableAt = document.getElementById("availableAt");
    this.rowSeat = document.getElementById("row-seat");
    this.searchButton = document.getElementById("searchButton");
    this.carCointainerElement = document.getElementById("rowCars");
  }

  async init() {
    await this.load();
    let self = this;

    // Register click listener
    this.searchButton.addEventListener("click", async function () {
      await self.load();
      self.clear();
      self.run();
    });

    this.driverType.onchange = (event) => {
      if (
        event.target.value != "" &&
        self.selectedDate.value != "" &&
        self.availableAt.value != ""
      ) {
        self.searchButton.removeAttribute("disabled");
      }
    };

    this.selectedDate.onchange = (event) => {
      if (
        self.driverType.value != "" &&
        event.target.value != "" &&
        self.availableAt.value != ""
      ) {
        self.searchButton.removeAttribute("disabled");
      }
    };

    this.availableAt.onchange = (event) => {
      if (
        self.driverType.value != "" &&
        self.selectedDate.value != "" &&
        event.target.value != ""
      ) {
        self.searchButton.removeAttribute("disabled");
      }
    };
    
    this.searchButton.onclick = this.run;
  }
  // Render cars
  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("col-md-4");
      node.innerHTML = car.render();
      this.carCointainerElement.appendChild(node);
    });
  };
  
  async load() {
    // Get all cars
    let cars = await Binar.listCars();

    // Filter cars based on selected date, available at, driver type, and row seat
    let filteredCars = cars.filter((car) => {
      return cars.filter((car) => {
        return (
          car.available === true
          // car.date === selectedDate &&
          // car.availableAt === availableAt &&
          // car.driverType === driverType &&
          // car.rowSeat === rowSeat &&
          // selectedDate &&
          // selectedDate.trim() !== "" &&
          // availableAt &&
          // availableAt.trim() !== "" &&
          // driverType &&
          // driverType.trim() !== "" &&
          // rowSeat &&
          // rowSeat.trim() !== ""
        );
      });
    });

    console.log(filteredCars)

    Car.init(cars);
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