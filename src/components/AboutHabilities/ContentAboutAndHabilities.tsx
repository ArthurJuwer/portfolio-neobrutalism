import { useState } from "react"

const ContentAboutAndHabilities = () => {
    const [atualIndexSlide, setAtualIndexSlide] = useState<number>(1)
    // VER O URL e definir o index apartir disso

  return (
    <div className="flex flex-col gap-y-5 my-12">
        {/* SLIDE MENU */}
        <div className="w-full flex items-center justify-between bg-mainGreen p-3 border-neoBrutalism shadow-neoBrutalism rounded-xl">
            <button 
                className={`${atualIndexSlide === 1 ? "border-black border-2" : ""} w-1/2 text-xl font-semibold  p-3 rounded-xl`}
                onClick={() => setAtualIndexSlide(1)}
            >
                Sobre Mim
            </button>
            <button 
                className={`${atualIndexSlide === 2 ? "border-black border-2" : ""} w-1/2 text-xl font-semibold  p-3 rounded-xl`}
                onClick={() => setAtualIndexSlide(2)}
            >
                Habilidades
            </button>
        </div>
        <div className="w-full h-[28rem] flex flex-col lg:flex-row gap-12 items-start justify-between bg-mainGreen p-6 border-neoBrutalism shadow-neoBrutalism rounded-xl">
            <div id="sobre" className={`${atualIndexSlide === 1 ? "flex" : "hidden"} lg:w-1/2 w-full flex-col gap-y-4 lg:pb-24`}>
                <h1 className="font-semibold text-2xl ">Sobre Mim</h1>
                <p className="text-justify">
                    Sou um estudante de Tecnologia da Informação no Senac, apaixonado por desenvolvimento de software e novas tecnologias. Sempre em busca de aprimorar minhas habilidades e aprender mais sobre desenvolvimento front-end, back-end e inovação tecnológica.
                    <br /> <br />
                    Com projetos focados em aplicações web, sempre tento integrar as melhores práticas de design e desenvolvimento, buscando entregar soluções que combinam funcionalidade e estética.
                </p>
                <button className="border-neoBrutalism shadow-neoBrutalism bg-white p-2 rounded-lg w-full lg:w-5/12 font-semibold">Baixar Currículo</button>
            </div>
            <div className={`${atualIndexSlide === 1 ? "flex" : "hidden" } border-2 w-full lg:w-0 lg:h-64 border-black rounded-xl`}></div>
            <div className={`${atualIndexSlide === 1 ? "flex" : "hidden"} lg:w-1/2 w-full flex-col gap-y-5`}>
                <h1 className="font-semibold text-2xl">Linha do Tempo</h1>
                <div className="flex">
                    <span className="hidden lg:block border-l-4 h-72 border-black"></span>
                    <div className="flex flex-col justify-between">
                        <div className="flex items-center">
                            <span className="hidden lg:block border-l-[4rem] h-1 border-black"></span>
                            <div className="flex items-center lg:items-start lg:gap-x-10 gap-x-5">
                                <div className="flex items-center justify-center h-16 w-48 bg-white border-neoBrutalism shadow-neoBrutalism rounded-md">
                                    <h1 className="text-3xl font-bold">2022</h1>
                                </div>
                                <div className="">
                                    <h1 className="lg:text-lg font-semibold" >Resilience and Future Horizons</h1>
                                    <p className="lg:text-sm text-xs">Adapting to new challenges, we remained committed to our mission of providing an </p>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div className="flex items-center">
                            <span className="hidden lg:block border-l-[4rem] h-1 border-black"></span>
                            <div className="flex items-center lg:items-start lg:gap-x-10 gap-x-5">
                                <div className="flex items-center justify-center h-16 w-48 bg-white border-neoBrutalism shadow-neoBrutalism rounded-md">
                                    <h1 className="text-3xl font-bold">2023</h1>
                                </div>
                                <div className="">
                                    <h1 className="lg:text-lg font-semibold" >Resilience and Future Horizons</h1>
                                    <p className="lg:text-sm text-xs">Adapting to new challenges, we remained committed to our mission of providing an </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="hidden lg:block border-l-[4rem] h-1 border-black"></span>
                            <div className="flex items-center lg:items-start lg:gap-x-10 gap-x-5">
                                <div className="flex items-center justify-center h-16 w-48 bg-white border-neoBrutalism shadow-neoBrutalism rounded-md">
                                    <h1 className="text-3xl font-bold">2024</h1>
                                </div>
                                <div className="">
                                    <h1 className="lg:text-lg font-semibold" >Resilience and Future Horizons</h1>
                                    <p className="lg:text-sm text-xs">Adapting to new challenges, we remained committed to our mission of providing an </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div id="habilidades" className={`${atualIndexSlide === 2 ? "flex" : "hidden"} w-full flex-col gap-y-4 lg:pb-24`}>
                <h1 className="font-semibold text-2xl ">Habilidades</h1>
                <div className="w-full h-80 p-6 bg-fourGreen rounded-xl flex justify-between gap-x-10">
                    <div className="w-1/2">
                        <h1 className="text-2xl font-semibold">Frontend</h1>
                    </div>
                    <div className="border-2 w-full lg:w-0 lg:h-64 border-black rounded-xl"></div>
                    <div className="w-1/2">
                        <h1 className="text-2xl font-semibold">Backend</h1>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContentAboutAndHabilities