import React from "react";
import "primeflex/primeflex.css";
import "primeflex/themes/primeone-light.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";

const About = () => {
  return (
    <div
      className="flex flex-column align-items-center justify-content-center min-h-screen px-3"
      style={{
        background: "linear-gradient(135deg, #f0faff 0%, #e0f2fe 100%)",
      }}
    >
      <div className="surface-card p-4 shadow-4 border-round-lg w-full sm:w-30rem text-center">
        <h1 className="text-3xl font-bold mb-3 text-green-600">Sobre</h1>
        <p className="mb-2">
          Esta aplicação foi desenvolvida para exibir uma lista de produtos
          obtidos via API, utilizando a FakestoreAPI como fonte de dados.
        </p>
        <p className="mb-2 font-medium">Tecnologias utilizadas:</p>
        <ul className="list-none p-0 mb-3">
          <li className="mb-1 text-primary font-semibold">React</li>
          <li className="mb-1 text-primary font-semibold">Vite</li>
          <li className="mb-1 text-primary font-semibold">React Router</li>
          <li className="mb-1 text-primary font-semibold">PrimeReact</li>
          <li className="mb-1 text-primary font-semibold">Axios</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
