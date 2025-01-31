import FairCards from "./FairCards"

const Fair = () => {
  return (
    <div className="pb-28 flex flex-col gap-y-10">
        <div className="flex flex-col items-center justify-center gap-y-4">
            <h1 className=" text-4xl text-titleGray font-bold">Participações em Feiras</h1>
            <p className="text-textGray font-medium">Eventos e feiras onde participei com projetos e apresentações.</p>
        </div>
        <div className="flex gap-24">
            <FairCards />
            <FairCards />
            <FairCards />
        </div>
        
    </div>
  )
}

export default Fair