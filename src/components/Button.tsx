import React from "react";

type ButtonPropsType = {
    onClick: () => void;
    title: string;
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button onClick={props.onClick}>
            {props.title}
        </button>
    )
}