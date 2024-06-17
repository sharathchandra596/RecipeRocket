
import { Search } from "lucide-react";
import RecipeCard from "../RecipeCard";
import { useEffect, useState } from "react";
import SideBar from "../SideBar";
import CustomLoader from "../CustomLoader";

const App_id="bae19a4b"
const App_key="eb06050bb6e6a96cd56269c599b594c8"

function Homepage() {
  
  const [search,setserach]=useState("")
  const [recipe, setRecipe]=useState([])

  const [loading,setloading]=useState(false)
  

 async function fetchRecipes(searchQueary)
  {
    setloading(true)
    setRecipe([])
    try {
      const res= await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${App_id}&app_key=${App_key}&q=${searchQueary}&type=public`)
      const data= await res.json()
      setRecipe(data.hits)
      console.log(recipe);

    } catch (error) {
      console.log(error.message);
    }
    finally
    {
      setloading(false)
    }
  }

  useEffect(()=>{
    fetchRecipes(search==""?"salad":search)
  },[search])

  function handelserch(e)
  {
    e.preventDefault()
    fetchRecipes(search)

  }



  return (
    <>
     <SideBar />
    <div className=" bg-slate-100 p-5 flex-1">
      <div className=" max-w-screen-lg mx-auto">
        <form onSubmit={handelserch}>
          <label className="input shadow-lg flex items-center gap-2">
            <Search />
            <input
              type="text"
              value={search}
              onChange={(e)=>setserach(e.target.value)}
              className="text-sm md:text-md grow"
              placeholder="what do you want to eat today...!"
            />
          </label>
        </form>
        <p className="font-bold text-2xl md:text-3xl mt-4">
          Recommended Resipes
        </p>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm">
          Recommended Resipes
        </p>

        <div className=" grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* 1st recipe */}
          {/* <RecipeCard/> */}

          {loading&& <div className="w-[70vw] h-[70vh] flex justify-center items-center"> <CustomLoader/> </div>}
          {!loading&& recipe.length <1 ?<div>
              no recpices avable
          </div>
            :recipe?.map((recipe,index)=> <RecipeCard key={index} recipe={recipe}/>)}


         


        </div>
      </div>
    </div>
    </>
  );
}

export default Homepage;
