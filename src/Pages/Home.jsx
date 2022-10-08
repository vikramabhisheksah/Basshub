import Slider from "../Components/Slider"


import Products from "../Components/Products";
//import Filters from "../Components/Filters";


const Home = ({searchQry,handleCompareClick}) => {
    

    return ( 
        <div>
            <Slider/>
            <Products searchQry={searchQry} handleCompareClick={handleCompareClick}/>
        </div>
     );
}
 
export default Home;

