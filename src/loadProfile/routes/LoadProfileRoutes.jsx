import {Route,Routes} from "react-router-dom";
import {ProfilePage} from "../../pages/ProfilePage.jsx";
import {Navbar} from "../components/Navbar.jsx";
import {UserProfile} from "../../pages/UserProfile.jsx";

export const LoadProfileRoutes = () => {

    return(
        <>
            <Navbar/>

            <div className={"container-fluid"}>
                <Routes>
                    <Route path={"/todolist"} element={<ProfilePage/>}/>
                    <Route path={"/profile"} element={<UserProfile/>}/>
                </Routes>
            </div>


        </>



    )


}