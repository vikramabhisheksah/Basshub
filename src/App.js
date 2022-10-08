import { createGlobalStyle } from "styled-components";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Offers from "./Components/Offers";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
:root{
  --var-colors-primary: #005E7C;
  --var-colors-secondary: #0094C6;
  --var-colors-tertiary: #000B29;
}
`;

const App = () => {
  const [searchQry,setSearchQry] = useState('')
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
      <Navbar setSearchQry = {setSearchQry}/>
      <Offers/>
        <Routes>
          <Route path="/" element={<Home searchQry={searchQry}/>} />
          <Route path="/product/:id" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
