import React from 'react';
import ReactDOM from 'react-dom/client'; // Atualização para a nova API de renderização
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Atualizado para a versão mais recente do React Router
import App from './App';
import Controle from './assets/pages/Controle'; // Importando o novo componente
import './index.css'; // Certifique-se de que o caminho está correto

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/controle" element={<Controle />} /> {/* Rota para a nova página */}
    </Routes>
  </Router>
);
