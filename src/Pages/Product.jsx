import styled from "styled-components";
import { useParams } from "react-router";
import { products } from "../data";
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { RatingStar } from "rating-star";
import React from "react";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1.2;
`;
const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FeaturesContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Feature = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
`;
const FeatureTitle = styled.span`
  flex: 1;
  font-size: 20px;
  font-weight: 600;
`;
const ColorTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
const FeatureColor = styled.div`

  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-color:"black";
  background-color: ${(props) => props.color};
  margin: 0px 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const FeatureValue = styled.span`
  flex: 1;
  font-size: 20px;
  font-weight: 200;
  margin-left: 5px;
`;
const Icon = styled.div`
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-width: 4px;
  border-style: solid;
  border-color: black;
  padding: 5px;
  margin-top: 5px;
`;

const IconContainer = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const RatingInfo =styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
`

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={"./img/" + product.id + ".jpg"} />
        </ImgContainer>
        <InfoContainer>
          <Title> {product.name}</Title>
          <Desc>{product.description}</Desc>
          <Price>$ {product.price}</Price>
          <IconContainer>
            <Icon>
              <ShoppingCartOutlined fontSize="large" />
            </Icon>
            <Icon>
              <FavoriteBorderOutlined fontSize="large" />
            </Icon>
          </IconContainer>
          <FeaturesContainer>
            <Feature>
              <ColorTitle >Color</ColorTitle>
              <FeatureColor color={product.color}></FeatureColor>
            </Feature>
            <Feature>
              <FeatureTitle>Brand</FeatureTitle>
              <FeatureValue>{product.brand}</FeatureValue>
            </Feature>
            <Feature>
              <FeatureTitle>Material</FeatureTitle>
              <FeatureValue>{product.material}</FeatureValue>
            </Feature>
            <Feature>
              <FeatureTitle>Warranty</FeatureTitle>
              <FeatureValue>{product.warranty}</FeatureValue>
            </Feature>
            <Feature>
              <FeatureTitle>Connectivity</FeatureTitle>
              <FeatureValue>{product.connectivity}</FeatureValue>
            </Feature>
            <Feature>
              <FeatureTitle>Design</FeatureTitle>
              <FeatureValue>{product.design}</FeatureValue>
            </Feature>
            <Feature>
              <FeatureTitle>Rating</FeatureTitle>
              <FeatureValue>
                  <RatingInfo>
                    <div>{product.rating}/5</div>
                  <RatingStar
                    id={String(product.id)}
                    rating={product.rating}
                    size={18}
                  />
                  </RatingInfo>
                

              </FeatureValue>
            </Feature>
          </FeaturesContainer>
          <FeatureTitle>Reviews:</FeatureTitle>
          <br />
          <FeatureValue>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </FeatureValue>
          <br />
          <br />
          <FeatureValue>
            " Et netus et malesuada fames ac turpis. Sed odio morbi quis commodo
            odio aenean. Dictum varius duis at consectetur lorem.""
          </FeatureValue>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
