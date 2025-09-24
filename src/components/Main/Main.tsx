import MainImg from "./MainImg"
import MainTitle from "./MainTitle"

const Main = () => {
  return (
    <div id="inicio" className="min-h-[85vh] gap-6 lg:min-h-[90vh] flex lg:flex-row flex-col-reverse items-center h-full w-full lg:pt-6 pt-10 pb-8">
      <MainTitle />
      <MainImg />
    </div>
  )
}

export default Main