
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../Login.jsx";
import {LoadProfileRoutes} from "../loadProfile/routes/LoadProfileRoutes.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

export const AppRouter =()=>{

return(

    <>
        <Routes>
            <Route path={"login"} element={<Login/>}/>
            <Route path="" element={<Navigate to="/login" />} />
            <Route
                path="/*"
                element={
                    <ProtectedRoute>
                        <LoadProfileRoutes />
                    </ProtectedRoute>
                }
            />

        </Routes>

    </>

)


}