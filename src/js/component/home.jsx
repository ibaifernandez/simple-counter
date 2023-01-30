import React from "react";
import Counter from "./Counter.jsx";

const Home = (props) => {
    return (
        <Counter
            units={props.secondsUnits}
            tens={props.secondsTens}
            hundreds={props.secondsHundreds}
            thousands={props.secondsThousands}
            tenThousands={props.secondsTenThousands}
            hundredThousands={props.secondsHundredThousands}
        />
    );
};

export default Home;
