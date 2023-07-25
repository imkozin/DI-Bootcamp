import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./components/HomeScreen";
import ShopScreen from "./components/ShopScreen";
import ProfileScreen from "./components/ProfileScreen"
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/shop">Shop</NavLink>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
      <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
      <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
