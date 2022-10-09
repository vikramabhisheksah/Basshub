import {
  CompareOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { RatingStar } from "rating-star";
import React from "react";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Wrapper = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 280px;
  cursor: pointer;
  border-style: solid;
  border-width: 0.5px;
  position: relative;
`;
const Container = styled.div`
  padding: 0px 20px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ecf0f1;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  max-width: 95%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  z-index:4;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const CompareIcon = styled.div`
  flex:1
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.selected?'white':'#9C92A3'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition: all 0.5s ease;
  font-size:10px;
  padding: 5px;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
  cursor:pointer
  border-style:solid;
  border-width:2px;
  border-color:black;
`;
const ProductInfo = styled.div`
  margin: 10px;
`;
const ProductTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  min-height: 100px;
`;
const ProductRating = styled.div`
`;
const ProductPrice = styled.div`

  font-size: 20px;
  font-weight: 600;
`;
const ProductStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Product = ({ item, handleCompareClick , selected}) => {
  let navigate = useNavigate();
  
  return (
    <Wrapper>
      
      <Container
        onClick={() => {
          navigate(`/product/${item.id}`);
        }}
      >
        <Circle />
        <Image src={"/img/" + item.id + ".jpg"} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
      <ProductInfo>
        <ProductTitle>{item.name}</ProductTitle>
        <ProductStats>
          <ProductRating>
            <RatingStar id={String(item.id)} rating={item.rating}  size={18}/>
          </ProductRating>
          <ProductPrice>$ {item.price}</ProductPrice>
          <CompareIcon onClick={()=>handleCompareClick(item)} selected={selected} >
            <CompareOutlined/><span>Compare</span>
          </CompareIcon>
        </ProductStats>
      </ProductInfo>
    </Wrapper>
  );
};

export default Product;
