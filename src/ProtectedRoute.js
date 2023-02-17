import { Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { setNavError } from "./redux/errorSlice";

const ProtectedRoute = ({children}) => {
    const error = useSelector((state) => state.error);
    let location = useLocation();
    const dispatch = useDispatch();

    if(error.form || error.nav) {
        dispatch(setNavError(true))
        return <Navigate to="/" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;