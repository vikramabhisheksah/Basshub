import Slider from "../Components/Slider"
import Navbar from "../Components/Navbar";
import Offers from "../Components/Offers";
import Products from "../Components/Products";
import Filters from "../Components/Filters";
import Product from "./Product";

const Home = () => {
    return ( 
        <div>
            
            <Navbar/>
            <Offers/>
            <Slider/>
            <Filters/>
            <Product/>
        </div>
     );
}
 
export default Home;

