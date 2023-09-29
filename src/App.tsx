import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
