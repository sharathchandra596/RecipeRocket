import { Heart, HeartPulse, Search, Soup } from "lucide-react";
import RecipeCard from "../RecipeCard";

function Homepage() {
  return (
    <div className=" bg-slate-100 p-5 flex-1">
      <div className=" max-w-screen-lg mx-auto">
        <form>
          <label className="input shadow-lg flex items-center gap-2">
            <Search />
            <input
              type="text"
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
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>


        </div>
      </div>
    </div>
  );
}

export default Homepage;
