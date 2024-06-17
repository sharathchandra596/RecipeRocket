import { Route, Routes } from "react-router-dom";
// import SideBar from "./components/SideBar";
import Homepage from "./components/pages/Homepage";
import Favorites from "./components/pages/Favorites";
import Login from "./components/pages/Login";
import { AuthContextProvider } from "./context/Appcontex";
import ProtectedRoute from "./ProtectedRoute/protectedRoute";
import Error from "./components/pages/Error";




function App() {
  return (
    <AuthContextProvider>
      <div className="flex">
        <Routes>
          <Route path="/" element={<Homepage /> } />
          <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/:error" element={<Error/>} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
