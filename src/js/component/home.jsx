import React from "react";

import favicon from "../../img/favicon.jpeg";

const Home = () => {
    return (
        <>
            <img className="d-block my-3 mx-auto" src={favicon} />
            <div className="text-center">Hello React!</div>
        </>
    );
};

export default Home;
