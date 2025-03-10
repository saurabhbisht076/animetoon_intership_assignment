import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Webtoons from "./pages/Webtoons";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddWebtoon from "./pages/AddWebtoon";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webtoons" element={<Webtoons />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-webtoon" element={<AddWebtoon />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
