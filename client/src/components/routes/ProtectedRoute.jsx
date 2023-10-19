import { useDispatch } from "react-redux";
import api from "../../services/api";
import { getCurrentUser } from "../../redux/features/auth/authActions";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const dispatch = useDispatch()

    // get current user
    const getUser = async () => {
        try {
            const { data } = await api.get('/auth/current-user')
            if(data?.success){
                dispatch(getCurrentUser(data))
            }
        } catch (error) {
            localStorage.clear()
            console.log(error)
        }
    }

    useEffect(() => {
        getUser()
    })
  
    if(localStorage.getItem('token')){
        return children
    } else {
    return <Navigate to="/login" />;
    }
}

export default ProtectedRoute