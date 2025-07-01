import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex flex-column align-items-center justify-content-center px-3"
      style={{
        background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
        overflow: "hidden",
        zIndex: 9999,
      }}
    >
      <div
        className="surface-card p-4 shadow-4 border-round-lg w-full sm:w-30rem text-center"
        style={{ background: "#fff" }}
      >
        <h1 className="text-5xl font-bold mb-3 text-blue-400">404</h1>
        <h2 className="text-2xl font-bold mb-2 text-blue-500">
          Página não encontrada
        </h2>
        <p className="mb-4 text-blue-700">
          A página que você está procurando não existe.
        </p>
        <button
          onClick={() => navigate("/")}
          className="p-button p-component p-button-info px-5 py-2 text-lg font-bold"
        >
          Voltar para Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
