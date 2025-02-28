import MainImg from "./MainImg"
import MainTitle from "./MainTitle"

const Main = () => {
  return (
    <div id="inicio" className="min-h-[85vh] gap-12 lg:min-h-[90vh] flex lg:flex-row flex-col-reverse items-center h-full w-full pt-6 pb-8">
      <MainTitle />
      <MainImg />
    </div>
  )
}

export default Main