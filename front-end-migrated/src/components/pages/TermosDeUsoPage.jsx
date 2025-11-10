import { Link } from "react-router-dom";

export default function TermosDeUsoPage() {
    return (
        <div className="min-h-screen w-screen bg-gradient-to-r from-black via-gray-900 to-gray-700 flex items-center justify-center px-4 py-10">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-2xl space-y-6 text-gray-200 overflow-y-auto max-h-[80vh]">

                <h1 className="text-white text-2xl font-semibold text-center">
                    Termos de Uso
                </h1>

                <p>
                    Os termos de uso não existes então aproveite o !lorem
                </p>

                <h2 className="text-white text-lg font-semibold">1. Aceite dos Termos</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
                </p>

                <h2 className="text-white text-lg font-semibold">2. Aceite dos Termos</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
                </p>

                <h2 className="text-white text-lg font-semibold">3. Aceite dos Termos</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
                </p>

                <h2 className="text-white text-lg font-semibold">4. Aceite dos Termos</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
                </p>

                <div className="pt-4 text-center">
                    <Link
                        to="/registro"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
                    >
                        Voltar
                    </Link>
                </div>

            </div>
        </div>
    );
}