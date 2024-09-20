import { useState, useRef } from "react";

import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timeInterval = useRef(null);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    timeInterval.current = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
  };

  const handlePause = () => {
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(timeInterval.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(timeInterval.current);
    setTimer(0);
  };

  const formatTime = (timer) => {
    const minutes = Math.floor(timer / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((timer / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const milliseconds = (timer % 1000).toString().padStart(3, "0");
    return { minutes, seconds, milliseconds };
  };

  const { minutes, seconds, milliseconds } = formatTime(timer);
  return (
    <>
      <div className="timer-container">
        <div style={{ display: "flex" }}>
          <div className="timer-box">
            <h1>{minutes}</h1>
          </div>
          <span className="colon">:</span>
          <div className="timer-box">
            <h1>{seconds}</h1>
          </div>
          <span className="colon">:</span>
          <div className="timer-box">
            <h1>{milliseconds}</h1>
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", gap: "10px" }}>
          <div style={{ marginBottom: "10px" }}>
            <button onClick={handleStart} style={{ width: "100%" }}>
              Start
            </button>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <button onClick={handlePause} style={{ width: "100%" }}>
              Pause
            </button>
          </div>
          <div>
            <button onClick={handleReset} style={{ width: "100%" }}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
