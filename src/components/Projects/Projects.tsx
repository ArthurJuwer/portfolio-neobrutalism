import ProjectsCard from "./ProjectsCard"

const Projects = () => {
  return (
    <div id="projetos" className="h-[95vh] py-12 flex flex-col items-center gap-y-20 bg-fiveGreen">
        <div className="flex items-center flex-col justify-center text-center gap-y-5">
            <h1 className="text-4xl font-bold text-titleGray">Projetos</h1>
            <p className="w-4/5 text-textGray font-medium text-lg">Here are some of my recent projects. I'm always working on something new, 
            so check back often!</p>
        </div>
        <div className="px-60 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
        </div>
        
        
    </div>
  )
}

export default Projects