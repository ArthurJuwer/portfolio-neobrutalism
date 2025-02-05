import FairCards from "./FairCards"
import feiraMotic from "../../assets/feira-motic.png"
import feiraFecip from "../../assets/feira-fecip.png"
import feiraConecta from "../../assets/feira-conecta.png"

const Fair = () => {
  return (
    <div id="experiências" className="lg:pb-28 pb-14 flex flex-col gap-y-10">
        <div className="flex flex-col items-center justify-center gap-y-4">
            <h1 className="text-4xl text-titleGray font-bold text-center w-3/5 lg:w-auto">Participações em Feiras</h1>
            <p className="text-textGray font-medium text-center w-10/12 lg:w-auto">Eventos e feiras onde participei com projetos e apresentações.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-12 2xl:gap-24 items-center xl:px-12 2xl:px-0">
            <FairCards image={feiraMotic} title="Feira MOTIC 2024" link="https://www.linkedin.com/posts/arthurjuwer_motic2024-senac-jogosdigitais-activity-7256383728061403137-txFL?utm_source=share&utm_medium=member_desktop" text="Desenvolvi um projeto de remodelação do jogo Flappy Bird com o tema Rota Romântica."/>
            <FairCards image={feiraFecip} title="Feira FECIP 2024" link="https://www.linkedin.com/posts/arthurjuwer_feiradeciencias-feicip-tecnologia-activity-7239013687523463168-M82D?utm_source=share&utm_medium=member_desktop" text="Apresentei o jogo do Flappy Bird remodelado com o tema Rota Romântica."/>
            <FairCards image={feiraConecta} title="Feira CONECTA 2024" link="https://www.linkedin.com/posts/arthurjuwer_eventoconecta-unisinos-senac-activity-7256699993485414400-9bjU?utm_source=share&utm_medium=member_desktop" text="Participei de um Evento da Unisinos, onde foi oferecido atividades práticas dos cursos."/>
        </div>
        
    </div>
  )
}

export default Fair