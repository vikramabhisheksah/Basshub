// import './styles.css'
import styled from "styled-components";

const Image = styled.img`
  height: 300px;
  max-width: 300px;
  z-index: 2;
`;

const ImgWrapper = styled.div`
    cursor: pointer;
    position: relative;
    padding-bottom: 100px;
    border-radius: 5px;
    overflow: hidden;
    transition: all 500ms ease-out;
    margin: 10px;
    border: 1px solid #ddd;
    &:hover {
      box-shadow: 0 13px 21px -5px rgba(0, 0, 0, 0.2);
`;
const Stats = styled.div``;
const StatsContainer = styled.div`
  background: #fff;
  padding: 25px 15px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
const ProductPrice = styled.span`
  float: right;
  color: $product-main-color;
  font-size: 22px;
  font-weight: 600;
`;

const Productname = styled.span`
  font-size: 22px;
  color: #393c45;
`;

const ProductCompare = ({ product }) => (
  <div key={product.id} className="col-sm-6 col-md-3">
    <ImgWrapper>
      <Image src={"/img/" + product.id + ".jpg"} />
      <Stats>
        <StatsContainer>
          <ProductPrice>$ {product.price}</ProductPrice>
          <br />
          <Productname>{product.name}</Productname>
        </StatsContainer>
      </Stats>
    </ImgWrapper>
  </div>
);

export default ProductCompare;
