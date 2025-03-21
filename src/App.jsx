import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Shop from "./pages/shop/Shop";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />}> </Route>
        <Route path="/profile" element={<Profile />}> </Route>
        <Route path="/shop" element={<Shop />}> </Route>
        <Route path="*" element={<Home />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
