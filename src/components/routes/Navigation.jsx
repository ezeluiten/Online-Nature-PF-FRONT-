import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"
import { LandingPage } from "../LandingPage/LandingPage";
import { Auth0ProviderWithHistory } from '../../auth/Auth0ProviderWithHistory';

export const Navigation = () => {

    return (
    <BrowserRouter>
        <Auth0ProviderWithHistory>

            <div className="main-layout">
                
                <Routes>


                    <Route path="/" element={<LandingPage/>}></Route>

                    <Route path="/*" element={ <Navigate to={"/"} replace /> }></Route>

                </Routes>

            </div>
        </Auth0ProviderWithHistory>
    </BrowserRouter>
  )
}
