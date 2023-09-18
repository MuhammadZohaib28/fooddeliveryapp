"use client";
import { useEffect, useState } from "react";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("09/19/2023 23:59:59");
    const interval = setInterval(() => {
      const now = new Date();
      const differnce = target.getTime() - now.getTime();

      const dayss = Math.floor(differnce / (1000 * 60 * 60 * 24));
      setDays(dayss);

      const hourss = Math.floor(
        (differnce % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(hourss);

      const minutess = Math.floor((differnce % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(minutess);

      const secondss = Math.floor((differnce % (1000 * 60)) / 1000);
      setSeconds(secondss);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" font-extrabold text-5xl text-yellow-400 md:text-7xl">
      {days >= 1 ? <span>{days}:</span> : <span></span>}
      <span>{hours}</span>
      <span>:{minutes}</span>
      <span>:{seconds}</span>
    </div>
  );
};

export default Countdown;
