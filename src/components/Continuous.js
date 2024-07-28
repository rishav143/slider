import React, { useEffect, useState } from 'react';
import './Slider.css';

export default function Continuous({ subtype, size, handleClick }) {
  const [value, setValue] = useState(0);
  
  const handleSlider = (e) => {
    setValue(e.target.value);
    handleClick(e)
  };

  return (
    <div className="slider-container">
      <style>
        {`
          .slider::-webkit-slider-thumb {
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
        min={0}
        max={100}
        value={value}
        step={1}
        onChange={handleSlider}
        className= "slider"
        style={{ background: `linear-gradient(to right, #47B647 ${value}%, #F2F3F5 ${value}%)` }}
      />
      <h1>{value}</h1>
    </div>
  );
}
