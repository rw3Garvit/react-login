import { Route, Routes } from "react-router-dom";
import "./App.css";
import { adminNav } from "./components/Admin/Header/adminNav";
import Navbar from "./components/Atoms/Header/Navbar";
import { userNav } from "./components/User/Header/userNav";
import Home from "./components/Admin/Pages/Home";
import UserHome from "./components/User/Pages/Home";
import List from "./components/Admin/Pages/List";
import Product from "./components/User/Pages/Product";
import Not from "./components/Atoms/Not";
import Login from "./components/Login";
import axios from "axios";
import Cookies from "js-cookie";

function App() {
  let role = Cookies.get("role");

  if (!role) {
    return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </>
    );
  } else if (role === "admin") {
    return (
      <>
        <Navbar data={adminNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </>
    );
  } else if (role === "User") {
    return (
      <>
        <Navbar data={userNav} />
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </>
    );
  } else {
    console.log("not found");
  }
}

export default App;
