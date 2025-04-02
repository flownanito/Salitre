import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Shop from "./pages/shop/Shop";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/Home" element={<Home />}> </Route>
        <Route path="/Profile" element={<Profile />}> </Route>
        <Route path="/Shop" element={<Shop />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
