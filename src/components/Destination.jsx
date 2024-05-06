import {destinations} from '../assets/data.js'
import { useState, useContext } from 'react'
import DestinationCard from '../items/DestinationCard.jsx'
import { WebContext } from '../helper/Context.jsx'


const Destination = () => {

  const [des, setDes] = useState(0)

  return (
    <WebContext.Provider value={{des, setDes}}>
    <div class=" w-dvw h-full bg-cover bg-des-lg max-md:bg-des-sm max-lg:bg-des-md max-lg:bg-cover pt-36 max-sm:pt-26 pb-16 max-sm:pb-10 " >
      <p class=" text-white  font-barlow text-2xl font-normal tracking-[.3rem] max-sm:text-sm mb-3 max-sm:text-center max-w-[90%] ml-auto md:max-lg:mx-auto md:max-lg:mt-8 max-sm:mx-auto"><span class=" text-white/45 font-normal">01 </span>PICK YOUR DESTINATION</p>

      <div class=" text-white px-32 max-sm:px-3">
        {destinations.map((data,index)=>{
          if (index === des){
          return(<DestinationCard 
                  name= {data.name}
                  img={data.images.webp}
                  dest={data.description}
                  travel={data.travel}
                  distance={data.distance}
          />)
        }
        })}
      </div>

        
        
    </div>
    </WebContext.Provider>
  )
}

export default Destination
