import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from "./views/Home";
import Skills from "./views/Skills";
import Header from "./views/shared/Header";
import Footer from "./views/shared/Footer";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} /> 
                        <Route path="/Skills" element={<Skills />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
