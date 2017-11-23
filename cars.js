var carRental = {
    "name": "Enterprise Car Rental",
    ecoCars: 55,
    ecoCarsRented: 0,
    midCars: 45,
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
    carType: [{
            type: "economy",
            price: "$19.99",
            available: 55
        },
        {
            type: "midsize",
            price: "$29.99",
            available: 45
        }
    ],

    renter: []
};

function carOption() {
    var selectCar = document.getElementById("selectType").value;
    console.log(selectCar);
    var economy = rental.carType[0].type + " - " + rental.carType[0].price + "<br>" + "Available: " + rental.carType[0].available;
    var midsize = rental.carType[1].type + " - " + rental.carType[1].price + "<br>" + "Available: " + rental.carType[1].available;
    console.log();

    if (selectCar !== "midsize") {
        document.getElementById("displayInfo").innerHTML = "You selected: " + economy;
        // document.getElementById("ecoCarAvail").innerHTML = carRental.ecoCars - carRental.ecoCarsRented;
        console.log(economy);
    }
    else {
        document.getElementById("displayInfo").innerHTML = "You selected: " + midsize;
        // document.getElementById("midCarAvail").innerHTML = carRental.midCars - carRental.midCarsRented;
        console.log(midsize);
    }

    // for (var i = 0; i < rental.carType.length; i++) {
    //     console.log("start", i);
    //     var carOption = document.createElement("OPTION");
    //     carOption.setAttribute("value", "economy");
    //     carOption.setAttribute("value", "midsize");
    //     console.log("stop");

    // }

}

function reserveCar() {
    var type = document.forms["renterForm"]["type"].value;
    document.getElementById("displayInfo").innerHTML = "Thank for your reservation.";
    if (type == "none") {
        console.log(type);
    }
    alert("You need to select car.");
    console.log('form submitted');
}