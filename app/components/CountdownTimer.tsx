"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string; // ISO format date string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="card-gastromotor px-6 py-4 rounded-lg w-24">
        <div className="text-4xl font-bold text-yellow-500">{days < 10 ? `0${days}` : days}</div>
        <div className="text-orange-500">Días</div>
      </div>
      <div className="card-gastromotor px-6 py-4 rounded-lg w-24">
        <div className="text-4xl font-bold text-yellow-500">{hours < 10 ? `0${hours}` : hours}</div>
        <div className="text-orange-500">Horas</div>
      </div>
      <div className="card-gastromotor px-6 py-4 rounded-lg w-24">
        <div className="text-4xl font-bold text-yellow-500">{minutes < 10 ? `0${minutes}` : minutes}</div>
        <div className="text-orange-500">Minutos</div>
      </div>
      <div className="card-gastromotor px-6 py-4 rounded-lg w-24">
        <div className="text-4xl font-bold text-yellow-500">{seconds < 10 ? `0${seconds}` : seconds}</div>
        <div className="text-orange-500">Segundos</div>
      </div>
    </div>
  );
} 