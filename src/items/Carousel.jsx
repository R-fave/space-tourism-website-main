import { useContext, useState, useEffect } from "react"
import { imgCrewAnsari, imgCrewHurely, imgCrewShuttle, imgCrewGlover } from "../assets";
import { crew } from "../assets/data";
import { WebContext } from "../helper/Context";

const Carousel = ({images,name,bio,role,index}) => {

    const {currentIndex, setCurrentIndex} = useContext(WebContext)
    const {count, setCount} = useContext(WebContext)
    const handelDotClick = (index) =>{
        setCurrentIndex(index)
    }

    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            if (currentIndex < crew.length-2){
                setCount(count + 1);
                setCurrentIndex(count)
            }else{
                setCount(0)
                setCurrentIndex(count)
            }
            
          }, 2000)
    },[count])
    
  return (
    <div class="relative  max-w-[80%] w-[80%] h-full m-auto flex justify-between items-center md:max-lg:flex-col md:max-lg:text-center max-sm:flex-col-reverse max-sm:h-[90%] max-sm:justify-normal max-sm:gap-6">

        <div class=" md:max-lg:pt-16 md:max-lg:flex md:max-lg:flex-col md:max-lg:items-center w-[70%] max-sm:gap-7 max-sm:flex max-sm:flex-col-reverse max-sm:w-[100%]">
            <div class=" max-sm:text-center">
                <p class=" font-bellefair text-[32px] text-white/50 md:max-lg:text-[26px] uppercase max-sm:text-[16px]">{role}</p>
                <p class=" font-bellefair text-[52px] md:max-lg:text-[45px] tracking-[.3rem] uppercase max-sm:text-[24px]">{name}</p>
                <p class=" font-barlowNor text-[18px] w-[444px] h-[128px] text-[#d0d6f6] md:max-lg:text-[17px] max-sm:text-[15px] max-sm:w-[100%]">{bio}</p>
            </div>
            
            <div class="mt-5 flex justify-center gap-5 w-[100%] h-[100%] max-sm:mt-0">
                {crew.map((_,index)=>{
                    return(
                        <div 
                    class={`w-3 h-3 ${currentIndex === index ? "bg-white" : "bg-white/20"} border border-transparent rounded-[50%]`}
                    key={index}
                    onClick={()=>{handelDotClick(index)}}></div>
                    )}
                )}
            </div>
        </div>

        <img class="w-[500px] h-[600px] md:max-lg:w-[456px] md:max-lg:h-[572px] max-sm:w-[260px] max-sm:h-[240px] max-sm:border-b"
       key={index}
       src={images}
       />
       

       
       
    </div>
  )
}

export default Carousel
