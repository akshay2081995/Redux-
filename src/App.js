import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Header";
import { Company } from "./HeaderComponent/Company";
import { HomeContent } from "./HomeContent";
import { Features } from "./HeaderComponent/Features";
import { Team } from "./HeaderComponent/Team";
import { Contact } from "./HeaderComponent/Contact";
import { Loginpage } from "./HeaderComponent/Loginpage";
import { SignIn } from "./HeaderComponent/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Shop } from "./HeaderComponent/Shop";
import { CartItems } from "./CartItems";
import { DetailsPage } from "./DetailsPage";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NewComponent >
          <Routes>
            <Route path="/Login" element={<Loginpage />} />
            <Route path="/" element={<HomeContent />} />
            <Route path="/company" element={<Company />} />
            <Route path="/features" element={<Features />} />
            <Route path="/team" element={<Team />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Signin" element={<SignIn />} />
            <Route path="/cartItems" element={<CartItems />} />
            <Route path="/product/:id" element={<DetailsPage />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/shop" element={<Shop />} />
            </Route>
          </Routes>
        </NewComponent>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;

const NewComponent = ({children }) => {
  
  return (
    <>
      <Header />
      
      {children}
    </>
  );
};
