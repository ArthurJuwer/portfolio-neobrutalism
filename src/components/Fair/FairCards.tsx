import feiraMotic from "../../assets/feira-motic.png"

const FairCards = () => {
  return (
    <div className="bg-mainGreen w-1/3 border-neoBrutalism shadow-neoBrutalism p-4 pb-6 flex flex-col gap-y-2">
        <div className="">
            <img 
                src={feiraMotic}
                alt="feira motic" 
                className="border-2 border-black rounded-lg"
            />
        </div>
        <h1 className="font-bold text-xl">Feira MOTIC 2024</h1>
        <p className="w-11/12">Desenvolvi um projeto de remodelação do jogo Flappy Bird com o tema Rota Romântica.</p>
    </div>
  )
}

export default FairCards