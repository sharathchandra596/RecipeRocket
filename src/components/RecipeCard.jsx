import { Heart, HeartPulse, Soup } from 'lucide-react'


function RecipeCard() {
  return (
    <div className="flex flex-col rounded-md bg-[#c6cca1] overflow-hidden p-3 relative">
            <a href="#" className=" relative h-32">
              <img
                src="/public/1.jpg"
                alt="img"
                className=" rounded-md w-full h-full object-cover cursor-pointer"
              />
              <div className=" absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-[10px]">
                <Soup size={"15"} /> 4 servings
              </div>
              <div className=" absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer">
                <Heart
                  size={"15"}
                  className=" hover:fill-red-600 hover:text-red-500"
                />
              </div>
            </a>
              <div className="flex mt-1">
                <p>rosted chiken</p>
              </div>

              <p className="my-2">Turkesh Kitchine</p>
              <div className="flex gap-2 mt-auto">
                <div className="flex gap-1 bg-[#f8ddb3] items-center p-1 rounded-md">
                  <HeartPulse size={16}/>
                  <span className=" text-sm tracking-tighter font-semibold">gluten free</span>
                </div>
                <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
                  <HeartPulse size={16}/>
                  <span className=" text-sm tracking-tighter font-semibold">heart</span>
                </div>
                
              </div>
          </div>
  )
}

export default RecipeCard
