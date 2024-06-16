import { Heart, HeartPulse, Soup, Youtube } from 'lucide-react'


function RecipeCard({recipe}) {
  return (
    <div className="flex flex-col rounded-md bg-[#c6cca1] overflow-hidden p-3 relative">
            < a className=" relative h-32">
              <img
                src={recipe.image}
                alt="img"
                className=" rounded-md w-full h-full object-cover cursor-pointer"
              />
              <div className=" absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-[10px] font-semibold">
                <Soup size={"15"} /> {Math.round(recipe.calories) +"cals"}
              </div>
              <div className=" absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer">
                <Heart
                  size={"15"}
                  className=" hover:fill-red-600 hover:text-red-500"
                />
              </div>
            </a>
              <div className="flex mt-1">
                <p>{recipe.label}</p>
              </div>

              <div className="my-2 capitalize flex justify-between">
                <span>{recipe.cuisineType}</span>

                <div className='rounded-md  cursor-pointer bg-[#ebc687] p-1'>  
                  <a href={`https://www.youtube.com/results?search_query=${recipe.label}`} target='_blank'>
                  <Youtube size={30} className=''/> 
                 
                  </a>
                  </div>

              </div>
              <div className="flex gap-2 mt-auto">
                <div className="flex gap-1 bg-[#f8ddb3] items-center p-1 rounded-md">
                  <HeartPulse size={16}/>
                  <span className=" text-sm tracking-tighter font-semibold">{recipe.healthLabels[1]}</span>
                </div>
                <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
                  <HeartPulse size={16}/>
                  <span className=" text-sm tracking-tighter font-semibold">{recipe.healthLabels[2]}</span>
                </div>
                
              </div>
          </div>
  )
}

export default RecipeCard
