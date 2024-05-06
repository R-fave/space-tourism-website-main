import { useContext, useState, useEffect } from "react"
import { technology } from "../assets/data"
import { WebContext } from "../helper/Context"


const TechCard = ({name, des, imageLg, imageSm}) => {

    const {currTech, setCurrTech} = useContext(WebContext)
    
    const [ind, setInd] = useState(0)
    

    const handleClick = (index)=>{
        setCurrTech(index)
    }

   


  return (
    <div class=" flex justify-between items-center w-full md:max-lg:flex-col-reverse mt-20 max-sm:flex-col-reverse max-sm:mt-6">
        <div class="flex w-[50%] gap-20 md:max-lg:gap-10 justify-center items-center md:max-lg:w-[100%] md:max-lg:flex-col md:max-lg:mt-10 max-sm:flex-col max-sm:w-[100%] max-sm:justify-center max-sm:items-center max-sm:gap-5 max-sm:mt-5">
            <div class=" flex flex-col gap-4 md:max-lg:flex-row max-sm:flex-row">
                {technology.map((_,index)=>{


                    return(
                        <div onClick={()=>{handleClick(index)}} key={index} class={`font-bellefair text-[32px] border text-center rounded-[50%] cursor-pointer w-12 h-12 ${currTech === index ? "bg-white text-black" : "bg-transparent"}`}>
                            {index + 1}
                        </div>
                    )
                })}
            </div>
            
            <div class=" max-w[50%] w-[100%] md:max-lg:w-[90%] md:max-lg:flex md:max-lg:flex-col md:max-lg:justify-center md:max-lg:items-center md:max-lg:text-center max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:text-center ">
                <p class=" text-[16px] font-barlow text-[#d0d6f9]">THE TERMINOLOGY</p>
                <p class=" text-[46px] font-bellefair uppercase max-sm:text-[24px]">{name}</p>
                <p class=" text-[18px] text-[#d0d6f9] font-barlowNor w-[68%] max-sm:text-[15px] max-sm:w-[100%]">{des}</p>
            </div>
        </div>
       

        <div>
            {window.innerWidth >= 1000 ? <img src={imageSm} class=" h-[527px] w-[515px]"/> :  <img src={imageLg} class="md:max-lg:w-[100vw]"/>}
        </div>
      
    </div>
  )
}

export default TechCard
