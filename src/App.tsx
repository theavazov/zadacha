import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import HomePage from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
