import React, { useState } from 'react';
import './RangeSlider.css';

export default function Range({type, steps, size, handleClick}) {
  const setSteps = type === "Discrete" ? steps : "1"
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(80);

  const handleMin = (e) => {
    const value = Math.min(Number(e.target.value), max);
    setMin(value);
    handleClick(e)
  };

  const handleMax = (e) => {
    const value = Math.max(Number(e.target.value), min);
    setMax(value);
    handleClick(e)
  };

  //handle min max during click event on slider  
  const handleTrackClick = (e) => {
    const val = e.clientX - 35;
    const newValue = (val / 480) * 100;

    if(newValue < (min + max)/2) {
      let rem = newValue % steps
      if (rem === 0) setMin(newValue)
        else setMin(newValue - rem)
    } else {
      let rem = newValue % steps
      if (rem === 0) setMax(newValue)
      else {
        let val = newValue - rem
        setMax(val + steps)
      }
    }
  };

  return (
    <div className="range-slider-container">
      <style>
        {`
          .slider-thumb::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: ${size === "Size_24" ? `24px` : `32px`};
            height: ${size === "Size_24" ? `24px` : `32px`};
            border-radius: 50%;
            border: ${size === "Size_24" ? `6px` : `8px`} solid #FFFFFF;
            background: #47B647;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.24);
            cursor: pointer;
            position: relative;
            z-index: 1;
          }
        `}
      </style>
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
      <div className="slider-track" onClick={handleTrackClick}>
        <div className="slider-range" style={{ left: `${min}%`, width: `${max - min}%` }}></div>
      </div>
      <div className="values">
        <h1>Min: {min}</h1>
        <h1>Max: {max}</h1>
        {type==="Discrete" && <h1>step:{steps}</h1>}
      </div>
    </div>
  );
}