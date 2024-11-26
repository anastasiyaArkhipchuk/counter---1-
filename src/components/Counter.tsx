import React from "react";
import {Button} from "./Button";

type CounterPropsType = {
    count: number;
    increment: () => void;
    reset: () => void;
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div>
            <div>
                {props.count}
            </div>
            <div>
                <Button onClick={props.increment}  title = {"inc"}/>
                <Button onClick={props.reset}  title = {"reset"}/>
            </div>
        </div>
    )
}

