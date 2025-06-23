import React, { useState } from "react";

export const CreateReportPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [creature, setCreature] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Relato enviado:", { title, description, creature });

    setTitle("");
    setDescription("");
    setCreature("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Criar Relato</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
       
        <div>
          <label className="block font-medium mb-1" htmlFor="title">
            Título
          </label>
          <input
            id="title"
            type="text"
            placeholder="Digite o título do relato"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>


        <div>
          <label className="block font-medium mb-1" htmlFor="description">
            Descrição
          </label>
          <textarea
            id="description"
            placeholder="Conte a história detalhada aqui"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-red-500"
            rows={5}
            required
          />
        </div>

  
        <div>
          <label className="block font-medium mb-1" htmlFor="creature">
            Criatura relacionada
          </label>
          <select
            id="creature"
            value={creature}
            onChange={(e) => setCreature(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          >
            <option value="" disabled>
              Selecione a criatura
            </option>
            <option value="Saci">Saci</option>
            <option value="Curupira">Curupira</option>
            <option value="Boto-cor-de-rosa">Boto-cor-de-rosa</option>
            <option value="Caipora">Caipora</option>
        
          </select>
        </div>


        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors font-semibold"
        >
          Enviar Relato
        </button>
      </form>
    </div>
  );
};