import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"
import { LandingPage } from "../LandingPage/LandingPage.jsx";
import { AuthService } from "../../services/AuthService"
import { useEffect } from "react";

export const Navigation = () => {


    const {
        login,
        logout,
        handleAuthentication,
        setSession,
        isAuthenticated,
        handleUserInfo,
        setProfile,
        getProfile
    } = AuthService()

    useEffect(() => {
        login()
    }, [])
    
    

    return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/home"} >Home</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/home" element={<LandingPage/>}></Route>

                <Route path="/*" element={ <Navigate to={"/home"} replace /> }></Route>

            </Routes>

        </div>
    </BrowserRouter>
  )
}
