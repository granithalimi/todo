"use client";

import { useEffect, useState } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);

  const handleTwentie = () => {
    setTime(1500);
  };
  const handleFifty = () => {
    setTime(3000);
  };

  useEffect(() => {
    if (started && time > 0) {
      // eslint-disable-next-line no-var
      var intervalId = setInterval(() => {
        setTime((p) => p - 1);
      }, 1000);
    } else if (started && time === 0) {
      const audio = new Audio("/sounds/alarm.mp3");
      audio.play();
      setStarted(() => false);
      return;
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [started, time]);

  const startClicked = () => {
    if (!started && time <= 0) {
      setStarted(() => false);
      return;
    }
    setStarted(() => true);
  };
  return (
    <div className="w-full flex flex-col items-center gap-5 pb-10">
      {/* buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => handleTwentie()}
          className="px-4 py-1 rounded-lg text-white font-extrabold bg-blue-400 hover:bg-blue-500 duration-300"
        >
          25:5
        </button>
        <button
          onClick={() => handleFifty()}
          className="px-4 py-1 rounded-lg text-white font-extrabold bg-blue-400 hover:bg-blue-500 duration-300"
        >
          50:10
        </button>
      </div>
      <div className="flex flex-col bg-white rounded-xl px-32 py-10">
        <div>
          <h1 className=" text-4xl font-extrabold">
            00:
            {time / 60 < 10
              ? `0${Math.trunc(time / 60)}`
              : Math.trunc(time / 60)}
            :{time % 60 < 10 ? `0${time % 60}` : time % 60}
          </h1>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <button
            onClick={() => setStarted(() => false)}
            className="text-white font-extrabold px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 duration-300"
          >
            Stop
          </button>
          <button
            onClick={() => startClicked()}
            className="text-white font-extrabold px-3 py-1 rounded-lg bg-green-400 hover:bg-green-500 duration-300"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
