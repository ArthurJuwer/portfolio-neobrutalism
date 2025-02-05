import ProjectsCard from "./ProjectsCard"
import site01 from "../../assets/site01.png"
import site02 from "../../assets/site02.png"
import site03 from "../../assets/site03.png"

const Projects = () => {
  return (
    <div id="projetos" className="lg:h-[95vh] lg:py-12 py-8 flex flex-col items-center gap-y-10 lg:gap-y-20 bg-fiveGreen">
        <div className="flex items-center flex-col justify-center text-center gap-y-5">
            <h1 className="text-4xl font-bold text-titleGray">Projetos</h1>
            <p className="w-4/5 text-textGray font-medium lg:text-lg">Aqui estão meus projetos recentes. Estou sempre trabalhando em algo novo, 
            então volte em breve!</p>
        </div>
        <div className="lg:px-60 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          <ProjectsCard image={site01} title="Criador de Currículos" text="Site criador de currículos modernos e profissionais de forma rápida e prática, sem complicação. Experimente!" languagesIcons={[1,2,3,4]} website="https://criadordecurriculos.netlify.app/" repository="https://github.com/ArthurJuwer/CurriculumMaker"/>
          <ProjectsCard image={site02} title="Site Institucional Moral Asessoria" text="Site Institucional feito para o escritório de contabilidade Moral Asessoria Contábil." languagesIcons={[1,2,3,4]} website="https://moralasessoria.netlify.app/"/>
          <ProjectsCard image={site03} title="Voando na Rota Romântica" text="Jogo Flappy Bird com tema rota romântica para o concurso do bicentenário de São Leopoldo." languagesIcons={[1,2]} website="https://voandonarotaromantica.com/" repository="https://github.com/ArthurJuwer/Flappy-Bird-Projeto"/>
        </div>
        
        
    </div>
  )
}

export default Projects