import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 
import fundoImg from './assets/fundo.jpg';


function App() {
  const bubbleContainerRef = useRef(null);

  useEffect(() => {
    const container = bubbleContainerRef.current;
    const numberOfBubbles = 20; // Número de bolhas

    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.width = `${Math.random() * 20 + 10}px`; // Tamanho variável das bolhas
      bubble.style.height = bubble.style.width; // Mantém a forma circular
      bubble.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
      bubble.style.animationDuration = `${Math.random() * 5 + 3}s`; // Duração variável para diferentes velocidades

      container.appendChild(bubble);

      // Remove a bolha após a animação
      setTimeout(() => {
        container.removeChild(bubble);
      }, parseFloat(bubble.style.animationDuration) * 1000); // Usa o tempo de duração da animação
    };

    // Cria uma nova bolha a cada 300ms
    const intervalId = setInterval(createBubble, 300);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${fundoImg})` }}
    >
      <div className="bubble-container" ref={bubbleContainerRef} />
      <Link
        to="/controle"
        className="text-white text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] font-bold font-rubik title-hover-effect cursor-pointer text-center"
      >
        {'Acquatec'.split('').map((letter, index) => (
          <span key={index} className="letter inline-block">
            {letter}
          </span>
        ))}
      </Link>
    </div>
  );
}

export default App;
