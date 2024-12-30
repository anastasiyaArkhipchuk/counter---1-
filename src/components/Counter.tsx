import React from "react";

type CounterProps = {
    count: string;
    increment: () => void;
    reset: () => void;
    disabled: boolean;
}

export const Counter = (props: CounterProps) => {
    return (
        <div>
            <div> {props.count} </div>
            <button onClick={props.increment} disabled={props.disabled}>inc</button>
            <button onClick={props.reset} disabled={props.disabled}>reset</button>
        </div>
    )
}