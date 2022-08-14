import React, { useState } from 'react';
import Timer from './Timer';

const TimerManager = () => {
    
    const [timerNames, setTimerNames] =useState([
        "Workout",
        "chicken",
        "Meditation"
    ])
    const [name ,setName]=useState("")
  return (
    <div>
        <form onSubmit={(event) => {
            event.preventDefault()

            const copyOfTimerNames = [...timerNames]
            copyOfTimerNames.push(name)
            setTimerNames(copyOfTimerNames)
            setName("")
        }}>
            <input value={name} onChange={(event) => {
                setName(event.target.value)
            }} />
            <button>Add New Timer</button>

        </form>
      {timerNames.map(timerNames => (
        <Timer name={timerNames} />
      ))}
    </div>
  );
}

export default TimerManager;
