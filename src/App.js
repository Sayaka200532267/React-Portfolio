import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from "./views/Home";
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
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
