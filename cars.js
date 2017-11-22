var carRental = { 
    "name": "Enterprise Car Rental",
    ecoCars: 50,
    ecoCarsRented: 0,
    midCars: 50,
    midCarsRented: 0
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

var rental = {
    carType: [
        {
            type: "economy",
            price: "$19.99"
        },
        {
            type: "midsize",
            price: "$29.99"
        }
    ],
    
    renters: []
};

function carOption(index) {
    var selectCar = document.getElementById("selectType").value;
    console.log(selectCar);
    var economy = rental.carType[0].type + " - " + rental.carType[0].price;
    var midsize = rental.carType[1].type + " - " + rental.carType[1].price;
    console.log("hello yall!");
    
    if (selectCar !== "midsize") {
        document.getElementById("displayInfo").innerHTML = "You selected: " + economy;
        document.getElementById("ecoCarAvail").innerHTML = carRental.ecoCars - carRental.ecoCarsRented;
        console.log("it works");
    } 
    else {
        document.getElementById("displayInfo").innerHTML = "You selected: " + midsize;
        document.getElementById("midCarAvail").innerHTML = carRental.midCars - carRental.midCarsRented;
        console.log("it works too");
    }
    

    // for (var i = 0; i < rental.carType.length; i++) {
    //     console.log("start", i);
    //     var carOption = document.createElement("OPTION");
    //     carOption.setAttribute("value", "economy");
    //     carOption.setAttribute("value", "midsize");
    //     console.log("stop");
        
    // }
    
}

    // if (economy !== "none" ) {
    //     return midsize;
    // }

// function submit() {
//     // carRental.midCarsAvail--;
//     // carRental.midCarsRented++;
//     button1();
//     console.log('form submitted');
// }