import ContentAboutAndHabilities from "./components/AboutHabilities/ContentAboutAndHabilities";
import Contact from "./components/Contact/Contact";
import Fair from "./components/Fair/Fair";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import SocialMedia from "./components/SocialMedia/SocialMedia";

import backgroundCircle from "./assets/backgroundCircle.png"
import backgroundSquare from "./assets/backgroundSquare.png"


function App() {

  return (
    
    <div className="bg-mainBackground min-h-dvh xl:pt-8 xl:px-0 p-4 pb-0">
      <div className="xl:ml-auto xl:mr-auto xl:max-w-screen-xl">
        <Header />
        <Main />
      </div>
      <div className="border-b-2 border-black w-full"></div>
      <div style={{
            backgroundImage: `url(${backgroundSquare})`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", 
            padding: "2rem 0rem",
          }}
        >
      <div className="xl:ml-auto xl:mr-auto xl:max-w-screen-xl">
        <ContentAboutAndHabilities />
      </div>
      </div>
      <div className="border-b-2 border-black w-full"></div>
        <Projects />
        <SocialMedia />
        <div className="xl:ml-auto xl:mr-auto xl:max-w-screen-xl">
        <Fair />
      </div>
      <div className="border-b-2 border-black w-full"></div>
      <div style={{
            backgroundImage: `url(${backgroundCircle})`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", 
            padding: "2rem 0rem",
          }}
        >
    <div className=" xl:mx-auto xl:max-w-screen-xl"
    >
      <Contact />
    </div>
      </div>
      
      <Footer />
    </div>
    
  )
}

export default App