import FairCards from "./FairCards";
import feiraMotic from "../../assets/feira-motic.png";
import feiraFecip from "../../assets/feira-fecip.png";
import feiraConecta from "../../assets/feira-conecta.png";
import SectionLabel from "../shared/SectionLabel";
import Reveal, { RevealGroup } from "../shared/Reveal";
import { useLanguage } from "../../contexts/LanguageContext";

const Fair = () => {
  const { t } = useLanguage();
  const items = t.fair.items;
  const cards = [
    {
      image: feiraMotic,
      link: "https://www.linkedin.com/posts/arthurjuwer_motic2024-senac-jogosdigitais-activity-7256383728061403137-txFL?utm_source=share&utm_medium=member_desktop",
    },
    {
      image: feiraFecip,
      link: "https://www.linkedin.com/posts/arthurjuwer_feiradeciencias-feicip-tecnologia-activity-7239013687523463168-M82D?utm_source=share&utm_medium=member_desktop",
    },
    {
      image: feiraConecta,
      link: "https://www.linkedin.com/posts/arthurjuwer_eventoconecta-unisinos-senac-activity-7256699993485414400-9bjU?utm_source=share&utm_medium=member_desktop",
    },
  ];

  return (
    <section id="experiências" className="lg:pb-28 pb-14 pt-8 lg:pt-12 flex flex-col gap-y-10">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <SectionLabel text={t.fair.sectionLabel} variant="yellow" />
        <Reveal>
          <h1 className="text-4xl lg:text-5xl text-titleGray font-bold text-center w-3/5 lg:w-auto">
            {t.fair.title.prefix}
            <span className="relative inline-block">
              {t.fair.title.highlight}
              <span className="absolute left-0 -bottom-1 h-2 w-full bg-mainGreen -z-10" />
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-textGray font-medium text-center w-10/12 lg:w-auto">
            {t.fair.description}
          </p>
        </Reveal>
      </div>
      <RevealGroup
        className="flex flex-col lg:flex-row gap-10 xl:gap-12 2xl:gap-24 items-center xl:px-12 2xl:px-0"
        staggerChildren={0.15}
      >
        {cards.map((card, idx) => (
          <FairCards
            key={idx}
            image={card.image}
            link={card.link}
            title={items[idx].title}
            text={items[idx].text}
          />
        ))}
      </RevealGroup>
    </section>
  );
};

export default Fair;
