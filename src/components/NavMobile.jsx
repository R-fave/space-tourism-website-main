import { Link } from "react-router-dom"

const NavMobile = () => {
  return (
    <div class=" bg-pink-50 w-6">
      <div class=" max-sm:w-[65%] max-sm:h-dvh bg-white ml-auto invisible border max-sm:visible">
        <div class=" flex flex-col justify-around border-2 border-black">
          <Link to="/">Home</Link>
          <Link to="/destination">Destination</Link>
          <Link to="/crew">Crew</Link>
          <Link to="/technology">Technology</Link>
        </div>
      </div>
    </div>
  )
}

export default NavMobile
