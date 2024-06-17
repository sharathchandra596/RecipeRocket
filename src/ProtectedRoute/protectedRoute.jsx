
import { useContext } from 'react'
import { AppContext } from '../context/Appcontex'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
   
 const {user}=useContext(AppContext)

 if(user?.email)
    {
        return children
    }
    else {
        return (
            <>
            {alert("please login to enter into website")}
        <Navigate to="/login" replace />
            </>
        )
      }
}

export default ProtectedRoute
