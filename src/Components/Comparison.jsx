import "./styles.css";
import styled from "styled-components";
import { useNavigate } from "react-router";
import React from "react";
import { RatingStar } from "rating-star";


const FeatureColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  margin-left: 50%;
`;
const Image = styled.img`
  height: 300px;
  max-width: 300px;
  cursor: pointer;
`;
const RowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  height: 60px;
  width: 150px;
  background-color: #005e7c;
  color: white;
  font-size: 15px;
  font-weight: 200;
  padding: 5px;
`;

const Comparison = ({ compareItems }) => {
  let navigate = useNavigate();
  const notify = () => alert("The comparison has been saved (Only for Demo purpose) ");

  const handleClick = (idOfTh) => {
    if (document.getElementById(idOfTh).style.backgroundColor != 'lavender') {
      document.getElementById(idOfTh).style.backgroundColor = 'lavender';
    }else {
      document.getElementById(idOfTh).style.backgroundColor = 'white';
    };
  }

  return (
    <div className="row compare">
      <div className="col-12 mt-5 text-center">
        <table className="table">
          <thead className="thead-default">
            <tr>
              <th />
              {compareItems.map((product) => (
                <th
                  key={product.id}
                  onClick={() => {
                    navigate(`/product/${product.id}`);
                  }}
                >
                  <Image src={"./img/" + product.id + ".jpg"} />
                </th>
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
            <tr id="price" className="price">
              <th scope="row">
                <RowHeader>
                  <input type="checkbox" name="price" value="Price" onClick={() => handleClick("price")}/>
                  <span style={{ marginLeft: "30px" }}>Price</span>
                </RowHeader>
              </th>
              {compareItems.map((product) => (
                <td key={product.id} className="text-center">
                  {product.price}
                </td>
              ))}
            </tr>
          </tbody>
          <tbody>
            <tr id="brand" className="brand">
              <th scope="row">
                <RowHeader>
                  <input type="checkbox" name="brand" value="Brand" onClick={() => handleClick("brand")}/>
                  <span style={{ marginLeft: "30px" }}>Brand</span>
                </RowHeader>
              </th>
              {compareItems.map((product) => (
                <td key={product.id} className="text-center">
                  {product.brand}
                </td>
              ))}
            </tr>
          </tbody>
          <tbody>
            <tr id="rating" className="rating">
              <th scope="row">
                <RowHeader>
                  <input type="checkbox" name="rating" value="Rating" onClick={() => handleClick("rating")}/>
                  <span style={{ marginLeft: "30px" }}>Rating</span>
                </RowHeader>
              </th>
              {compareItems.map((product) => (
                <td key={product.id} className="text-center">
                  <RatingStar
                    id={String(product.id)}
                    rating={product.rating}
                    size={18}
                  />
                </td>
              ))}
            </tr>
          </tbody>
          <tbody>
            <tr id="color" className="color">
              <th scope="row">
                <RowHeader>
                  <input type="checkbox" name="color" value="Color" onClick={() => handleClick("color")}/>
                  <span style={{ marginLeft: "30px" }}>Color</span>
                </RowHeader>
              </th>
              {compareItems.map((product) => (
                <td key={product.id} className="text-center">
                  <FeatureColor color={product.color.toLowerCase()} />
                </td>
              ))}
            </tr>
          </tbody>
          <tbody>
            <tr id="design" className="design">
              <th scope="row">
                <RowHeader>
                  <input type="checkbox" name="design" value="Design" onClick={() => handleClick("design")}/>
                  <span style={{ marginLeft: "30px" }}>Design</span>
                </RowHeader>
              </th>
              {compareItems.map((product) => (
                <td key={product.id} className="text-center">
                  {product.design}
                </td>
              ))}
            </tr>
          </tbody>
          <tbody>
            <tr id="connectivity" className="connectivity">
              <th scope="row">
                <RowHeader>
                  <input
                    type="checkbox"
                    name="connectivity"
                    value="Connectivity"
                    onClick={() => handleClick("connectivity")}
                  />
                  <span style={{ marginLeft: "30px" }}>Connectivity</span>
                </RowHeader>
              </th>
              {compareItems.map((product) => (
                <td key={product.id} className="text-center">
                  {product.connectivity}
                </td>
              ))}
            </tr>
          </tbody>
          <tbody>
            <tr id="material" className="material">
              <th scope="row">
                <RowHeader>
                  <input type="checkbox" name="material" value="Material" onClick={() => handleClick("material")}/>
                  <span style={{ marginLeft: "30px" }}>Material</span>
                </RowHeader>
              </th>
              {compareItems.map((product) => (
                <td key={product.id} className="text-center">
                  {product.material}
                </td>
              ))}
            </tr>
          </tbody>
          <tbody>
            <tr id="warranty" className="warranty">
              <th scope="row">
                <RowHeader>
                  <input type="checkbox" name="warranty" value="Warranty" onClick={() => handleClick("warranty")}/>
                  <span style={{ marginLeft: "30px" }}>Warranty</span>
                </RowHeader>
              </th>
              {compareItems.map((product) => (
                <td key={product.id} className="text-center">
                  {product.warranty}
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <Button onClick={notify}>Save Comparison</Button>
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default Comparison;
