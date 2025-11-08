import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Menu from "./pages/Menu/Menu";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <Header />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
