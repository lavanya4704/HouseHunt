import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Wishlist from "./pages/Wishlist";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProperty from "./pages/AddProperty";
import Dashboard from "./pages/Dashboard";
import EditProperty from "./pages/EditProperty";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/properties"
          element={<Properties />}
        />

        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

        <Route
          path="/add-property"
          element={<AddProperty />}
        />

        <Route
          path="/edit-property/:id"
          element={<EditProperty />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />
<Route
  path="/wishlist"
  element={<Wishlist />}
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;