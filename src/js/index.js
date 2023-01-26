import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";

function Simplecounter(props) {
    return (
        <span className="big-counter">
            <i class="fa-regular fa-clock white digit"></i>
            <span id="hundredthousand" className="digit">
                0
            </span>
            <span id="tenthousand" className="digit">
                0
            </span>
            <span id="thousand" className="digit">
                0
            </span>
            <span id="hundred" className="digit">
                0
            </span>
            <span id="ten" className="digit">
                0
            </span>
            <span id="unit" className="digit">
                0
            </span>
            <span className="seconds">
                <Home />
            </span>
        </span>
    );
}

ReactDOM.render(<Simplecounter />, document.querySelector("#app"));
