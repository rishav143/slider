import React, { useState } from 'react';
import './RangeSlider.css';

export default function Range({type, steps, handleClick}) {
  const setSteps = type === "Discrete" ? steps : "1"
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(80);

  const handleMin = (e) => {
    const value = Math.min(Number(e.target.value), max - 3);
    setMin(value);
    handleClick(e)
  };

  const handleMax = (e) => {
    const value = Math.max(Number(e.target.value), min + 3);
    setMax(value);
    handleClick(e)
  };

  return (
    <div className="range-slider-container">
      <input
        type="range"
        min="0"
        step={setSteps}
        max="100"
        value={min}
        onChange={handleMin}
        className="slider-thumb slider-thumb-min"
      />
      <input
        type="range"
        min="0"
        step={setSteps}
        max="100"
        value={max}
        onChange={handleMax}
        className="slider-thumb slider-thumb-max"
      />
      <div className="slider-track">
        <div className="slider-range" style={{ left: `${min}%`, width: `${max - min}%` }}></div>
      </div>
      <div className="values">
        <span>Min: {min}</span>
        <span>Max: {max}</span>
        {type==="Discrete" && <span>step:{steps}</span>}
      </div>
    </div>
  );
}