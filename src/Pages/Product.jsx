import styled from "styled-components";


const Container = styled.div``
const Wrapper = styled.div`
    padding:50px;
    display:flex;
`
const ImgContainer = styled.div`
    flex:1
`
const Image = styled.img`
    width:100%;
    height: 80vh;
    object-fit:cover;
`
const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;

`
const Title = styled.h1`
    font-weight: 200;

`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight:100;
    font-size:40px;
`
const FeaturesContainer = styled.div`
    width:50%;
    margin: 30px 0px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
const Feature = styled.div`
    display:flex;
    align-items:center;
    margin: 10px 0px;

`
const FeatureTitle = styled.span`
    flex:1;
    font-size:20px;
    font-weight: 600;
`
const ColorTitle = styled.span`
    
    font-size:20px;
    font-weight: 200;
    font-weight: 600;
`
const FeatureColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    margin:0px 5px;
    display:flex;
    justify-content: flex-start;
    align-items:center;
`
const FeatureValue = styled.span`
    flex:1;
    font-size:20px;
    font-weight: 200;
    margin-left: 5px;
`


const Product = (item) => {

    return ( 
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Image src='img/solo3-pdp-p02.png.large.2x copy.png'/>
                </ImgContainer>
                <InfoContainer>
                    <Title> JBL headphones</Title>
                    <Desc>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    </Desc>
                    <Price>$ 20</Price>

                    <FeaturesContainer>
                        <Feature>
                            <ColorTitle>Color</ColorTitle>
                            <FeatureColor color='black'/>
                        </Feature>
                        <Feature>
                            <FeatureTitle>Brand</FeatureTitle>
                            <FeatureValue>Sony</FeatureValue>
                        </Feature>
                        <Feature>
                            <FeatureTitle>Material</FeatureTitle>
                            <FeatureValue>Stainless steel + resin</FeatureValue>
                        </Feature>
                        <Feature>
                            <FeatureTitle>Warranty</FeatureTitle>
                            <FeatureValue>1 year</FeatureValue>
                        </Feature>
                        <Feature>
                            <FeatureTitle>Connectivity</FeatureTitle>
                            <FeatureValue>Wired</FeatureValue>
                        </Feature>
                        <Feature>
                            <FeatureTitle>Design</FeatureTitle>
                            <FeatureValue>Over-Ear</FeatureValue>
                        </Feature>
                        <Feature>
                            <FeatureTitle>Rating</FeatureTitle>
                            <FeatureValue>4.3/5</FeatureValue>
                        </Feature>

                    </FeaturesContainer>

                </InfoContainer>
            </Wrapper>
        </Container>
     );
}
 
export default Product;