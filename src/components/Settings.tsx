import React, {ChangeEvent} from "react";

type SettingsPropsType = {
    startValueChange: (newStartValue: string) => void;
    maxValueChange: (newMaxValue: string) => void;
    startValue: string;
    maxValue: string;
    setCounter: () => void;
    disabled: boolean;
}

export const Settings = (props: SettingsPropsType) => {

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = e.currentTarget.value
        props.maxValueChange(newMaxValue)
    }

    const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartValue = e.currentTarget.value
        props.startValueChange(newStartValue)
    }

    return (
        <div>
            <span>max value: </span>
            <input value={props.maxValue} type="number" onChange={changeMaxValueHandler}/>
            <span>start value: </span>
            <input value={props.startValue} type="number" onChange={changeStartValueHandler}/>
            <button onClick={props.setCounter} disabled={props.disabled}>set</button>
        </div>
    )
}