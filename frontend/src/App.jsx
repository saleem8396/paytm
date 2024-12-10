import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { SendMoney } from "./pages/SendMoney";
import { Dashboard } from "./pages/Dashboard";
import { RecoilRoot } from "recoil";

function App() {
 
  const isAuthenticated=localStorage.getItem("token")
 
  return (
    <>
    
    <RecoilRoot>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={isAuthenticated?<Dashboard/>:<Navigate to="/Signin"/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/SendMoney" element={<SendMoney/>}></Route>
      <Route path="/Dashboard" element={<Dashboard/>}></Route>

    </Routes>
    </BrowserRouter>
    </RecoilRoot>
    </>
  )
}

export default App
