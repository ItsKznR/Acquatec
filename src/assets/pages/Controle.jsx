import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Controle.css';

function Controle() {
  const [isOn, setIsOn] = useState(false);
  const [pressure, setPressure] = useState(50); // Mantém o valor da pressão atual

  const toggleControl = () => {
    if (!isOn) {
      // Se o controle estiver desligado, e for ligado, resete a pressão para 0
      setPressure(0);
    }
    // Alterna o estado do controle
    setIsOn(prevState => !prevState);
  };

  const handlePressureChange = (event) => {
    setPressure(event.target.value);
  };

  return (
    <div className="controle-container">
      <Link to="/" className="back-button" aria-label="Back to home">
        <span className="back-button-icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13 16l-4-4 4-4m-7 4h14" />
          </svg>
        </span>
      </Link>

      <button
        className={`control-button ${isOn ? 'on' : 'off'}`}
        onClick={toggleControl}
        aria-pressed={isOn}
      >
        {isOn ? 'On' : 'Off'}
      </button>

      {isOn && (
        <div className="pressure-controller">
          <h2>Manômetro de Pressão</h2>
          <div className="controller">
            <div className="pressure-gauge">
              <div className="gauge-circle">
                <div
                  className="gauge-needle"
                  style={{ transform: `rotate(${(pressure * 1.8 - 90)}deg)` }}
                  aria-label={`Gauge needle at ${pressure}%`}
                ></div>
                <div className="gauge-center" aria-hidden="true"></div>
              </div>
              <div className="pressure-value">{pressure}%</div>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              className="range-slider" 
              value={pressure}
              onChange={handlePressureChange}
              aria-label="Pressure Control"
              aria-valuenow={pressure}
              aria-valuemin="0"
              aria-valuemax="100"
            />
            <div className="percentage-indicator">
              <div className="percentage-bar">
                <div 
                  className="percentage-fill" 
                  style={{ width: `${pressure}%` }}
                  aria-label={`${pressure}%`}
                />
              </div>
              {pressure}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Controle;
