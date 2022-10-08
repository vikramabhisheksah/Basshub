import styled from "styled-components";
// import { products } from "../data";
import ProductCompare from "../Components/ProductCompare";
import Comparison from "../Components/Comparison";
const Wrapper = styled.div`
  margin: 30px;
`;

const Compare = ({ compareItems }) => {
  return (
    <Wrapper>
      {compareItems.length >= 2 && (
        <div className="home mt-5">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-3">Compare Products</h2>
            </div>
          </div>
          
          <div className="row mt-3">
            {compareItems.map((product) => (
              <ProductCompare key={product.id} product={product} />
            ))}
          </div>
          <Comparison compareItems={compareItems} />
        </div>
      )}
    </Wrapper>
  );
};

export default Compare;
