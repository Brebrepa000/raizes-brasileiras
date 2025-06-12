import './index.css';

const App = () => {
  return (
    <div>
      <header>
      <h1 id='titulo'>
        Raízes brasileiras
      </h1>
      </header>
      <main>
      <h2 id='sobre' className='text-white flex justify-center font-size: '>Sobre nós: </h2>
      <p className='text-blue-500'>Aqui você encontra um cantinho especial para as lendas urbanas do Brasil, onde a gente junta e espalha essas histórias. Tem de tudo: casos contados por gente de vários cantos, causos que moram na nossa imaginação. Uns vêm de antigamente, passando de boca em boca, e outros são novinhos em folha.

A ideia é guardar essas narrativas, entender de onde elas vêm e mostrar o que o povo sente e pensa sobre elas, tanto quem viveu quanto quem só ouviu falar. Não importa se você só gosta de saber, se pesquisa ou se tem algo para contar: sinta-se em casa.
</p>
      </main>
      <footer className='flex items-center justify-center'>Todos os direitos reservados</footer>
    </div>
  )
}

export default App