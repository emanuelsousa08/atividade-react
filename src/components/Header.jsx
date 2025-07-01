import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="flex align-items-center justify-content-between px-5 py-3 shadow-2 mb-4">
    <span className="font-bold text-xl text-primary">Minha Loja</span>
    <nav className="flex gap-4">
      <Link
        to="/"
        className="text-primary font-medium hover:text-blue-800 no-underline"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-primary font-medium hover:text-blue-800 no-underline"
      >
        Sobre
      </Link>
      <Link
        to="/contact"
        className="text-primary font-medium hover:text-blue-800 no-underline"
      >
        Contato
      </Link>
    </nav>
  </header>
);

export default Header;
