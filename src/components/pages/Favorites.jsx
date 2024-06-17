import { useContext, useEffect, useState } from "react";
import SideBar from "../SideBar";
import { AppContext } from "../../context/Appcontex";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { HeartPulse, Soup, Youtube, YoutubeIcon } from "lucide-react";

function Favorites() {
  const [favRecipes, setFavrecipes] = useState([]);
  const { user } = useContext(AppContext);
  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
        if (doc.data()) setFavrecipes(doc.data().favrecipes);
        else console.log("error");
      });
    }
  }, [user?.email]);

  console.log(favRecipes);

  return (
    <>
      <SideBar />
      <div className=" bg-gray-100 flex-1 p-10 min-h-screen">
        <div className="max-w-screen-lg mx-auto">
          <p className="font-bold text-3xl md:text-2xl my-4">My Favorites</p>
          <div  className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           
          {favRecipes.length < 1 ? (
            <div className="h-[80vh] flex flex-col items-center gap-4">
              <img src="/public/404.svg" className=" h-3/4" alt="" />
            </div>
          ) : (
            favRecipes.map((fav, index) => (
              
              <div className="border bg-gray-500 rounded p-2 " key={index}>
                <img className="w-[100%] object-cover object-fill  " src={fav.recipe.image} alt="" />
                <h1>{fav.recipe.label}</h1>
                <div>
                  <a href={`https://www.youtube.com/results?search_query=${fav.recipe.label}`}>
                  <Youtube size={40} />
                  </a>
                </div>
              </div>
              
                
            ))
          )}
           </div>
        </div>
      </div>
    </>
  );
}



export default Favorites;
