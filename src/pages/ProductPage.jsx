import Top from "../components/Top";
import Footer from "../components/Footer";
import styled from "styled-components";
import ProductsMain from "../components/ProductsAside";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const brands = ["samsung", "apple", "acer", "msi", "lenovo", "hp"];
function ProductPage() {
  const [brand, setBrand] = useState("");
  return (
    <AppWrapper>
      <div className="App">
        <Top />
        <Body setBrand={setBrand} brand={brand} />
        <Footer />
      </div>
    </AppWrapper>
  );
}
function Body({ setBrand, brand }) {
  return (
    <BodyWrapper>
      <Side>
        <SideMenu>
          <h3>Brand</h3>
          {brands.map((item, index) => (
            <MenuItem key={index} brandName={item} setBrand={setBrand} />
          ))}
          <PriceTab>
            <h3>Price</h3>
            <input type="number" placeholder="min price" />
            <input type="number" placeholder="max price" />
          </PriceTab>
          <Apply>
            <button className="cancel">Cancel</button>
            <button className="apply">Apply</button>
          </Apply>
          <Categories>
            <h3>Categories</h3>
            <ul>
              <li>APPLICANCE</li>
              <li>Electronics</li>
              <li>Mobile & tablets</li>
              <li>Accessories</li>
            </ul>
          </Categories>
        </SideMenu>
      </Side>
      <ProductsMain setBrand={setBrand} brand={brand} />
    </BodyWrapper>
  );
}
const MenuItem = ({ brandName, setMessage, setBrand }) => {
  function handleFilter() {
    setIscheck((isChecked) => !isChecked);
    setBrand((prev) => {
      if (prev.includes(brandName)) {
        // If brand is already selected, remove it
        return prev.filter((b) => b !== brandName);
      } else {
        // If not, add it
        return [...prev, brandName];
      }
    });
  }
  const [isChecked, setIscheck] = useState(false);
  return (
    <MenuList>
      <span onClick={handleFilter}>{isChecked && <span></span>}</span>
      <p>{brandName}</p>
    </MenuList>
  );
};
const AppWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const BodyWrapper = styled.div`
  width: 1400px;
  margin: 40px auto;
  display: flex;
`;
const Side = styled.div`
  width: 300px;
  float: left;
`;
const SideMenu = styled.div`
  width: 300px;
  height: 800px;
  border-radius: 15px;
  border: solid 1px #ccc;
`;
const MenuList = styled.div`
  cursor: pointer;
  padding: 0px 10px;
  text-align: left;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 40px;
  p {
    margin: 0;
  }
  span {
    display: block;
    width: 20px;
    height: 20px;
    border: solid 1px #ccc;
    border-radius: 5px;
    float: left;
    margin-right: 10px;
    margin-top: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      border-radius: 5px;
      border: none;
      margin: 0;
      width: 90%;
      height: 90%;
      background-color: #1754c3;
    }
  }
`;
const PriceTab = styled.div`
  height: 140px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-left: 0;
  border-right: 0;
  h3 {
    text-align: left;
    margin: 0;
  }
  input {
    width: 100%;
    box-sizing: border-box;
    padding: 6px 10px;
    margin-top: 10px;
  }
  .PriceHodlder {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
const Apply = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #ccc;
  button {
    height: max-content;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 18px;
  }
  .apply {
    background-color: #2f4fd0;
    border: none;
    color: #fff;
  }
  .cancel {
    background-color: transparent;
    border: none;
  }
`;
const Categories = styled.div`
  padding: 20px;
  h3 {
    text-align: left;
    margin: 10px 0px;
  }
  ul {
    margin: 0;
    padding-left: 10px;
  }
  li {
    list-style-type: none;
    text-align: left;
    cursor: pointer;
    padding: 4px 8px;
  }
`;
export default ProductPage;
