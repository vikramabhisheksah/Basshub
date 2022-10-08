import { createGlobalStyle } from "styled-components";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import {Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Offers from "./Components/Offers";
import { useState } from "react";
import styled from "styled-components";
import Compare from "./Pages/Compare";
import { useNavigate } from "react-router";
import 'bootstrap/dist/css/bootstrap.css'

const GlobalStyle = createGlobalStyle`
:root{
  --var-colors-primary: #005E7C;
  --var-colors-secondary: #0094C6;
  --var-colors-tertiary: #000B29;
  position:relative;
}
`;
const Button = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  height: 60px;
  width: 150px;
  position: fixed;
  z-index: 10;
  background-color: #005E7C;
  color: white;
  font-size: 20px;
  font-weight: 200;
  padding: 5px;
  letter-spacing: .2rem;
`;

const App = () => {
  const [searchQry, setSearchQry] = useState("");
  const [compareItems, setCompareItems] = useState([]);
  let navigate = useNavigate();

    const handleCompareClick =(item)=>{
        if (!compareItems.includes(item) && compareItems.length <3) {
          setCompareItems(current => [...current, item]) 
        }
    }
    console.log(compareItems)
  return (
    <>
      <GlobalStyle />
        <Navbar setSearchQry={setSearchQry} />
        <Offers />
        <Routes>
          <Route path="/" element={<Home searchQry={searchQry} handleCompareClick={handleCompareClick}/>} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/compare" element={<Compare compareItems={compareItems}/>}/>
        </Routes>
        <Button onClick={() => {
          navigate(`/compare`);
        }}>Compare</Button>
    </>
  );
};

export default App;
