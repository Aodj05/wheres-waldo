import React, { useState, useEffect } from "react";

const Timer = ({ isActive, setTimerValue, buildTimeString }) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
                setTimerValue(seconds);
            }, 1000);
        } else if (!isActive && seconds !==0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return <div className="display-timer">{buildTimeString(seconds)}</div>
};

wxport default Timer;