
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className=' w-screen h-screen text-center m-auto flex flex-col justify-center items-center'>
        <h1 className='text-2xl'>page not found</h1>
        <button className='border m-5 p-3 bg-slate-100 text-xl'><Link to={"/"}>Go back Home Page</Link></button>
      <img src="/public/404.svg" alt="page not found" />
    </div>
  )
}

export default Error
