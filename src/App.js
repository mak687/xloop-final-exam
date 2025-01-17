import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import LaptopList from "./pages/LaptopList";
import LaptopDetail from "./pages/LaptopDetail";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<LaptopList />} />
           <Route path="/laptop/:id" element={<LaptopDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;