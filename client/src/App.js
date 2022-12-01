import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

import LoginGooglePage from "./components/LoginGooglePage";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/login" element={<LoginGooglePage />} />
    </Routes>
  );
}

export default App;
