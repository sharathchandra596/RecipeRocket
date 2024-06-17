import { useContext } from "react";
import { AppContext } from "../../context/Appcontex";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

function Login() {
  const {user,signUp } = useContext(AppContext);
  const navigate = useNavigate();

  async function handelSignUp() {
    try {
      await signUp();
      setDoc(doc(db,"users",user?.email),{
        favrecipes:[],
       })
      navigate("/");
    } catch (error) {
      console.log(error.message);
      console.log(error);
    }
  }
  return (
    <div className="w-[100vw] h-[100vh] border  m-auto    bg-gray-200 text-center">
      <div className="mt-4">
        <h1 className="text-4xl p-4  font-sans">Signup With Google</h1>
        <h1 className="text-xl p-4  font-sans">
          For the great recipes for your loved❤️ ones
        </h1>
        <h1 className="text-xl p-4  font-sans">
          Unleash your inner chef with{" "}
          <span className="text-red-400">Rocket recipes 🚀</span> , a recipe web
          app that brings the world of cuisine to your fingertips!{" "}
        </h1>
      </div>

      <div className="flex flex-col  justify-center items-center">
        <img src="/public/desk_logo.png" alt="logo" />
        <button
          onClick={handelSignUp}
          className="mt-5 w-50 p-3 h-16  border border-black text-xl flex  items-center rounded-md hover:bg-yellow-200 "
        >
          <img className="" src="/public/google.svg" width={"40px"} alt="" />
          <span className="text-2xl ml-9"> Log in with Google</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
