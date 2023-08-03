

const {agencies,customers,taxesAuthority} = require("./data");
const CarAgencyManager = {
  agencies: agencies,

  // Search for a car agency by its name or ID.
  // @param {string} idOrName - ID or name of the agency
  // @return {object} - agency object if found, otherwise null
  searchAgency: function (idOrName) {
      return agencies.find(agencies => agencies.agencyName == idOrName || agencies.agencyId == idOrName);
                                             },

  // Retrieve all agencies' names.
  // @return {string[]} - Array of agency names
  getAllAgencies: function (agencies) {
   return agencies.map(agencie => agencie.agencyName)
                                      },

  // Add a new car to an agency's inventory.
  // @param {string} agencyId - The ID of the agency
  // @param {object} car - The car object to be added
  // @return {boolean} - true if added successfully, false otherwise
  addCarToAgency: function (agencyId, car) {
    const agen= agencies.find((element) => element.agencyId === agencyId);
    if (agen) {
      agen.cars.push(car)
      return true;
    } else {
     return false; 
    }
   
  },

  // Remove a car from an agency's inventory.
  // @param {string} agencyId - The ID of the agency
  // @param {string} carId - The ID of the car to be removed
  // @return {boolean} - true if removed successfully, false otherwise
  removeCarFromAgency: function (agencyId, carId) { 
    const agency = agencies.find((agency) => agency.agencyId === agencyId)
   
    if (agency) {
      const carIndex = agency.cars.findIndex((car) => car.carNumber === carId);
   
           if (carIndex !== -1) {  agency.cars.splice(carIndex, 1);  } 
                         
            return true;
              } 
             
    else {return false;}
                                            },
                                            

  // Change the cash or credit of an agency.
  // @param {string} agencyId - The ID of the agency
  // @param {number} cashOrCredit - The amount of cash or credit to be updated
  // @return {boolean} - true if updated successfully, false otherwise
  changeAgencyCashOrCredit: function (agencyId, cashOrCredit) {
       const agency = agencies.find((agency) => agency.agencyId === agencyId)
            if (agency) {
              agency.cash=cashOrCredit;
                 return true;
                        } 
                  else 
                       {
                     return false;
                       }
                                                              },

  // Update the price of a specific car in an agency.
  // @param {string} agencyId - The ID of the agency
  // @param {string} carId - The ID of the car
  // @param {number} newPrice - The new price of the car
  // @return {boolean} - true if updated successfully, false otherwise
  updateCarPrice: function (agencyId, carId, newPrice) {
    const agency = agencies.find((agency) => agency.agencyId === agencyId)
    
    if (agency) {
      const carIndex = agency.cars.findIndex((car) => car.carNumber === carId);
   
           if (carIndex !== -1) {  agency.cars.price = newPrice;  } 
                         
            return true;
              } 
             
    else {return false;}
  
  },

  // Calculate and return the total revenue for a specific agency.
  // @param {string} agencyId - The ID of the agency
  // @return {number} - The total revenue of the agency
  getTotalAgencyRevenue: function (agencyId) {
    const agency = agencies.find((agency) => agency.agencyId === agencyId)
          if (agency) {
           return agency.cash + agency.credit;
                     }        
                                            },

  // Transfer a car from one agency to another.
  // @param {string} fromAgencyId - The ID of the agency from where the car will be transferred
  // @param {string} toAgencyId - The ID of the agency to where the car will be transferred
  // @param {string} carId - The ID of the car to be transferred
  // @return {boolean} - true if transferred successfully, false otherwise
  transferCarBetweenAgencies: function (fromAgencyId, toAgencyId, carId) {
    let agency = agencies.find((agency) => agency.agencyId === fromAgencyId)
    let agency1 = agencies.find((agency) => agency.agencyId === toAgencyId)
            
                   if (agency && agency1) {
                        const carToTransfer = agency.cars.find((car) => car.carNumber === carId);
                
                              return true; } 
                   else {return false};      
           
              } 
             
    
  };

const CustomerManager = {
  customers: customers,

  // Search for a customer by their name or ID.
  // @param {string} idOrName - ID or name of the customer
  // @return {object} - customer object if found, otherwise null
  searchCustomer: function (idOrName) {
    return  customers.find(customers => customers.id == idOrName || customers.name == idOrName);
  },

  // Retrieve all customers' names.
  // @return {string[]} - Array of customer names
  getAllCustomers: function () {
     return customers.map(customers => customers.name);
  },

  // Change the cash of a customer.
  // @param {string} customerId - The ID of the customer
  // @param {number} cash - The new cash value
  // @return {boolean} - true if updated successfully, false otherwise
  changeCustomerCash: function (customerId, cash) {
    const customer= customers.find((customer) => customer.id === customerId)
    
            if (customer) {
              customer.cash=cash;
             
                 return true;
                        } 
                  else 
                       {
                     return false;
                       }
  },

  // Calculate the total value of all cars owned by a specific customer.
  // @param {string} customerId - The ID of the customer
  // @return {number} - The total value of cars owned by the customer
  getCustomerTotalCarValue: function (customerId) {
    function getCustomerTotalCarValue(customerId) {
      // Declare and initialize the variable to hold the total value of all cars
      let totalValue = 0;
    
      // Iterate over each customer in the customers array
      for (let i = 0; i < customers.length; i++) {
      
        if (customers[i].id === customerId) {
          customers[i].cars.forEach((car) => {
           
            totalValue += car.price;
          });
          return totalValue;
        }
      }
    
      return 0;
    }
    
  },
};

const CarManager = {
  cars: [],
  
  // Retrieve all cars available for purchase.
  // @return {object[]} - Array of cars
  getAllCars: function (agencies) {

    return agencies.map(agencie => agencie.cars)
  },

  // Search for cars based on certain criteria.
  // @param {number} year - The production year of the car
  // @param {number} price - The price of the car
  // @param {string} brand - The brand of the car
  // @return {object[]} - Array of cars that meet the criteria
  searchCars: function (year, price, brand) {
    const car = agencies.cars.find((car) => this.cars.year === year && this.cars.price === price && this.cars.brand === brand)
   
    if (car) {
      const carIndex = agency.cars.findIndex((car) => car.carNumber === carId);
   
           if (carIndex !== -1) {  agency.cars.splice(carIndex, 1);  } 
                         
            return true;
              } 
             
    else {return false;}
  },

  // Return the most expensive car available for sale.
  // @return {object} - The most expensive car
  getMostExpensiveCar: function () {
   let mostExpensiveCar;
   let highestPrice = 0;
   for (const customer of customers) {
    for (const car of customer.cars) {
      if(car.price > highestPrice){
        highestPrice=car.price;
        mostExpensiveCar=car;
      }

    }
    
   }
   return mostExpensiveCar;
  },

  // Return the cheapest car available for sale.
  // @return {object} - The cheapest car
  getCheapestCar: function () {
    let cheapestCar;
    let lowestPrice = 0;
    for (const customer of customers) {
     for (const car of customer.cars) {
       if(car.price < lowestPrice){
         lowestPrice=car.price;
         cheapestCar=car;
       }
 
     }
     
    }
    return cheapestCar;
  },
};

const CarPurchaseManager = {
  agencies: [],
  customers: [],
  taxesAuthority: {
    totalTaxesPaid: 0,
    sumOfAllTransactions: 0,
    numberOfTransactions: 0,
  },

  // Implement a sellCar function that sells a car to a specific customer.
  // @param {string} carId - The ID of the car
  // @param {string} customerId - The ID of the customer
  // @return {boolean} - true if the car was sold successfully, false otherwise
  sellCar: function (carId, customerId) {

  },

  // Calculate and return the total revenue of the entire market.
  // @return {number} - The total revenue of the market
  getTotalMarketRevenue: function () {

  },
};

/*console.log("Search for a car agency by its name Or ID");
idOrName="Carsova";
console.log(`agency for nagencyName : ${idOrName}`)
console.log(CarAgencyManager.searchAgency(agencies,idOrName))
idOrName="9KeaYbRLP";
console.log(`agency for ID Agency : ${idOrName}`)
console.log(CarAgencyManager.searchAgency(agencies,idOrName))
console.log("Retrieve all agencies' names.");
console.log(CarAgencyManager.getAllAgencies(agencies))

console.log("return true of false ")
//object for new car
car={
    brand: "Golf",
    models: [
     {
      name: "3",
      year: 2015,
      price: 137000,
      carNumber: "AZJZ4",
      ownerId: "Plyq5M5AZ",
     },
     {
      name: "X6",
      year: 2020,
      price: 966500,
      carNumber: "S6DL1",
      ownerId: "Plyq5M5AZ",
     },
            ]
    }
    agencyId="9KeaYbRLP";
    console.log(CarAgencyManager.addCarToAgency (agencyId, car) )
    console.log(agencies)//to check the update
    
    agencyId="Plyq5M5AZ";
    carId="6rvXw";
   
  CarAgencyManager.removeCarFromAgency (agencyId, carId) ;
    idOrName="Plyq5M5AZ";
    console.log("check update")
    console.log(CarAgencyManager.searchAgency(agencies,idOrName))
    console.log(CarManager.getAllCars(agencies))*/
    
    /*agencyId="26_IPfHU1";
    carId="4Ixb0";
    console.log("test remove")
    console.log(CarAgencyManager.removeCarFromAgency(agencyId, carId));*/
/*
    agencyId="26_IPfHU1";
    cashOrCredit=700000;
    CarAgencyManager.changeAgencyCashOrCredit(agencyId, cashOrCredit);*/

    /*fromAgencyId="Plyq5M5AZ";
    toAgencyId= "gNHjNFL12"
    carId="AZJZ4"
   console.log( CarAgencyManager.transferCarBetweenAgencies(fromAgencyId, toAgencyId, carId) )*/
   /*const carInfo = {
    brand: "Honda",
    models: [
      {
        name: "Civic",
        year: 2022,
        price: 25000,
        carNumber: "AbCdE",
        ownerId: "xyz123",
      },
    ],
  };*/
  
  /*const addedSuccessfully = CarAgencyManager.addCarToAgency("9KeaYbRLP", carInfo);
  if (addedSuccessfully) {
    console.log("Car added successfully!");
  } else {
    console.log("Agency not found. Car could not be added.");
  }*/
 /*idOrName="Lilah Goulding";
 console.log(CustomerManager.searchCustomer(idOrName)) 
  console.log("aaaaaa")
  idOrName= "2RprZ1dbL";
  console.log(CustomerManager.searchCustomer(idOrName)) */
 // console.log(CustomerManager.getAllCustomers())
 customerId="2RprZ1dbL";
 cash=6000;
 console.log(CustomerManager.changeCustomerCash (customerId, cash))