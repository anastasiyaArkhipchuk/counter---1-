import React from "react";

type CounterProps = {
    count: number;
    increment: () => void;
    reset: () => void;
}

export const Counter = (props: CounterProps) => {
    return (
        <div>
            <div> {props.count} </div>
            <button onClick={props.increment}>inc</button>
            <button onClick={props.reset}>reset</button>
        </div>
    )
}