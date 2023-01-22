import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { LandingPage } from "../LandingPage/LandingPage";
import { Home } from "../Home/Home";
import { Profile } from "../Profile/Profile";
import { Auth0ProviderWithHistory } from "../../auth/Auth0ProviderWithHistory";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <div className="main-layout">
          <NavLink to={"/home"}></NavLink>
          <Routes>
            <Route path="home" element={<Profile />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/*" element={<Navigate to={"/"} replace />}></Route>
          </Routes>
        </div>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
};
