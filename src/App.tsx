import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Build from "./pages/Build";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/build" element={<Build />} />
      </Routes>
    </>
  );
}

export default App;
