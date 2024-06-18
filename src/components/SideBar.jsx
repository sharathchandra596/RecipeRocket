import { Heart, Home, LogOut } from "lucide-react"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AppContext } from "../context/Appcontex"
import mobile_logo from "../../public/mobile_logo.png"
import desk_logo from '../../../public/desk_logo.png'


function SideBar() {

  
  return (
    <>
      <DesktopSideBar/>
      <MobileSideBar/>
    </>
  )
}

export default SideBar


function DesktopSideBar()
{
  const{user,logOut}=useContext(AppContext)
  const navigate=useNavigate()
  console.log(user?.email);

  async function hadelLogOut()
  {
    try {
      await logOut()
      navigate("/login")
    } catch (error) {
      console.log(error.message);
      console.log(error);
    }
  }
  return(
    <div className="p-3  md:p-6 border-r border-black min-h-screen w-24 md:w-60 hidden sm:block">
      <div className="flex flex-col sticky top-7 left-0 ">
        <div className="w-full ">
          <img src={desk_logo} width={"200px"} alt="logo" className=" hidden  md:block w-full " />
          <img src={mobile_logo} width={"200px"} alt="logo" className=" block md:hidden " />
        </div>
        <ul className="flex flex-col items-center md:items-start gap-8">
          <Link to={"/"} className="flex gap-1">
          <Home size={"24"}/>
          <span className=" font-bold hidden md:block ">Home</span>
          </Link>

          <Link to={"/favorites"} className="flex gap-1">
          <Heart size={"24"}/>
          <span className=" font-bold hidden md:block ">Favorites</span>
          </Link>
         
          {/* <Link onClick={hadelLogOut} className="flex gap-1">
          <LogOut  size={"24"}/>
          <span className=" font-bold hidden md:block ">Log Out</span>
          </Link> */}

          {user?.email&&<Link onClick={hadelLogOut} className="flex gap-1">
          <LogOut  size={"24"}/>
          <span className=" font-bold hidden md:block ">Log Out</span>
          </Link>}
        </ul> 
      </div>
    </div>
  )
}



function MobileSideBar()
{
  const{user,logOut}=useContext(AppContext)
  const navigate=useNavigate()
  console.log(user?.email);


  async function hadelLogOut()
  {
    try {
      await logOut()
      
      navigate("/login")
      
    } catch (error) {
      console.log(error.message);
      console.log(error);
    }
  }
  return(
    <div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2 sm:hidden">
      <Link to={"/"}>
        <Home size={"24"} className=" cursor-pointer"/>
      </Link>
      <Link to={"/favorites"}>
        <Heart size={"24"} className=" cursor-pointer"/>
      </Link>
      {/* <Link onClick={hadelLogOut} className="flex gap-1">
          <LogOut  size={"24"}/>
          <span className=" font-bold hidden md:block ">Log Out</span>
          </Link> */}
           {user?.email&&<Link onClick={hadelLogOut} className="flex gap-1">
          <LogOut  size={"24"}/>
          <span className=" font-bold hidden md:block ">Log Out</span>
          </Link>}
    </div>
  )
}