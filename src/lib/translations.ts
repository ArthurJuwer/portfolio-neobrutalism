export type Language = "pt" | "en" | "es";

export const SUPPORTED_LANGUAGES: Language[] = ["pt", "en", "es"];

export interface MenuItem {
  name: string;
  id: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  text: string;
}

export interface FairItem {
  title: string;
  text: string;
}

export interface ProjectItem {
  title: string;
  text: string;
}

export interface SocialItem {
  followersLabel: string;
}

export interface Translation {
  header: {
    menu: MenuItem[];
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
  };
  main: {
    badge: string;
    greeting: string;
    name: string;
    description: string;
    stats: Stat[];
    viewProjects: string;
    contact: string;
  };
  about: {
    sectionLabel: string;
    title: string;
    description: string;
    viewResume: string;
    tabs: { about: string; skills: string };
    timeline: {
      title: string;
      events: TimelineEvent[];
    };
    skills: {
      title: string;
      frontend: string;
      backend: string;
    };
    curriculumModal: {
      title: string;
      close: string;
      portuguese: string;
      english: string;
      flagBrazilAlt: string;
      flagUsAlt: string;
    };
  };
  projects: {
    sectionLabel: string;
    title: { prefix: string; highlight: string };
    description: string;
    featured: string;
    visit: string;
    repository: string;
    items: ProjectItem[];
  };
  social: {
    title: string;
    items: SocialItem[];
  };
  fair: {
    sectionLabel: string;
    title: { prefix: string; highlight: string };
    description: string;
    linkedinPost: string;
    items: FairItem[];
  };
  contact: {
    sectionLabel: string;
    titleDesktop: { prefix: string; highlight: string };
    titleMobile: string;
    description: string;
    fields: {
      nome: string;
      email: string;
      mensagemLabel: string;
    };
    placeholders: {
      nome: string;
      email: string;
      mensagem: string;
    };
    alerts: {
      empty: string;
      success: string;
      error: string;
      close: string;
    };
    buttons: {
      send: string;
      sending: string;
    };
  };
  footer: {
    copyright: string;
    github: string;
    linkedin: string;
  };
  scrollToUp: string;
}

const pt: Translation = {
  header: {
    menu: [
      { name: "Inicio", id: "#inicio" },
      { name: "Sobre", id: "#sobre" },
      { name: "Habilidades", id: "#habilidades" },
      { name: "Projetos", id: "#projetos" },
      { name: "Redes Sociais", id: "#redes" },
      { name: "Experiências", id: "#experiências" },
      { name: "Contato", id: "#contato" },
    ],
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    languageLabel: "Idioma",
  },
  main: {
    badge: "Portfólio 2026",
    greeting: "Olá eu sou o ",
    name: "Arthur Juwer",
    description:
      "Atualmente estou no 3° ano do ensino médio integrado ao técnico em T.I. Confira minha caminhada e me conheça.",
    stats: [
      { value: "+4", label: "anos programando" },
      { value: "10+", label: "projetos entregues" },
      { value: "3°", label: "ano técnico em T.I." },
    ],
    viewProjects: "Ver Projetos",
    contact: "Contato",
  },
  about: {
    sectionLabel: "↓ Conheça",
    title: "Sobre Mim",
    description:
      "Sou um estudante de Tecnologia da Informação no Senac, apaixonado por desenvolvimento de software e novas tecnologias. Sempre em busca de aprimorar minhas habilidades e aprender mais sobre desenvolvimento front-end, back-end e inovação tecnológica.\n\nCom projetos focados em aplicações web, sempre tento integrar as melhores práticas de design e desenvolvimento, buscando entregar soluções que combinam funcionalidade e estética.",
    viewResume: "Ver Currículo",
    tabs: { about: "Sobre Mim", skills: "Habilidades" },
    timeline: {
      title: "Linha do Tempo",
      events: [
        {
          year: "2022",
          title: "Início da Programação",
          text: "Este ano foi onde eu conheci a programação e comecei o estudo através de cursos.",
        },
        {
          year: "2024",
          title: "Ensino Médio Técnico em T.I",
          text: "Comecei o ensino médio no Senac, onde tive a oportunidade de representar a instituição em feiras.",
        },
        {
          year: "2025",
          title: "Novas Oportunidades e Projetos",
          text: "Neste ano, estou focando no desenvolvimento de projetos de maior impacto e ajudar pessoas.",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      frontend: "Frontend",
      backend: "Backend",
    },
    curriculumModal: {
      title: "Selecione o idioma do currículo",
      close: "Fechar",
      portuguese: "Português",
      english: "Inglês",
      flagBrazilAlt: "bandeira brasil neobrutalista",
      flagUsAlt: "bandeira ingles neobrutalista",
    },
  },
  projects: {
    sectionLabel: "✦ Portfólio",
    title: { prefix: "Meus ", highlight: "Projetos" },
    description:
      "Aqui estão meus projetos recentes. Estou sempre trabalhando em algo novo, então volte em breve!",
    featured: "Destaque",
    visit: "Visitar",
    repository: "Repositório",
    items: [
      {
        title: "Criador de Currículos",
        text: "Site criador de currículos modernos e profissionais de forma rápida e prática, sem complicação. Experimente!",
      },
      {
        title: "Site Institucional Moral Asessoria",
        text: "Site Institucional feito para o escritório de contabilidade Moral Asessoria Contábil.",
      },
      {
        title: "Voando na Rota Romântica",
        text: "Jogo Flappy Bird com tema rota romântica para o concurso do bicentenário de São Leopoldo.",
      },
    ],
  },
  social: {
    title: "Me siga nas Redes Sociais",
    items: [
      { followersLabel: "seguidores" },
      { followersLabel: "conexões" },
      { followersLabel: "seguidores" },
    ],
  },
  fair: {
    sectionLabel: "↓ Experiências",
    title: { prefix: "Participações em ", highlight: "Feiras" },
    description: "Eventos e feiras onde participei com projetos e apresentações.",
    linkedinPost: "Ver post no LinkedIn",
    items: [
      {
        title: "Feira MOTIC 2024",
        text: "Desenvolvi um projeto de remodelação do jogo Flappy Bird com o tema Rota Romântica.",
      },
      {
        title: "Feira FECIP 2024",
        text: "Apresentei o jogo do Flappy Bird remodelado com o tema Rota Romântica.",
      },
      {
        title: "Feira CONECTA 2024",
        text: "Participei de um Evento da Unisinos, onde foi oferecido atividades práticas dos cursos.",
      },
    ],
  },
  contact: {
    sectionLabel: "✉ Contato",
    titleDesktop: { prefix: "Entre em ", highlight: "Contato" },
    titleMobile: "Contato",
    description: "Fique à vontade para entrar em contato comigo através do formulário.",
    fields: { nome: "nome", email: "email", mensagemLabel: "MENSAGEM" },
    placeholders: {
      nome: "ex: Arthur Juwer",
      email: "ex: arthurjuwer@gmail.com",
      mensagem: "Escreva sua mensagem aqui...",
    },
    alerts: {
      empty: "Por favor, preencha todos os campos.",
      success: "Mensagem enviada com sucesso!",
      error: "Ocorreu um erro ao enviar a mensagem. Tente novamente.",
      close: "Fechar alerta",
    },
    buttons: { send: "Enviar", sending: "Enviando..." },
  },
  footer: {
    copyright: "© 2026   Arthur Juwer. Todos os direitos reservados.",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  scrollToUp: "Voltar ao topo",
};

const en: Translation = {
  header: {
    menu: [
      { name: "Home", id: "#inicio" },
      { name: "About", id: "#sobre" },
      { name: "Skills", id: "#habilidades" },
      { name: "Projects", id: "#projetos" },
      { name: "Social", id: "#redes" },
      { name: "Experience", id: "#experiências" },
      { name: "Contact", id: "#contato" },
    ],
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
  },
  main: {
    badge: "Portfolio 2026",
    greeting: "Hi, I'm ",
    name: "Arthur Juwer",
    description:
      "Currently in my 3rd year of high school integrated with a technical degree in IT. Take a look at my journey and get to know me.",
    stats: [
      { value: "+4", label: "years coding" },
      { value: "10+", label: "projects delivered" },
      { value: "3rd", label: "year of IT technical degree" },
    ],
    viewProjects: "View Projects",
    contact: "Contact",
  },
  about: {
    sectionLabel: "↓ About",
    title: "About Me",
    description:
      "I'm an Information Technology student at Senac, passionate about software development and new technologies. Always looking to improve my skills and learn more about front-end, back-end and tech innovation.\n\nWith projects focused on web applications, I always try to combine the best design and development practices, aiming to deliver solutions that mix functionality and aesthetics.",
    viewResume: "View Resume",
    tabs: { about: "About Me", skills: "Skills" },
    timeline: {
      title: "Timeline",
      events: [
        {
          year: "2022",
          title: "Started Programming",
          text: "This was the year I discovered programming and started studying through online courses.",
        },
        {
          year: "2024",
          title: "Technical High School in IT",
          text: "I started high school at Senac, where I had the opportunity to represent the institution at fairs.",
        },
        {
          year: "2025",
          title: "New Opportunities and Projects",
          text: "This year I'm focusing on developing higher-impact projects and helping people.",
        },
      ],
    },
    skills: {
      title: "Skills",
      frontend: "Frontend",
      backend: "Backend",
    },
    curriculumModal: {
      title: "Select the resume language",
      close: "Close",
      portuguese: "Portuguese",
      english: "English",
      flagBrazilAlt: "neobrutalist brazil flag",
      flagUsAlt: "neobrutalist english flag",
    },
  },
  projects: {
    sectionLabel: "✦ Portfolio",
    title: { prefix: "My ", highlight: "Projects" },
    description:
      "Here are my recent projects. I'm always working on something new, so check back soon!",
    featured: "Featured",
    visit: "Visit",
    repository: "Repository",
    items: [
      {
        title: "Resume Builder",
        text: "Website to build modern and professional resumes quickly and easily, no hassle. Try it!",
      },
      {
        title: "Moral Asessoria Institutional Site",
        text: "Institutional website built for the accounting firm Moral Asessoria Contábil.",
      },
      {
        title: "Flying on the Romantic Route",
        text: "Flappy Bird game themed around the Romantic Route for São Leopoldo's bicentennial contest.",
      },
    ],
  },
  social: {
    title: "Follow me on Social Media",
    items: [
      { followersLabel: "followers" },
      { followersLabel: "connections" },
      { followersLabel: "followers" },
    ],
  },
  fair: {
    sectionLabel: "↓ Experience",
    title: { prefix: "Participation in ", highlight: "Fairs" },
    description: "Events and fairs where I joined with projects and presentations.",
    linkedinPost: "View post on LinkedIn",
    items: [
      {
        title: "MOTIC Fair 2024",
        text: "I developed a remake of the Flappy Bird game themed around the Romantic Route.",
      },
      {
        title: "FECIP Fair 2024",
        text: "I presented the remade Flappy Bird game themed around the Romantic Route.",
      },
      {
        title: "CONECTA Fair 2024",
        text: "I attended a Unisinos event with hands-on activities from their courses.",
      },
    ],
  },
  contact: {
    sectionLabel: "✉ Contact",
    titleDesktop: { prefix: "Get in ", highlight: "Touch" },
    titleMobile: "Contact",
    description: "Feel free to reach out to me through the form.",
    fields: { nome: "name", email: "email", mensagemLabel: "MESSAGE" },
    placeholders: {
      nome: "e.g. Arthur Juwer",
      email: "e.g. arthurjuwer@gmail.com",
      mensagem: "Write your message here...",
    },
    alerts: {
      empty: "Please fill in all the fields.",
      success: "Message sent successfully!",
      error: "An error occurred while sending the message. Please try again.",
      close: "Close alert",
    },
    buttons: { send: "Send", sending: "Sending..." },
  },
  footer: {
    copyright: "© 2026   Arthur Juwer. All rights reserved.",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  scrollToUp: "Back to top",
};

const es: Translation = {
  header: {
    menu: [
      { name: "Inicio", id: "#inicio" },
      { name: "Sobre", id: "#sobre" },
      { name: "Habilidades", id: "#habilidades" },
      { name: "Proyectos", id: "#projetos" },
      { name: "Redes", id: "#redes" },
      { name: "Experiencias", id: "#experiências" },
      { name: "Contacto", id: "#contato" },
    ],
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    languageLabel: "Idioma",
  },
  main: {
    badge: "Portafolio 2026",
    greeting: "Hola, soy ",
    name: "Arthur Juwer",
    description:
      "Actualmente estoy en el 3.er año de la secundaria integrada con técnico en T.I. Conoce mi recorrido y un poco más sobre mí.",
    stats: [
      { value: "+4", label: "años programando" },
      { value: "10+", label: "proyectos entregados" },
      { value: "3.°", label: "año técnico en T.I." },
    ],
    viewProjects: "Ver Proyectos",
    contact: "Contacto",
  },
  about: {
    sectionLabel: "↓ Conoce",
    title: "Sobre Mí",
    description:
      "Soy estudiante de Tecnología de la Información en Senac, apasionado por el desarrollo de software y las nuevas tecnologías. Siempre busco mejorar mis habilidades y aprender más sobre desarrollo front-end, back-end e innovación tecnológica.\n\nCon proyectos enfocados en aplicaciones web, siempre intento integrar las mejores prácticas de diseño y desarrollo, buscando entregar soluciones que combinen funcionalidad y estética.",
    viewResume: "Ver Currículum",
    tabs: { about: "Sobre Mí", skills: "Habilidades" },
    timeline: {
      title: "Línea de Tiempo",
      events: [
        {
          year: "2022",
          title: "Inicio de la Programación",
          text: "Este fue el año en que conocí la programación y comencé a estudiar a través de cursos.",
        },
        {
          year: "2024",
          title: "Secundaria Técnica en T.I.",
          text: "Comencé la secundaria en Senac, donde tuve la oportunidad de representar a la institución en ferias.",
        },
        {
          year: "2025",
          title: "Nuevas Oportunidades y Proyectos",
          text: "Este año me estoy enfocando en desarrollar proyectos de mayor impacto y ayudar a las personas.",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      frontend: "Frontend",
      backend: "Backend",
    },
    curriculumModal: {
      title: "Selecciona el idioma del currículum",
      close: "Cerrar",
      portuguese: "Portugués",
      english: "Inglés",
      flagBrazilAlt: "bandera de brasil neobrutalista",
      flagUsAlt: "bandera de inglés neobrutalista",
    },
  },
  projects: {
    sectionLabel: "✦ Portafolio",
    title: { prefix: "Mis ", highlight: "Proyectos" },
    description:
      "Aquí están mis proyectos recientes. Siempre estoy trabajando en algo nuevo, ¡así que vuelve pronto!",
    featured: "Destacado",
    visit: "Visitar",
    repository: "Repositorio",
    items: [
      {
        title: "Creador de Currículums",
        text: "Sitio para crear currículums modernos y profesionales de forma rápida y práctica, sin complicaciones. ¡Pruébalo!",
      },
      {
        title: "Sitio Institucional Moral Asessoria",
        text: "Sitio institucional desarrollado para la oficina de contabilidad Moral Asessoria Contábil.",
      },
      {
        title: "Volando en la Ruta Romántica",
        text: "Juego Flappy Bird con temática de la ruta romántica para el concurso del bicentenario de São Leopoldo.",
      },
    ],
  },
  social: {
    title: "Sígueme en las Redes Sociales",
    items: [
      { followersLabel: "seguidores" },
      { followersLabel: "conexiones" },
      { followersLabel: "seguidores" },
    ],
  },
  fair: {
    sectionLabel: "↓ Experiencias",
    title: { prefix: "Participaciones en ", highlight: "Ferias" },
    description: "Eventos y ferias en los que participé con proyectos y presentaciones.",
    linkedinPost: "Ver publicación en LinkedIn",
    items: [
      {
        title: "Feria MOTIC 2024",
        text: "Desarrollé una nueva versión del juego Flappy Bird con el tema de la Ruta Romántica.",
      },
      {
        title: "Feria FECIP 2024",
        text: "Presenté la nueva versión del Flappy Bird con el tema de la Ruta Romántica.",
      },
      {
        title: "Feria CONECTA 2024",
        text: "Participé en un evento de Unisinos con actividades prácticas de los cursos.",
      },
    ],
  },
  contact: {
    sectionLabel: "✉ Contacto",
    titleDesktop: { prefix: "Ponte en ", highlight: "Contacto" },
    titleMobile: "Contacto",
    description: "Siéntete libre de contactarme a través del formulario.",
    fields: { nome: "nombre", email: "email", mensagemLabel: "MENSAJE" },
    placeholders: {
      nome: "ej: Arthur Juwer",
      email: "ej: arthurjuwer@gmail.com",
      mensagem: "Escribe tu mensaje aquí...",
    },
    alerts: {
      empty: "Por favor, completa todos los campos.",
      success: "¡Mensaje enviado con éxito!",
      error: "Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.",
      close: "Cerrar alerta",
    },
    buttons: { send: "Enviar", sending: "Enviando..." },
  },
  footer: {
    copyright: "© 2026   Arthur Juwer. Todos los derechos reservados.",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  scrollToUp: "Volver arriba",
};

export const translations: Record<Language, Translation> = { pt, en, es };

export const detectBrowserLanguage = (): Language => {
  if (typeof navigator === "undefined") return "pt";
  const lang = navigator.language.toLowerCase().split("-")[0];
  if (lang === "en") return "en";
  if (lang === "es") return "es";
  return "pt";
};
