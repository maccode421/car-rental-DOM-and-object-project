var carRental = { 
    "name": "Enterprise Car Rental",
    ecoCars: 100,
    ecoCarsRented: 0,
    midCars: 100,
    midCarsRented: 0
};

var rental = {
    renters: [
        {
            firstName: "John",
            lastName: "Doe"
        },
        {
            firstName: "Jane",
            lastName: "Fonda"
        }
    ],
    
    carType: [
        {
            type: "economy",
            price: "$19.99"
        },
        {
            type: "midsize",
            price: "$29.99"
        }
    ]
};

function button() {
    document.getElementById("bizName").innerHTML = carRental.name;
    document.getElementById("ecoCar").innerHTML = carRental.ecoCars;
    document.getElementById("ecoCarRent").innerHTML = carRental.ecoCarsRented;
    document.getElementById("ecoCarAvail").innerHTML = carRental.ecoCars - carRental.ecoCarsRented;
    document.getElementById("midCar").innerHTML = carRental.midCars;
    document.getElementById("midCarRent").innerHTML = carRental.midCarsRented;
    document.getElementById("midCarAvail").innerHTML = carRental.midCars - carRental.midCarsRented;
}
    
function button1() {
    carRental.ecoCarsAvail--;
    carRental.ecoCarsRented++;
    button();
}

function button2() {
    carRental.midCarsAvail--;
    carRental.midCarsRented++;
    button();
}

function carOption() {
    var cars = document.getElementById("car-type").value;
    var economy = rental.carType[0].price;
    var midsize = rental.carType[1].price;
    document.getElementById("displayInfo").innerHTML = "You selected: " + cars + " - " + economy;

    document.getElementById("ecoCar").innerHTML = carRental.ecoCars;
    document.getElementById("ecoCarRent").innerHTML = carRental.ecoCarsRented;
    document.getElementById("ecoCarAvail").innerHTML = carRental.ecoCars - carRental.ecoCarsRented;
    
    // document.getElementById("displayInfo").innerHTML = "You selected: " + cars + " - " + rental.carTypes[1].price;
    
    // document.getElementById("midCar").innerHTML = carRental.midCars;
    // document.getElementById("midCarRent").innerHTML = carRental.midCarsRented;
    // document.getElementById("midCarAvail").innerHTML = carRental.midCars - carRental.midCarsRented;


    // if (economy !== "none" ) {
    //     return midsize;
    // }
    // button1();
}

function submit() {
    carRental.midCarsAvail--;
    carRental.midCarsRented++;
}