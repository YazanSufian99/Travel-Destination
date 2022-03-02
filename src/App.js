import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Tours from "./components/tours/Tours";
import data from "./components/data/data.json";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";

function App(){
    return(
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="city/:id" element={<Tours />} />
            </Routes>

        </>
    );
}
export default App;