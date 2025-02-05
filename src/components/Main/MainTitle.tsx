const MainTitle = () => {
  return (
    <div className="flex flex-col gap-y-6">
        <h1 className="text-titleGray lg:text-7xl text-5xl font-bold lg:w-3/5 text-center lg:text-left">Olá eu sou o Arthur Juwer</h1>
        <p className="text-textGray lg:text-lg text-base font-medium lg:w-3/5 text-center lg:text-left">Atualmente estou no 2° ano do ensino médio integrado ao técnico em T.I. Confira minha caminhada e me conheça.</p>
        <a href="#projetos">
          <button 
            className="bg-mainGreen border-neoBrutalism shadow-neoBrutalism_100 font-semibold px-12 py-2.5 text-lg rounded-lg w-full lg:w-1/3 transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Ver Projetos
          </button>
        </a>
    </div>
  )
}

export default MainTitle;