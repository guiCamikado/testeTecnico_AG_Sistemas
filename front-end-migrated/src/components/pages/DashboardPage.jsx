import { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";
import Cookie from "../../services/Cookies";
import { href } from "react-router-dom";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [tokenParsed, setTokenParsed] = useState(null); // ⬅ salvando token para usar no form

  const [form, setForm] = useState({
    empresa: "",
    razao: "",
    username: "",
    foreignKey: "",
  });

  useEffect(() => {
    const token = Cookie.getCookie("loginToken");

    if (!token) {
      window.location.replace("/login");
      return;
    }

    try {
      const parsed = JSON.parse(token);
      setTokenParsed(parsed);
      setUser(parsed.username);

      // já preenche user e id no form
      setForm(prev => ({
        ...prev,
        username: parsed.username,
        foreignKey: parsed.id
      }));

    } catch {
      window.location.replace("/login");
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Form enviado:", form);

    try {
      const response = await ApiService.postRequest("/api_intent/register", form);
      alert("Formulário enviado com sucesso!");
      console.log("Resposta:", response);
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar formulário.");
    }
  }

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-black via-gray-900 to-gray-700 p-6 text-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold">Painel do Usuário</h2>
        {user && <p className="bg-gray-800 px-4 py-2 rounded">Bem-vindo, {user}</p>}
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow w-full max-w-lg mx-auto">
        <h3 className="text-lg font-semibold mb-4">Formulário de Intenção</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-1">Empresa</label>
            <input
              type="text"
              name="empresa"
              value={form.empresa}
              onChange={handleChange}
              className="p-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Razão</label>
            <input
              type="text"
              name="razao"
              value={form.razao}
              onChange={handleChange}
              className="p-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          >
            Enviar formulário
          </button>
        </form>

        <button
          type="submit"
          className="mt-4 w-full bg-red-700 hover:bg-red-900 text-white font-semibold py-2 rounded transition"
          onClick={() => window.location.replace("/intentions")
}
        >
          Vai para aceitação
        </button>
      </div>
    </div>
  );
}
