import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from "./views/Home";



function App() {
    return (
        <div>
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} /> 
                        {/* <Route path="/programmingLanguages" element={<ProgrammingLanguages />} />
                        <Route path="/skills" element={<Skills />} /> */}
                    </Routes>
                </BrowserRouter>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
