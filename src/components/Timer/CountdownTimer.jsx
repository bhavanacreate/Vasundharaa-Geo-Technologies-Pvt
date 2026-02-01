/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);
  const [paused, setPaused] = useState(false);
  const [endTime, setEndTime] = useState(null);

  // Restore timer on refresh
  useEffect(() => {
    const savedEnd = localStorage.getItem("timerEnd");
    const savedPaused = localStorage.getItem("timerPaused");
    const savedTime = localStorage.getItem("timerTime");

    if (savedEnd && !savedPaused) {
      const remaining = savedEnd - Date.now();
      if (remaining > 0) {
        setTime(remaining);
        setEndTime(savedEnd);
        setActive(true);
      }
    }

    if (savedPaused && savedTime) {
      setTime(Number(savedTime));
      setPaused(true);
    }
  }, []);

  // Timer running
  useEffect(() => {
    if (!active || paused) return;

    const interval = setInterval(() => {
      setTime(prev => {
        if (prev <= 10) {
          clearInterval(interval);
          // eslint-disable-next-line react-hooks/immutability
          reset();
          return 0;
        }
        return prev - 10;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [active, paused]);

  const start = () => {
    const end = Date.now() + time || Date.now() + 5000;
    setEndTime(end);
    setTime(time || 5000);
    setActive(true);
    setPaused(false);

    localStorage.setItem("timerEnd", end);
    localStorage.removeItem("timerPaused");
    localStorage.removeItem("timerTime");
  };

  const stop = () => {
    setPaused(true);
    setActive(false);
    localStorage.setItem("timerPaused", true);
    localStorage.setItem("timerTime", time);
    localStorage.removeItem("timerEnd");
  };

  const reset = () => {
    setActive(false);
    setPaused(false);
    setTime(0);
    setEndTime(null);
    localStorage.removeItem("timerEnd");
    localStorage.removeItem("timerPaused");
    localStorage.removeItem("timerTime");
  };

  return (
    <div className="card">
      <h2>Timer</h2>

      <h3 style={{ textAlign: "center", fontSize: 28 }}>
        {(time / 1000).toFixed(2)}s
      </h3>

      <div className="btn-row">
        {!active && !paused && (
          <button onClick={start}>Start</button>
        )}

        {active && (
          <button className="btn-secondary" onClick={stop}>
            Stop
          </button>
        )}

        {(active || paused) && (
          <button className="btn-secondary" onClick={reset}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
