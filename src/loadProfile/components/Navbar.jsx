import { NavLink, useNavigate} from "react-router-dom";
import {Button} from "@mui/material";


export const Navbar =()=>{
    const navigate = useNavigate();
    const  username = localStorage.getItem("username");
    console.log(username)
    const  onLogout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate('/login',{
            replace:true,
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">

            <NavLink className="navbar-brand" to="/todolist">
                Todo List
            </NavLink>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav me-auto">
                    <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/profile">
                        Profile
                    </NavLink>
                    <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                             to="/categories">
                        Categories
                    </NavLink>
                </div>
                <div className="navbar-nav ms-auto">
                    <span className="nav-item nav-link text-primary">
                        {username}
                    </span>
                    <Button className="custom-logout-button" onClick={onLogout} variant="contained">Logout</Button>
                </div>
            </div>
        </nav>
    )


}