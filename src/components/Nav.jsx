import { logo, iconHamburger, iconClose } from "../assets"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { WebContext } from "../helper/Context"

const Nav = () => {

  // const [isOpened, setIsOpened] = useState(false)
  const {isOpened, setIsOpened} = useContext(WebContext)

  const openModal = ()=>{
    setIsOpened(!isOpened)
  }

  const closeModal = ()=>{
    setIsOpened(!isOpened)
  }

  return (
    <div class="fixed w-full h-32 top-12 max-md:top-0 md:max-lg:top-0 max-sm:top-0 z-50 ">
     
      
      <div class=" w-full flex justify-between items-center pl-2 m-0 absolute max-sm:my-auto max-sm:fixed ">
        <div class=" flex justify-between max-sm:w-[95vw] max-sm:absolute max-sm:h-10 px-3">
           <img src={logo} class=""/>

          <img src={iconHamburger} onClick={()=>{openModal()}} class=" invisible max-sm:visible h-5 my-auto "/>
        </div>
         
        
        <div class="w-[40%] z-[2] top-[2.2rem] left-[11rem] absolute max-lg:invisible"> <hr class=" w-[100%]"/></div>
        <div class=" w-[50%] bg-white/15 h-full backdrop-blur-md flex justify-center gap-9 text-white z-[1] max-md:gap-3 max-md: items-center max-md:p-5 max-lg:w-[70%] max-md:invisible">
          
          <Link to="/" class=" font-barlow font-normal tracking-widest max-md:text-sm py-7 focus:border-b-white focus:border-b-4"><span class=" font-barlow font-bold max-md:collapse max-md:-z-10 max-md:absolute md:max-lg:invisible">00 </span>Home</Link>
         
          <Link to="/destination" class=" font-barlow font-normal tracking-widest max-md:text-sm py-7 focus:border-b-white focus:border-b-4"><span class=" font-barlow font-bold max-md:invisible max-md:-z-10 max-md:absolute md:max-lg:invisible">01 </span>Destination</Link>
          
          <Link to="/crew" class=" font-barlow font-norma tracking-widest max-md:text-sm py-7 focus:border-b-white focus:border-b-4"><span class=" font-barlow font-bold max-md:invisible max-md:-z-10 max-md:absolute md:max-lg:invisible">02 </span>Crew</Link>
          
          <Link to="/technology" class=" font-barlow font-normal tracking-widest max-md:text-sm py-7 focus:border-b-white focus:border-b-4"><span class=" font-barlow font-bold max-md:invisible max-md:-z-10 max-md:absolute md:max-lg:invisible">03 </span>Technology</Link>
        </div>
        
      </div>

      <div class={`max-sm:w-[65%] max-sm:h-dvh bg-white/15 backdrop-blur-md ml-auto invisible ${isOpened ? "max-sm:visible" : "max-sm:invisible" } flex   text-white flex-col p-5 pr-10`}>
        <img src={iconClose} class="w-[30px] ml-auto mt-5" onClick={()=>{closeModal()}}/>
        <div class=" flex flex-col h-[60%] w-[100%] gap-5 mt-12">
          <Link onClick={()=>{closeModal()}} to="/" class=" font-barlow text-[20px] uppercase tracking-widest cursor-pointer"><span class=" font-bold text-[20px]">01 </span>Home</Link>
          <Link onClick={()=>{closeModal()}} to="/destination" class=" font-barlow text-[20px] uppercase tracking-widest cursor-pointer"><span class=" font-bold text-[20px]">02 </span>Destination</Link>
          <Link onClick={()=>{closeModal()}} to="/crew" class=" font-barlow text-[20px] uppercase tracking-widest cursor-pointer"><span class=" font-bold text-[20px]">03 </span>Crew</Link>
          <Link onClick={()=>{closeModal()}} to="/technology" class=" font-barlow text-[20px] uppercase tracking-widest cursor-pointer"><span class=" font-bold text-[20px]">04 </span>Technology</Link>
        </div>
      </div>
      
    </div>
    
  )
}

export default Nav
