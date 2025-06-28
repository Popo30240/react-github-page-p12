import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
    <div className="container__max1440">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<h1>Page non trouvée</h1>} />
        <Route path="*" element={<h1>Page non trouvée</h1>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}
