import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import PaymentMethods from "./pages/PaymentMethods"

import PaymentClick from "./pages/PaymentClick"
import { Toaster } from "./components/ui/toaster"
import Check from "./pages/Check"
import { Service } from "./pages/Service"
import SucessPage from "./pages/SucessPage"

const App = () => {
  return (
    <div>
      <Toaster/>  
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/profile" element={<Profile/>}></Route>
  <Route path="/payment" element={<PaymentMethods/>}></Route>
  <Route path="/service" element={<Service/>}></Route>
  <Route path="/click" element={<PaymentClick/>}></Route>
  <Route path="/check" element={<Check/>}></Route>
  <Route path="/check/:id" element={<SucessPage />} />
</Routes>

    </div>
  )
}

export default App
