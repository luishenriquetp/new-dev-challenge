import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage";
import ResourceDetails from "./components/pages/ResourceDetails/ResourceDetails";
import { GlobalStyle } from "./styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:resource/:id" element={<ResourceDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
