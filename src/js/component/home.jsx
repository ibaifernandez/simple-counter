import React from "react";

import favicon from "../../img/favicon.jpeg";

// Declaration of variables

let seconds = 0;
let tenSeconds = 0;
let hundredSeconds = 0;
let thousandSeconds = 0;
let tenThousandSeconds = 0;
let hundredThousandSeconds = 0;

// Creation and id-ing of new elements

var counter = document.createElement("span");
counter.id = "counter";

function incrementSeconds() {
    seconds += 1;
    updateHundredThousands();
    updateTenThousands();
    updateThousands();
    updateHundreds();
    updateTens();
    updateUnits();
}

function updateUnits() {
    let unit = document.getElementById("unit");
    unit.innerText = seconds;
    if (seconds >= 9) {
        seconds = -1;
    }
}

function updateTens() {
    let ten = document.getElementById("ten");
    ten.innerText = tenSeconds;
    if (seconds >= 9) {
        tenSeconds++;
    }
    if (tenSeconds > 9) {
        tenSeconds = 0;
    }
}

function updateHundreds() {
    let hundred = document.getElementById("hundred");
    hundred.innerText = hundredSeconds;
    if (seconds >= 9 && tenSeconds >= 9) {
        hundredSeconds++;
    }
    if (hundredSeconds > 9) {
        hundredSeconds = 0;
    }
}

function updateThousands() {
    let thousand = document.getElementById("thousand");
    thousand.innerText = thousandSeconds;
    if (seconds >= 9 && tenSeconds >= 9 && hundredSeconds >= 9) {
        thousandSeconds++;
    }
    if (thousandSeconds > 9) {
        thousandSeconds = 0;
    }
}

function updateTenThousands() {
    let tenThousand = document.getElementById("tenthousand");
    tenThousand.innerText = tenThousandSeconds;
    if (
        seconds >= 9 &&
        tenSeconds >= 9 &&
        hundredSeconds >= 9 &&
        thousandSeconds >= 9
    ) {
        tenThousandSeconds++;
    }
    if (tenThousandSeconds > 9) {
        tenThousandSeconds = 0;
    }
}

function updateHundredThousands() {
    let hundredThousand = document.getElementById("hundredthousand");
    hundredThousand.innerText = hundredThousandSeconds;
    if (
        seconds >= 9 &&
        tenSeconds >= 9 &&
        hundredSeconds >= 9 &&
        thousandSeconds >= 9 &&
        tenThousandSeconds >= 9
    ) {
        hundredThousandSeconds++;
    }
    if (hundredThousandSeconds > 9) {
        hundredThousandSeconds = 0;
    }
}

setInterval(incrementSeconds, 1);

const Home = () => {
    return (
        <>
            <span id="counterwatch" className="text-center"></span>
        </>
    );
};

export default Home;
