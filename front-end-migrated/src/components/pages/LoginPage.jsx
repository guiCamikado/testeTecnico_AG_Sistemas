import { useState } from "react";
import { Link } from "react-router-dom";
import ApiService from "../../services/ApiService";
import Cookies from "../../services/Cookies";

export default function LoginPage() {
  const [form, setForm] = useState({
    user: "",
    password: "",
    rememberMe: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await ApiService.postRequest("/api_user/login", {
        username: form.user,
        password: form.password
      });

      // salva token no localStorage
      localStorage.setItem("loginToken", JSON.stringify(response));
      Cookies.setCookie("loginToken", JSON.stringify(response), 7, "/")
      window.location.replace("/dashboard")
    }
    catch (error) {
      console.error("Erro ao logar:", error);
      alert("Usuário ou senha incorretos");
    }
  }

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-black via-gray-900 to-gray-700 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm space-y-6"
      >
        <h1 className="text-white text-2xl font-semibold text-center">Login</h1>

        {/* Usuário */}
        <div className="flex flex-col text-white">
          <label htmlFor="usuario" className="mb-1">Usuário</label>
          <input
            type="text"
            id="usuario"
            name="user"
            value={form.user}
            onChange={handleChange}
            className="p-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-400"
            required
          />
        </div>

        {/* Senha */}
        <div className="flex flex-col text-white">
          <label htmlFor="senha" className="mb-1">Senha</label>
          <input
            type="password"
            id="senha"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="p-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-400"
            required
          />
        </div>

        {/* Remember me */}
        <label className="flex items-center text-white gap-2">
          <input
            type="checkbox"
            name="rememberMe"
            checked={form.rememberMe}
            onChange={handleChange}
            className="h-4 w-4"
          />
          Lembrar-me
        </label>

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
        >
          Conectar
        </button>

        {/* Link registro */}
        <p className="text-gray-300 text-sm text-center">
          Ainda não possui conta?
          <Link to="/registro" className="text-blue-400 hover:underline ml-1">
            Registre-se
          </Link>
        </p>
      </form>
    </div>
  );
}
