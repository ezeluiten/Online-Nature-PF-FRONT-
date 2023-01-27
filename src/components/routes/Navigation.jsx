import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { LandingPage } from "../LandingPage/LandingPage.jsx";
import { Home } from "../Home/Home";
import { Profile } from "../Profile/Profile";
import { Auth0ProviderWithHistory } from "../../auth/Auth0ProviderWithHistory";
import { Campaing } from "../Campaing/Campaing.js";
import AnimalDetil from "../detail/AnimalDetail/AnimalDetail.jsx";
import TreeDetail from "../detail/TreeDetail/TreeDetail.jsx";
import { PaymentForm } from "../Cashier/PaymentForm.js";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <div className="main-layout">
          <NavLink to={"/home"}></NavLink>
          <Routes>
            <Route path='/campaign/:id' element={<TreeDetail />} />
            <Route path='/campaign/:id' element={<AnimalDetil />} />
            <Route path="/payment" element={<PaymentForm/>}/>
            <Route path="/campaign" element={<Campaing />} />
            <Route path="home" element={<Home />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/*" element={<Navigate to={"/"} replace />} />
          </Routes>
        </div>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
};
