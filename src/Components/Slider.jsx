import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Slider = () => {
    const Container = styled.div`
        width:100%;
        display:flex;
        height:100vh;
        background-color: coral;
    `
    const Arrow = styled.div`
        width:50px;
        height:50px;
        background-color: #fff7f7;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        position:absolute;
        margin:auto;
    `
    return ( 
        <Container>
            <Arrow>
                <ArrowLeftOutlined/>
            </Arrow>
            <Arrow>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
     );
}
 
export default Slider;