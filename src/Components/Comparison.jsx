import "./styles.css";
import styled from "styled-components";
import { useNavigate } from "react-router";
import React from "react";

const FeatureColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    margin:0px 5px;
    display:flex;
    justify-content: center;
    align-items:center;
    border-width: 1px;
    border-style: solid;
    border-color:black;
    margin-left:50%;
`
const Image = styled.img`
  height: 300px;
  max-width: 300px;
 cursor:pointer;
`;
const Comparison = ({ compareItems }) => {
    let navigate = useNavigate();
  return (
    <div className="row compare">
      <div className="col-12 mt-5 text-center">
        <table className="table">
          <thead className="thead-default">
          <tr>
              <th />
              {compareItems.map((product) => (
                <th key={product.id} onClick={() => {
                    navigate(`/product/${product.id}`);
                  }}><Image src={"/img/" + product.id + ".jpg"} /></th>
              ))}
            </tr>
            <tr>
              <th />
              {compareItems.map((product) => (
                <th key={product.id}>{product.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="price">
              <th scope="row">Price</th>
              {compareItems.map((product) => (
                <td key={product.id} className="text-center">
                  {product.price}
                </td>
              ))}
            </tr>
          </tbody>
          <tbody>
            <tr className="brand">
              <th scope="row">Brand</th>
              {compareItems.map((product) => (
                <td key={product.id} className="text-center">
                  {product.brand}
                </td>
              ))}
            </tr>
          </tbody>
          <tbody>
            <tr className="color">
              <th scope="row">Color</th>
              {compareItems.map((product) => (
                <td key={product.id} className="text-center">
                  <FeatureColor color={product.color.toLowerCase()}/>
                </td>
              ))}
            </tr>
          </tbody>
          <tbody>
            <tr className="design">
              <th scope="row">Design</th>
              {compareItems.map((product) => (
                <td key={product.id} className="text-center">
                  {product.design}
                </td>
              ))}
            </tr>
          </tbody>
          <tbody>
            <tr className="connectivity">
              <th scope="row">Connectivity</th>
              {compareItems.map((product) => (
                <td key={product.id} className="text-center">
                  {product.connectivity}
                </td>
              ))}
            </tr>
          </tbody>
          <tbody>
            <tr className="material">
              <th scope="row">Material</th>
              {compareItems.map((product) => (
                <td key={product.id} className="text-center">
                  {product.material}
                </td>
              ))}
            </tr>
          </tbody>
          <tbody>
            <tr className="warranty">
              <th scope="row">Warranty</th>
              {compareItems.map((product) => (
                <td key={product.id} className="text-center">
                  {product.warranty}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comparison;
