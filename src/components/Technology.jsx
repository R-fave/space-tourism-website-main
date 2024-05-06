import { useState, useContext } from "react"
import { technology } from "../assets/data"
import TechCard from "../items/TechCard"
import { WebContext } from "../helper/Context"

const Technology = () => {

  const [currTech, setCurrTech] = useState(0)
  

  return (
    <WebContext.Provider value={{currTech,setCurrTech}}>
      <div class=" w-dvw h-screen bg-cover bg-tech-lg md:max-lg:bg-tech-md max-sm:bg-tech-sm max-lg:bg-cover  text-white flex-col pt-36 max-sm:pt-26" >
      <p class=" text-white  font-barlow text-2xl font-normal tracking-[.3rem] max-sm:text-sm mb-3 max-sm:text-center max-w-[90%] ml-auto md:max-lg:mx-auto md:max-lg:mt-8 max-sm:mx-auto"><span class=" text-white/45 font-normal">03 </span>SPACE LAUNCH 101</p>
      <div class=" w-[90%] max-sm:w-[100%] ml-auto md:max-lg:w-[100%] max-sm:mx-auto">
        {technology.map((tech,index)=>{
          if(currTech === index){
            return(
              
              <TechCard
              name={tech.name}
              des={tech.description}
              imageLg={tech.images.landscape}
              imageSm={tech.images.portrait}
              key={index}
              />
            )
          }
        })}
      </div>
    </div>
    </WebContext.Provider>
    
  )
}

export default Technology
