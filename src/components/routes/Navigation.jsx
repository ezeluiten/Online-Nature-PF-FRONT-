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
import { PaymentForm } from "../Cashier/PaymentForm.js";
import { ProfileSettings } from "../Profile/ProfileSettings/ProfileSettings.js";
import { MainContainer } from "./NavigationStyles.js";
import DashboarAdmin from "../DashboarAdmin/DashboarAdmin.jsx";
import Analitica from "./../DashboarAdmin/Analitica/Analitica";
import Contactanos from "./../DashboarAdmin/Contactanos/Contactanos";
import Terminos from "./../DashboarAdmin/T&C/Terminos";
import About from "./../AboutUs/About/About";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <MainContainer className="main-layout">
          <NavLink to={"/home"}></NavLink>
          <Routes>
            <Route path='/campaign/:id' element={<AnimalDetil />} />
            <Route path="/payment" element={<PaymentForm/>}/>
            <Route path="/profile" element={<ProfileSettings/>}/>
            <Route path="/campaign" element={<Campaing />} />
            <Route path="/DashboarAdmin" element={<DashboarAdmin />} />
            <Route path="/Analitica" element={<Analitica />} />
            <Route path="/Contactanos" element={<Contactanos />} />
            <Route path="/Terminos" element={<Terminos />} />
            <Route path="/About" element={<About />} />
            <Route path="home" element={<Home />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/*" element={<Navigate to={"/"} replace />} />
          </Routes>
        </MainContainer>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
};
