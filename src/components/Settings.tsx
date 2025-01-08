import React, {ChangeEvent, useState} from "react";

type SettingsPropsType = {
    startValueChange: (newStartValue: string) => void;
    maxValueChange: (newMaxValue: string) => void;
    startValue: string;
    maxValue: string;
    setCounter: () => void;
    disabled: boolean;
}

export const Settings = (props: SettingsPropsType) => {

    const [maxValue, setMaxValue] = useState<string>('5');
    const [startValue, setStartValue] = useState<string>('0');

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = e.target.value;
        setMaxValue(newMaxValue);
        props.maxValueChange(newMaxValue)
    }

    const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartValue = e.target.value;
        setStartValue(newStartValue);
        props.startValueChange(newStartValue);
    }

    const onClickHandler =( )=> {
        props.maxValueChange(maxValue)
        props.startValueChange(startValue)
        localStorage.setItem('maxValue', maxValue);
        localStorage.setItem('startValue', startValue);
        props.setCounter()
    }

    return (
        <div>
            <span>max value: </span>
            <input value={props.maxValue} type="number" onChange={changeMaxValueHandler}/>
            <span>start value: </span>
            <input value={props.startValue} type="number" onChange={changeStartValueHandler}/>
            <button onClick={onClickHandler} disabled={props.disabled}>set</button>
        </div>
    )
}