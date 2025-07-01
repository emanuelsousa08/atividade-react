import React from "react";
import { useParams } from "react-router-dom";
import "primeflex/primeflex.css";
import "primeflex/themes/primeone-light.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";

const UserProfile = () => {
  const { id } = useParams();
  return (
    <div
      className="flex flex-column align-items-center justify-content-center min-h-screen px-3"
      style={{
        background: "linear-gradient(135deg, #f0faff 0%, #e0f2fe 100%)",
      }}
    >
      <div className="surface-card p-4 shadow-4 border-round-lg w-full sm:w-30rem text-center">
        <h1 className="text-3xl font-bold mb-3 text-green-600">
          Perfil do Usuário
        </h1>
        <p className="mb-2">Bem-vindo ao perfil do usuário!</p>
        <p className="mb-2 font-medium">
          ID do usuário: <span className="text-primary">{id}</span>
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
