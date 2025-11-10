import { useState } from "react";
import { Link } from "react-router-dom";
import ApiService from "../../services/ApiService";

export default function RegistroPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    age: "",
    password: "",
    confirmation: "",
    terms: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.password !== form.confirmation) {
      alert("As senhas não conferem!");
      return;
    }

    if (!form.terms) {
      alert("Você precisa concordar com os termos de uso.");
      return;
    }

    ApiService.postRequest('/api_user/register', form);
    window.location.replace("/login")
  }

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-black via-gray-900 to-gray-700 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm space-y-6"
      >
        <h1 className="text-white text-2xl font-semibold text-center">
          Criar Conta
        </h1>

        <div className="flex flex-col text-white">
          <label className="mb-1" htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="p-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-400"
            required
          />
        </div>

        <div className="flex flex-col text-white">
          <label className="mb-1" htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="p-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-400"
            required
          />
        </div>

        <div className="flex flex-col text-white">
          <label className="mb-1" htmlFor="age">Idade</label>
          <input
            type="number"
            id="age"
            name="age"
            value={form.age}
            onChange={handleChange}
            className="p-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-400"
            min="1"
            required
          />
        </div>

        <div className="flex flex-col text-white">
          <label className="mb-1" htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="p-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-400"
            required
          />
        </div>

        <div className="flex flex-col text-white">
          <label className="mb-1" htmlFor="confirmation">Confirmar Senha</label>
          <input
            type="password"
            id="confirmation"
            name="confirmation"
            value={form.confirmation}
            onChange={handleChange}
            className="p-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-400"
            required
          />
        </div>

        <label className="flex items-center text-white gap-2 text-sm">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
            className="h-4 w-4"
          />
          <span>
            Li e concordo com os{" "}
            <Link to="/termosDeUso" className="text-blue-400 hover:underline">
              termos de uso
            </Link>
          </span>
        </label>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"
        >
          Criar nova conta
        </button>

        <p className="text-gray-300 text-sm text-center">
          Já possui uma conta?
          <Link to="/login" className="text-blue-400 hover:underline ml-1">
            Entrar
          </Link>
        </p>
      </form>
    </div>
  );
}
