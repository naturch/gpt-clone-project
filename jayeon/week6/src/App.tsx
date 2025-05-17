//전체 라우팅
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./components/styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:chatId" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
