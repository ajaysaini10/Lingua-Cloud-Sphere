// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components Import
import Header from "./components/Header";
import Footer from "./components/Footer";

//Pages Import
import HomePage from "./pages/HomePage";
import Error404Page from "./pages/Error404Page";
import OCRPage from "./pages/OCRPage";
import RekognitionPage from "./pages/RekognitionPage";
import SSTPage from "./pages/SSTPage";
import TTSPage from "./pages/TTSPage";
import TexttractPage from "./pages/TexttractPage";
import TranslatePage from "./pages/TranslatePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/ocr" element={<OCRPage />} />
        <Route path="/rekognition" element={<RekognitionPage />} />
        <Route path="/sst" element={<SSTPage />} />
        <Route path="/tts" element={<TTSPage />} />
        <Route path="/texttract" element={<TexttractPage />} />
        <Route path="/translate" element={<TranslatePage />} />
        <Route path="/404" element={<Error404Page />} />
        <Route path="/*" element={<Error404Page />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
