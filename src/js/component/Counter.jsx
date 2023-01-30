import React from "react";

const Counter = (props) => {
    return (
        <div className="container-fluid d-flex bg-dark p-5 text-center text-white justify-content-center something">
            <div className="p-3 rounded bg-secondary fs-1 mx-1">
                <i className="far fa-clock"></i>
            </div>

            <div className="p-3 rounded bg-secondary fs-1 mx-1">
                {props.hundredThousands}
            </div>

            <div className="p-3 rounded bg-secondary fs-1 mx-1">
                {props.tenThousands}
            </div>

            <div className="p-3 rounded bg-secondary fs-1 mx-1">
                {props.thousands}
            </div>

            <div className="p-3 rounded bg-secondary fs-1 mx-1">
                {props.hundreds}
            </div>

            <div className="p-3 rounded bg-secondary fs-1 mx-1">
                {props.tens}
            </div>

            <div className="p-3 rounded bg-secondary fs-1 mx-1">
                {props.units}
            </div>
        </div>
    );
};

export default Counter;
