import { useState, useEffect } from "react";
import ApiService from "../../services/ApiService";

export default function IntentionsPage() {
  const [intentions, setIntentions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadIntentions();
  }, []);

  async function loadIntentions() {
    try {
      const response = await ApiService.getRequest("/api_intent/get_intentions");
      setIntentions(response);
    } catch (error) {
      console.error("Erro ao carregar intenções:", error);
      alert("Erro ao carregar solicitações");
    } finally {
      setLoading(false);
    }
  }

  async function handleDecision(id, status) {
    try {
      await ApiService.getRequest(`/api_intent/get_intentions`);
      
      // Atualiza a lista removendo a intenção processada
      setIntentions(prev => prev.filter(intention => intention.id !== id));
      alert(`Solicitação ${status === "accepted" ? "aceita" : "recusada"} com sucesso!`);
    } catch (error) {
      console.error("Erro ao processar solicitação:", error);
      alert("Erro ao processar decisão");
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen w-screen bg-gradient-to-r from-black via-gray-900 to-gray-700 flex items-center justify-center">
        <p className="text-white text-xl">Carregando solicitações...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-black via-gray-900 to-gray-700 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-3xl font-semibold text-center mb-8">
          Solicitações Pendentes
        </h1>

        {intentions.length === 0 ? (
          <p className="text-gray-300 text-center text-lg">
            Nenhuma solicitação pendente
          </p>
        ) : (
          <div className="space-y-6">
            {intentions.map((intention) => (
              <div
                key={intention.id}
                className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                  {/* Informações do Usuário */}
                  <div className="flex flex-col">
                    <label className="text-gray-400 text-sm">Usuário</label>
                    <p className="font-medium">{intention.username}</p>
                  </div>

                  {/* Empresa */}
                  <div className="flex flex-col">
                    <label className="text-gray-400 text-sm">Empresa</label>
                    <p className="font-medium">{intention.empresa}</p>
                  </div>

                  {/* Razão */}
                  <div className="flex flex-col md:col-span-3">
                    <label className="text-gray-400 text-sm">Motivo</label>
                    <p className="font-medium mt-1">{intention.reason}</p>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex gap-4 mt-6 justify-end">
                  <button
                    onClick={() => handleDecision(intention.id, "rejected")}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition"
                  >
                    Recusar
                  </button>
                  <button
                    onClick={() => handleDecision(intention.id, "accepted")}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition"
                  >
                    Aceitar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}