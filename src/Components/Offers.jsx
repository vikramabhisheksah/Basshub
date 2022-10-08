import styled from "styled-components";
import React from "react";
const Container = styled.div`
    height:30px;
    background-color:var(--var-colors-secondary);
    color:white;
    display:flex;
    justify-content: center;
    align-items:center;
    font-size:14px;
    font-weight:500;
`
const Promotion = () => {
    return ( 
        <Container>
            Super Deal! Free Subscription to spotify for one month with Orders over $50!
        </Container>
     );
}
 
export default Promotion;