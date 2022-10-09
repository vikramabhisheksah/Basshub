import styled from "styled-components";
// import { products } from "../data";
// import ProductCompare from "../Components/ProductCompare";
import Comparison from "../Components/Comparison";
import React from "react";
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
          <Comparison compareItems={compareItems} />
        </div>
      )}
      {compareItems.length<2 &&(
          <span>Add atleast two items to compare</span>
      )}
    </Wrapper>
  );
};

export default Compare;
