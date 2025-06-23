import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const CreaturesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Criaturas</h1>
      <button
        onClick={() => navigate("/reports")}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Ir para Relatos
      </button>
    </div>
  );
};

const ReportsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Relatos</h1>
      <button
        onClick={() => navigate("/reports/create")}
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mt-6"
      >
        Criar meu próprio relato
      </button>
    </div>
  );
};

const CreateReportPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Criar Relato</h1>
      <p>Aqui vai o formulário para o usuário criar o relato.</p>
    </div>
  );
};

const LoginPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
    </div>
  );
};

const SignUpPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Cadastro</h1>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreaturesPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/reports/create" element={<CreateReportPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}