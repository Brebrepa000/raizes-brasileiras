
export const SignUpPage = () => {
  return (
    <div
      className="./imagens/QuadroSelva.png"
      style={{ backgroundImage: "url('./imagens/QuadroSelva.png)" }}
    >
      <div className="max-w-md w-full space-y-8 p-8 shadow-lg rounded-xl bg-white">
        <h1
          className="text-red-900 text-3xl font-serif font-bold text-center"
          id="titulo"
        >
          Cadastro
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
          >
            Cadastrar
          </button>
        </form>

        <p className="mt-4 text-center text-gray-700 text-base">
          Já tem uma conta?{" "}
          <a
            href="/login"
            className="text-red-600 hover:underline hover:text-red-800 font-medium"
          >
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
};