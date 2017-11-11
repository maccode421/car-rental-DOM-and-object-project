var carRental = { name: "Enterprise Car Rental",
    ecoCars: 100,
    ecoCarsRented: 0,
    midCars: 100,
    midCarsRented: 0,
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