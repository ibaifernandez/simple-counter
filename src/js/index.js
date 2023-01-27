import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";

export let seconds = 0;
export let tenSeconds = 0;
let hundredSeconds = 0;
let thousandSeconds = 0;
let tenThousandSeconds = 0;
let hundredThousandSeconds = 0;

const Simplecounter = (props) => {
    return (
        <span className="big-counter">
            <i className="far fa-clock icon"></i>
            <span id="hundredthousand" className="digit number">
                {hundredThousandSeconds}
            </span>
            <span id="tenthousand" className="digit number">
                {tenThousandSeconds}
            </span>
            <span id="thousand" className="digit number">
                {thousandSeconds}
            </span>
            <span id="hundred" className="digit number">
                {hundredSeconds}
            </span>
            <span id="ten" className="digit number">
                {tenSeconds}
            </span>
            <span id="unit" className="digit number">
                {seconds}
            </span>
        </span>
    );
};

const Home = (props) => {
    return (
        <Simplecounter
            seconds={seconds}
            tenSeconds={tenSeconds}
            hundredSeconds={hundredSeconds}
            thousandSeconds={thousandSeconds}
            hundredThousandSeconds={hundredThousandSeconds}
        />
    );
};

setInterval(() => {
    seconds++;

    if (seconds > 9) {
        seconds = 0;
        tenSeconds++;
    }

    if (tenSeconds > 9) {
        tenSeconds = 0;
        hundredSeconds++;
    }

    if (hundredSeconds > 9) {
        hundredSeconds = 0;
        thousandSeconds++;
    }

    if (thousandSeconds > 9) {
        thousandSeconds = 0;
        tenThousandSeconds++;
    }

    if (tenThousandSeconds > 9) {
        tenThousandSeconds = 0;
        hundredThousandSeconds++;
    }

    if (hundredThousandSeconds > 9) {
        hundredThousandSeconds = 0;
    }

    ReactDOM.render(<Home />, document.querySelector("#app"));
}, 0.0000000000000000000000000000000000000000000000000000000000000000000000001);
