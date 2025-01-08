import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";

function App() {

    const [count, setCount] = useState<string>('0');
    const [maxValue, setMaxValue] = useState<string>('5');
    const [startValue, setStartValue] = useState<string>('0');
    const [disabled, setDisabled] = useState<boolean>(true);



    useEffect(() => {
        let newMax = localStorage.getItem("maxValue")
        if (newMax){
            setMaxValue(newMax)
        }
        let newStart = localStorage.getItem("startValue")
        if (newStart){
            setStartValue(newStart)
        }
    }, []);




    function increment() {
        if (parseInt(count) < parseInt(maxValue)) {
            let newCount = (parseInt(count) + 1).toString();
            setCount(newCount);
        }
    }

    function reset() {
        setCount(startValue);
    }

    function setCounter() {
        setCount(startValue);
        setDisabled(true)

    }

    function startValueChange(newStartValue: string) {
        if (parseInt(newStartValue)<0) {
            setCount("Incorrect Value");
            setDisabled(true)
        }else{
            setCount("inter values and press \"set\"");
            setDisabled(false)
        }
        setStartValue(newStartValue);
    }

    function maxValueChange(newMaxValue: string) {
        if (parseInt(startValue) > parseInt(newMaxValue)) {
            setCount("Incorrect Value");
            setDisabled(true)
        }else{
            setCount("inter values and press \"set\"");
            setDisabled(false)
        }
        setMaxValue(newMaxValue);
    }

    return (
        <div>
            <Settings
                startValueChange={startValueChange}
                maxValueChange={maxValueChange}
                maxValue={maxValue}
                startValue={startValue}
                setCounter={setCounter}
                disabled={disabled}
            />

            <Counter count={count}
                     increment={increment}
                     reset={reset}
                     disabled={disabled}
                     maxValue={maxValue}
            />
        </div>
    );
}

export default App;
