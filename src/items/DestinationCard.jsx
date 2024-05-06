import { useContext } from "react"
import { imgMoon, imgMars,imgEuropa,imgTitan } from "../assets"
import {destinations} from '../assets/data.js'
import { WebContext } from "../helper/Context"


const DestinationCard = ({name,img,dest,travel,distance, moonClick, marsClick, eurClick, titClick}) => {

    const image = ()=>{
        if (name === "Moon"){
            return(imgMoon)
        }else if(name === "Mars"){
            return(imgMars)
        }else if (name === "Europa"){
            return(imgEuropa)
        }else if (name === "Titan"){
            return(imgTitan)
        }
    }

    const {des, setDes} = useContext(WebContext)

    const checkDes =(des) =>{
        setDes(des)
      }

  return (
    <div class=" flex flex-row justify-around items-center pt-[6rem] max-sm:flex-col md:max-lg:flex-col md:max-lg:pt-14 max-sm:pt-2">
      <img src={image()} width={"40%"} height={"40%"} alt="not found" class=" md:max-lg:w-[55%]"/>
      <div class=" w-[40%] max-sm:w-[90%] max-sm:mt-5 md:max-lg:text-center max-sm:text-center md:max-lg:w-[90%] md:max-lg:mt-14 ">
            <div class="flex justify-start w-[100%] gap-8 text-[#d0d6f9] max-sm:text-[.9rem] max-sm:gap-3 max-sm:justify-center md:max-lg: md:max-lg:justify-center">
                
                {destinations.map((data,index)=>{

                    return(<div class={`pb-4 max-sm:pb-2 uppercase cursor-pointer ${des === index? ' border-b-4 border-b-white text-white' : null}`} onClick={()=>{setDes(index)}}>{data.name}</div>)
                })}
            </div>
            <h1 class=" font-bellefair text-[5rem] uppercase m-0 max-sm:text-[4rem]">{name}</h1>
            <p class=" font-barlowNor text-[#d0d6f9] w-[100%] text-[.8rem] tracking-wider leading-6 m-0 md:max-lg:text-[1.1rem]">{dest}</p>
            <hr class=" w-[100%] mt-7 mb-4 max-sm:mt-3 "/>
            <div class="flex flex-row w-[100%] gap-16 max-sm:flex-col max-sm:gap-3 md:max-lg:justify-center">
                <div>
                    <p class=" font-barlow text-[1.2rem] text-[#d0d6f9] uppercase md:max-lg:text-[1rem]" >Avg. distance</p>
                    <p class=" font-bellefair max-sm:text-[1.5rem] md:max-lg:text-[2rem] text-[2rem]">{distance}</p>
                </div>
                <div>
                    <p class=" font-barlow text-[1.2rem] text-[#d0d6f9] uppercase md:max-lg:text-[1rem]">Est. travel time</p>
                    <p class=" font-bellefair max-sm:text-[1.5rem] md:max-lg:text-[2rem] text-[2rem]">{travel}</p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default DestinationCard
