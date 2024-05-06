
import Carousel from "../items/Carousel";
import { crew } from "../assets/data";
import { useState, useContext } from "react";
import { WebContext } from "../helper/Context";

const Crew = () => {


const [currentIndex, setCurrentIndex] = useState(0)
const [count, setCount] = useState(0)

  return (
    
    <WebContext.Provider value={{currentIndex,setCurrentIndex, count, setCount}}>
    <div class=" w-dvw h-[100vh] bg-cover bg-crew-lg max-sm:bg-crew-sm md:max-lg:bg-crew-md max-lg:bg-cover pt-36 max-sm:pt-[5rem] text-white" >
    <p class=" text-white font-barlow text-2xl font-normal tracking-[.3rem] max-sm:text-sm mb-3 max-sm:text-center max-w-[80%] mx-auto"><span class=" text-white/45 font-normal">02 </span>MEET YOUR CREW</p>
    <div class="flex justify-center items-center mt-10">
      {crew.map((crewM, index)=>{
        if (currentIndex === index){
          return(
            <Carousel
            name={crewM.name}
            bio={crewM.bio}
            images={crewM.images.png}
            role={crewM.role}
            key={index}
            handelDotClick={()=>handelDotClick(index)}
          />
          )
        }
      })}  
    </div>
      
    </div>
    </WebContext.Provider>
  )
}

export default Crew
