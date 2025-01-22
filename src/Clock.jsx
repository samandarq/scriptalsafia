import React, { useEffect, useState } from "react";
 

const Clock = () => {
  const [currentTime, setCurrentTime] = useState({
    hours: "",
    minutes: "",
    seconds: "",
    day: "",
    date: "",
    month: "",
    year: "",
    weekday: "",
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const day = now.getDate();
      const month = now.getMonth() + 1; // JavaScriptda oy 0 dan boshlanadi
      const year = now.getFullYear();
      const weekdayIndex = now.getDay(); // 0 - Yakshanba, 1 - Dushanba va hokazo
      const daysOfWeek = [
        "Yakshanba", "Dushanba", "Seshanba", "Chorshanba", 
        "Payshanba", "Juma", "Shanba"
      ];
      const weekday = daysOfWeek[weekdayIndex];

      setCurrentTime({
        hours,
        minutes,
        seconds,
        day,
        month,
        year,
        weekday,
      });
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      <div className="time">
        <p>{currentTime.hours < 10 ? `0${currentTime.hours}` : currentTime.hours}:{currentTime.minutes < 10 ? `0${currentTime.minutes}` : currentTime.minutes}:{currentTime.seconds < 10 ? `0${currentTime.seconds}` : currentTime.seconds}</p>
        <p>{currentTime.weekday}, {currentTime.day}/{currentTime.month}/{currentTime.year}</p>
      </div>
    </div>
  );
};

export default Clock;
