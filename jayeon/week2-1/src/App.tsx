import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MyPupPage from "./pages/MyPupPage"; // (미리 빈 컴포넌트 만들어둬도 됨)
import CommunityPage from "./pages/CommunityPage";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-pup" element={<MyPupPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </Router>
  );
};

export default App;
