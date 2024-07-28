import React, { useEffect, useState } from 'react';
import './Slider.css';

export default function Discrete({ subtype, steps, size, handleClick }) {
  const [value, setValue] = useState(0);
  const [ticks, setTicks] = useState([])
  useEffect(() => {
    const initialTicks = [];
    for (let i = 0; i <= 100; i += steps) {
      initialTicks.push(
        <div
          key={i}
          className="tick"
          style={{ left: `${i}%`, backgroundColor: '#47B647' }}
        ></div>
      );
    }
    setTicks(initialTicks);
    const newlist = []
    for (var i = 0; i <= 100; i += steps) {
      newlist.push(
        <div
          key={i}
          className={`tick`}
          style={{ left: `${i}%`, backgroundColor: `${i <= value ? '#FFFFFF' : '#47B647'}` }}
        ></div>
      )
    }
    setTicks(newlist)
  }, [steps, value]);

  const handleSlider = (e) => {
    const newValue = Number(e.target.value)
    setValue(newValue)
    handleClick(e)
  }

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
            .ticks {
              position: absolute;
              top: 8px;
              padding: 0px 10px;
              width: 460px;
              display: flex;
              justify-content:space-between;
              pointer-events: none;
          }

          .tick {
              width: 4px;
              height: 4px;
              border-radius: 40px;
              background-color: #47B647;
          }
        `}
      </style>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        step={steps}
        onChange={handleSlider}
        className="slider"
        style={{ background: `linear-gradient(to right, #47B647 ${value}%, #F2F3F5 ${value}%)` }}
      />
      <div className="ticks">{ticks}</div>
      <h1>{value}</h1>
    </div>
  );
}

