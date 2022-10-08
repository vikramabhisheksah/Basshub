import Slider from "../Components/Slider"


import Products from "../Components/Products";
//import Filters from "../Components/Filters";


const Home = ({searchQry}) => {
    

    return ( 
        <div>
            <Slider/>
            <Products searchQry={searchQry}/>
        </div>
     );
}
 
export default Home;

