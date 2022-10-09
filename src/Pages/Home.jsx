import Slider from "../Components/Slider"
import React from "react";

import Products from "../Components/Products";
//import Filters from "../Components/Filters";


const Home = ({searchQry,handleCompareClick,compareItems}) => {
    

    return ( 
        <div>
            <Slider/>
            <Products searchQry={searchQry} handleCompareClick={handleCompareClick} compareItems={compareItems}/>
        </div>
     );
}
 
export default Home;

