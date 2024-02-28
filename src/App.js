import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/HomePage";
import QRCode from "./pages/QRCodePage";
import OneMovie from "./components/OneMovie"
import MainLayout from "./components/MainLayout";


const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={ <MainLayout /> }>
        <Route index element={<Home />} />  
        <Route path="/QRCode" element={<QRCode />} />
        <Route path="all-movies/:movieId/:parameter" element={<OneMovie />}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;