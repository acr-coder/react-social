import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login  />}  />
    <Route path="/register" element={<Register  />}  />
    <Route path="/profile" element={<Profile  />}  />
    </Routes>
    
  );
}

export default App;
