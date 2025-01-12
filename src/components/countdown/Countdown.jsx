import React, { useState, useEffect, useCallback } from 'react';
import "./Countdown.css"

// Utility function to calculate the time left
const calculateTimeLeft = (targetDate) => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
};

// Timer component to display individual time units
const TimerComponent = ({ value, unit }) => {
    if (value === undefined) return null;
    return (
        <div className='timer-component'>
            <div className='timer-value'>{value}</div>
            <div className='timer-unit'>{unit}</div> 
        </div>
    );
};

// Countdown component
const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    const updateTimer = useCallback(() => {
        setTimeLeft(calculateTimeLeft(targetDate));
    }, [targetDate]);

    useEffect(() => {
        const timer = setInterval(updateTimer, 1000);
        return () => clearInterval(timer);
    }, [updateTimer]);


    return (
        <div className='timer-container'>
            <TimerComponent value={timeLeft.days} unit={"DAYS"}/>
            <TimerComponent value={timeLeft.hours} unit={"HOURS"}/>
            <TimerComponent value={timeLeft.minutes} unit={"MINUTES"}/>
            <TimerComponent value={timeLeft.seconds} unit={"SECONDS"}/>
        </div>
    );
};

export default Countdown;