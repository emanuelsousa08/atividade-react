import React from "react";
import "primeflex/primeflex.css";
import "primeflex/themes/primeone-light.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";

const Contact = () => {
  return (
    <div
      className="flex flex-column align-items-center justify-content-center min-h-screen px-3"
      style={{
        background: "linear-gradient(135deg, #f0faff 0%, #e0f2fe 100%)",
      }}
    >
      <div className="surface-card p-4 shadow-4 border-round-lg w-full sm:w-30rem text-center">
        <h1 className="text-3xl font-bold mb-3 text-green-600">Contato</h1>
        <p className="mb-3">
          Tem alguma dúvida, sugestão ou deseja falar conosco?
        </p>
        <p className="mb-3">
          Envie um e-mail para{" "}
          <span className="text-primary font-semibold">suporte@mail.com</span>
        </p>
        <p className="mb-4">Ou preencha o formulário abaixo:</p>
        <form>
          <input
            type="text"
            placeholder="Seu nome"
            className="p-inputtext p-component w-full mb-2"
            style={{ minHeight: 40 }}
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="p-inputtext p-component w-full mb-2"
            style={{ minHeight: 40 }}
          />
          <textarea
            placeholder="Sua mensagem"
            className="p-inputtext p-component w-full mb-3"
            rows={4}
            style={{ resize: "vertical" }}
          />
          <button
            type="submit"
            className="p-button p-component p-button-success px-5 py-2 text-lg font-bold w-full"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
