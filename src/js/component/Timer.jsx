import React from 'react'
import { useState, useEffect, useMemo } from 'react'

function Timer() {

    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [inputHistory, setInputHistory] = useState([])
    const [inputValues, setInputValues] = useState({
        minutes: "",
        seconds: "",
    })
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const [hasFinished, setHasFinished] = useState(false)
    const [isPaused, setIsPaused] = useState(false)


    const beep = useMemo(() => {
        const audio = new Audio(
            'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
        )
        audio.volume = 0.1
        return audio
    }, [])


    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setTime((time) => time - 1)
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [isRunning])

    useEffect(() => {
        if (time === 0) {
            setIsRunning(false)
            setHasFinished(true)
            beep.play()
        }
    }, [time, beep])


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setInputValues((inputValues) => ({
            ...inputValues,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { minutes, seconds } = inputValues
        const time = minutes * 60 + seconds * 1
        setTime(time)
        setInputHistory((inputHistory) => [time, ...inputHistory].slice(0, 5))
    }


    const handleStart = () => {
        if (time === 0){ return alert('Timer cannot be set to 0')} 
        setIsRunning(true)
        setIsPaused(false)
    }

    const handlePause = () => {
        setIsRunning(false)
        setIsPaused(true)
    }

    const handleReset = () => {
        setTime(0)
        setIsRunning(false)
        setIsPaused(false)
    }

   
    useEffect(() => {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        setMinutes(minutes)
        setSeconds(seconds)
    }, [time])

    return (
        <div className="TimerContainer">
            <h1>Timer</h1>
            <div className="Digits">
                <h2>
                    {minutes < 10 ? `0${minutes}` : minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                </h2>
            </div>
            <div className="timer__controls">
                <div className='TimerInputs'>
                <form onSubmit={handleSubmit}>
                    <input
                    className='TimerInput'
                        type="number"
                        max={59}
                        min={0}
                        name="minutes"
                        value={inputValues.minutes}
                        onChange={handleInputChange}
                        disabled={isRunning}
                        placeholder='Minutes'
                    />
                    <input
                    className='TimerInput'
                        type="number"
                        max={59}
                        min={0}
                        name="seconds"
                        value={inputValues.seconds}
                        onChange={handleInputChange}
                        disabled={isRunning}
                        placeholder='seconds'
                    />
                    <button type="submit" className='TimerButton Set'>Set</button>
                </form>
                </div>
            <div className='TimerBtnGroup'>
                 <button  className="TimerButton" onClick={handleStart} disabled={isRunning}>
                    Start
                </button>
                <button className="TimerButton" onClick={handlePause} disabled={!isRunning}>
                    Pause
                </button>
                <button className="TimerButton" onClick={handleReset} disabled={!isRunning && !isPaused}>
                    Reset
                </button>
            </div>
            </div>
           <div className='HistoryTitle'><h2>History</h2></div>
            <div className="TimerHistory">
                <ul>
                    {inputHistory.map((time, index) => {
                        const minutes = Math.floor(time / 60)
                        const seconds = time % 60
                        return (
                            <>
                            <li key={index}>
                                {minutes < 10 ? `0${minutes}` : minutes}:
                                {seconds < 10 ? `0${seconds}` : seconds}
                            </li>
                            <hr key={index}/>
                            </>
                        )
                    }
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Timer
