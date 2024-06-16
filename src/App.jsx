import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Homepage from "./components/pages/Homepage";
import Favorites from "./components/pages/Favorites";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Routes>
        <Route path="/" element={ <Homepage />}/>
        <Route path="/favorites" element={ <Favorites />}/>
         
        
      </Routes>
    </div>
  );
}

export default App;
