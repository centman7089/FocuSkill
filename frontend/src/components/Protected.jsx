// @ts-nocheck
import { Navigate, Outlet } from "react-router-dom";



// const PrivateRoutes = {isAuthenticated}) => {
//     let auth = { 'token': true }
    
//     return (
//         auth.token ? <Outlet/> : <Navigate to='/login' />
//     )
// }
const PrivateRoutes = ({isAuthenticated}) => {
   if (!isAuthenticated) {
    return <Navigate to="/" replace />
    }
    
    return <Outlet/>
}

export default PrivateRoutes