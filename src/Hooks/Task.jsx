import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';

const Task = () => {
    useLayoutEffect(() => {
        alert("Component will mount");
    }, []); 

    const [runs, setRuns] = useState(0);
    const [total, setTotal] = useState(0);
    const [balls, setBalls] = useState(0);

    const runRef = useRef();

    const GO = () => {
        const selectedRuns = Number(runRef.current.value);

        alert('Waiting 5 seconds to update the score!');

        setTimeout(() => {
            setRuns(selectedRuns);
            setTotal(total + selectedRuns);
            setBalls(balls + 1);
        }, 5000);
    };

    useEffect(() => {
        if (runs > 0) {
            alert(`Rahul scored ${runs} runs!`);
        }
    }, [runs]);

    useEffect(() => {
        return () => {
            alert("Component will unmount");
        };
    }, []); 

    return (
        <div>
            Rahul : Runs:
            <select ref={runRef}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            <button onClick={GO}>Go</button>
            <div>
                Scoreboard:
                <p>Runs Scored: <span>{runs}</span></p>
                <p>Balls faced: <span>{balls}</span></p>
                <p>Total Score: <span>{total}</span></p>
            </div>
        </div>
    );
};

export default Task;
