// src/components/Timer.js

import { useState, useEffect } from 'react';

const Timer = ({ initialTime } : { initialTime: number }) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / initialTime) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-14 h-14">
        <svg className="w-full h-full">
          <circle
            className="text-gray-300"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50%"
            cy="50%"
          />
          <circle
            className="text-red-600 transition-all duration-1000 ease-linear"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50%"
            cy="50%"
            style={{ transition: 'stroke-dashoffset 1s linear' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
          {timeLeft}
        </div>
      </div>
    </div>
  );
};

export default Timer;
