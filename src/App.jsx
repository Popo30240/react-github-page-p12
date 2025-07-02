import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/404";

export default function App() {
  return (
    <BrowserRouter>
    <div className="container__max1440">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}
