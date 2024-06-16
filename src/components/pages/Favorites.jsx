import RecipeCard from "../RecipeCard"


function Favorites() {

  let fav =true
  return (
    <div className=" bg-gray-100 flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
      <p className="font-bold text-3xl md:text-2xl my-4">My Favorites</p>

      {!fav&&(
        <div className="h-[80vh] flex flex-col items-center gap-4">
          <img src="/public/404.svg" className=" h-3/4" alt="" />
        </div>
      )}

      {fav&&(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
        </div>
      )}
      </div>
    </div>
  )
}

export default Favorites
