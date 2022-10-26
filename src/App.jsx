import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./pages/AboutPage";
import Homepage from "./pages/Homepage";
import MoviePage from "./pages/MoviePage";
import SubscriptionPage from "./pages/SubscriptionPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/plans&subscriptions" element={<SubscriptionPage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
