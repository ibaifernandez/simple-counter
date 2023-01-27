import React from "react";

const Home = () => {
    return <Simplecounter />;
};

const Simplecounter = () => {
    return (
        <span className="big-counter">
            <i className="far fa-clock icon"></i>
            <span id="hundredthousand" className="digit number">
                0
            </span>
            <span id="tenthousand" className="digit number">
                0
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

export { Home, Simplecounter };
