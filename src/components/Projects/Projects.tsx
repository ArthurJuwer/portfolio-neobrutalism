import ProjectsCard from "./ProjectsCard";
import site01 from "../../assets/site01.png";
import site02 from "../../assets/site02.png";
import site03 from "../../assets/site03.png";
import SectionLabel from "../shared/SectionLabel";
import Reveal, { RevealGroup } from "../shared/Reveal";
import { useLanguage } from "../../contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  const items = t.projects.items;
  const cards = [
    {
      image: site01,
      website: "https://curriculummaker.vercel.app/",
      repository: "https://github.com/ArthurJuwer/CurriculumMaker",
      languagesIcons: [1, 2, 3, 4],
      featured: true,
    },
    {
      image: site02,
      website: "https://moralassessoria.com.br/",
      languagesIcons: [1, 2, 3, 4],
    },
    {
      image: site03,
      website: "https://voandonarotaromantica.com/",
      repository: "https://github.com/ArthurJuwer/Flappy-Bird-Projeto",
      languagesIcons: [1, 2],
    },
  ];

  return (
    <section
      id="projetos"
      className="2xl:min-h-[95vh] lg:py-12 py-8 flex flex-col items-center gap-y-10 lg:gap-y-14 2xl:gap-y-20 bg-fiveGreen relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-dots opacity-50 pointer-events-none" />
      <div className="relative flex items-center flex-col justify-center text-center gap-y-4">
        <SectionLabel text={t.projects.sectionLabel} variant="green" />
        <Reveal>
          <h1 className="text-4xl lg:text-5xl font-bold text-titleGray">
            {t.projects.title.prefix}
            <span className="relative inline-block">
              {t.projects.title.highlight}
              <span className="absolute left-0 -bottom-1 h-2 w-full bg-accentYellow -z-10" />
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="w-4/5 mx-auto text-textGray font-medium lg:text-lg">
            {t.projects.description}
          </p>
        </Reveal>
      </div>
      <RevealGroup
        className="relative 2xl:px-60 xl:px-20 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center"
        staggerChildren={0.15}
      >
        {cards.map((card, idx) => (
          <ProjectsCard
            key={idx}
            image={card.image}
            title={items[idx].title}
            text={items[idx].text}
            languagesIcons={card.languagesIcons}
            website={card.website}
            repository={card.repository}
            featured={card.featured}
          />
        ))}
      </RevealGroup>
    </section>
  );
};

export default Projects;
