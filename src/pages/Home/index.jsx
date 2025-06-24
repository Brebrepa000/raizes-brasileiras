import { Link } from "react-router-dom";
import { Rodape } from "../../components/Rodape";

export const HomePage = () => {
  return (
    <div>
      <header>
        <div className="flex justify-start mt-1">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-2 rounded-lg transition-colors"
            type="button"
          >
            <Link to='/login'>
              Entrar
            </Link>
          </button>
        </div>
        <h1 className="font-poppins titulo">Raízes brasileiras</h1>
      </header>
      <main>
        <h2
          id="sobre"
          className="text-red-700 flex justify-center text-4xl importante font-poppins"
        >
          Sobre nós:
        </h2>

        <div className="w-full flex items-center justify-center">
          <p className="text-white p1 font-poppins text-1xl shadow-black max-w-md text-center">
            Aqui você encontra um cantinho especial para as lendas urbanas do
            Brasil, onde a gente junta e espalha essas histórias. Tem de tudo:
            casos contados por gente de vários cantos, causos que moram na nossa
            imaginação. Uns vêm de antigamente, passando de boca em boca, e
            outros são novinhos em folha. <br />
            A ideia é guardar essas narrativas, entender de onde elas vêm e
            mostrar o que o povo sente e pensa sobre elas, tanto quem viveu
            quanto quem só ouviu falar. Não importa se você só gosta de saber,
            se pesquisa ou se tem algo para contar: sinta-se em casa.
          </p>
        </div>

        <div className="text-green-700 flex justify-center text-1xl importante font-poppins">
          <h4>
          Curiosidades rápidas
          </h4>
        </div>
        <div className="min-h-screen flex flex-col justify-between">
        <Rodape />
        </div>
        
      </main>
    </div>
  );
};
