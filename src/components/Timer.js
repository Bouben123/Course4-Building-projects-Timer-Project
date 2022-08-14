import React, { useEffect, useState } from 'react';

const Timer = ({name}) => {
    const [seconds , setSeconds] = useState('60');
    const [isCountDownRunning, setIsCountDownRunning] = useState(false);
    const [shouldAlert, setShouldAlert] = useState(false);

    useEffect(() => {
        const secondsLeft = parseInt(seconds);
        if(isCountDownRunning && secondsLeft > 0){
            setTimeout(() =>{
                setSeconds(secondsLeft - 1)
            }, 1000)
        }else{
            if(shouldAlert){
                alert(`the countdown is over for this timer ${name}`)
                setShouldAlert(false)
            }
            setIsCountDownRunning(false)
        }
    }, [isCountDownRunning,seconds])

  return (
    <div className="Timer">
        This is a {name}
        <input 
            disabled={isCountDownRunning}
            type="number"
            value={seconds}
            onChange={(event) => {setSeconds(event.target.value)}}
        />    
        <button onClick={() => {
            setIsCountDownRunning(true)
            setShouldAlert(true)
        }}>
            Start Countdown
        </button>
    </div>
  );
}

export default Timer;