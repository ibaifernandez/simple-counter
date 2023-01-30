import React from "react";
import ReactDOM from "react-dom";
import Home from "../js/component/Home.jsx";
import "../styles/index.css";

let units = 0;
let tens = 0;
let hundreds = 0;
let thousands = 0;
let tenThousands = 0;
let hundredThousands = 0;

setInterval(() => {
    units++;

    if (units >= 9) {
        units = 0;
        tens++;
    }

    if (tens >= 9) {
        tens = 0;
        hundreds++;
    }

    if (hundreds >= 9) {
        hundreds = 0;
        thousands++;
    }

    if (thousands >= 9) {
        thousands = 0;
        tenThousands++;
    }

    if (tenThousands >= 9) {
        tenThousands = 0;
        hundredThousands++;
    }

    if (hundredThousands >= 9) {
        hundredThousands = 0;
    }

    ReactDOM.render(
        <Home
            secondsUnits={units}
            secondsTens={tens}
            secondsHundreds={hundreds}
            secondsThousands={thousands}
            secondsTenThousands={tenThousands}
            secondsHundredThousands={hundredThousands}
        />,
        document.querySelector("#app")
    );
}, 1);
