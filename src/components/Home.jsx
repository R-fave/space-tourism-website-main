import { WebContext } from "../helper/Context"
import { useContext } from "react"

const Home = () => {

  return (
    <div class="w-dvw h-screen bg-cover bg-home-lg max-md:bg-home-sm max-lg:bg-home-sm max-lg:bg-cover flex justify-center items-center" >
      <div class=" text-white flex flex-row justify-around items-center mt-[10rem] max-sm:flex-col max-sm:mt-[4rem] max-sm:gap-[3rem] max-lg:mt-[3rem] max-lg:gap-[5rem] max-lg:flex-col">
        <div class="w-[27%] max-sm:w-full max-lg:text-center max-lg:w-full">
          <p class=" font-barlow tracking-widest font-light text-[#d0d6f9] text-xl max-sm:text-[1rem] ">SO, YOU WANT TO TRAVEL TO</p>
          <h1 class=" font-bellefair text-[8rem] my-2 max-sm:text-[6rem] max-sm:my-0 max-lg:text[9rem]">SPACE</h1>
          <p class=" font-barlowNor text-[1rem] text-[#d0d6f9] max-sm:text-[.9rem] max-sm:px-9 max-lg:px-[11rem] max-lg:text-[1.4rem] ">Let’s face it; if you want to go to space, you might as well genuinely go to 
             outer space and not hover kind of on the edge of it. Well sit back, and relax 
             because we’ll give you a truly out of this world experience!</p>
        </div>

        <div class="text-black rounded-[50%] w-[15rem] h-[15rem] justify-center items-center flex  bg-white max-sm:w-[10rem] max-sm:h-[10rem]">
        <p class="font-bellefair text-[1.8rem] text-center">EXPLORE</p>
        </div>
      </div>
    </div>
  )
}


export default Home
