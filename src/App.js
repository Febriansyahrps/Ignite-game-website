import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
