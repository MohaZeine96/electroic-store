import Top from "../components/Top";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function ProductdetailPage() {
  const location = useLocation();
  const id = location.state.id;
  const [item, setItem] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products`)
      .then((res) => {
        const foundItem = res.data.find((item) => item._id === id);
        setItem(foundItem);
        console.log(foundItem);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);
  return (
    <ProductDetails>
      <Top />
      <AboutProducts item={item} />
      <Footer />
    </ProductDetails>
  );
}
function AboutProducts({ item }) {
  return (
    <ProductInfoCon>
      <div className="ProductInfo">
        <div className="ProductImg">
          <img src={item?.imageSrc} />
        </div>
        <div className="info">
          <h3>{item?.name}</h3>
          <span className="condition">Condition: new</span>
          <span className="Shipping">Shipping: free</span>
          <label>Select your Stroge</label>
          <select>
            <option>512gb/8gb</option>
            <option>256gb/6gb</option>
          </select>
          <span>Price: {item?.price}$</span>
          <div className="btnHolder">
            <button id="AddToCart">Add to cart</button>
            <button id="AddToWishList">Add to wish list</button>
          </div>
        </div>
      </div>
      <Info desc={item?.des} />
    </ProductInfoCon>
  );
}

function Info({ desc }) {
  return (
    <InfoTab>
      <Line>
        <span className="left-line"></span>
        <span id="Xinfo">Information</span>
        <span className="right-line"></span>
      </Line>
      <div className="Info">{desc}</div>
    </InfoTab>
  );
}
const ProductDetails = styled.div``;
const ProductInfoCon = styled.div`
  width: 1400px;
  margin: 40px auto;
  position: relative;
  .ProductInfo {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .ProductImg {
    width: 45%;
    height: 400px;
    img {
      width: 100%;
    }
  }
  .info {
    width: 45%;
    height: 400px;
    position: relative;
  }
  label {
    margin-top: 20px;
    font-size: 18px;
  }
  select {
    padding: 8px 20px;
    right: 0;
    position: absolute;
    option {
      padding: 8px 20px;
    }
  }

  span {
    width: 100%;
    float: left;
    display: block;
    margin-top: 10px;
    font-size: 18px;
  }
  .btnHolder {
    width: 100%;
    bottom: 0;
    position: absolute;
    display: flex;
    justify-content: space-between;
    button {
      background-color: transparent;
      border: none;
      padding: 6px 26px;
      font-size: 20px;
      cursor: pointer;
    }
    #AddToCart {
      background-color: #1754c3;
      color: #fff;
    }
    #AddToWishList {
      border: solid 1px #5e5a5a;
      background-color: transparent;
    }
  }
`;
const InfoTab = styled.div`
  width: 100%;
  height: auto;
  margin-top: 40px;
  span {
    float: none;
  }
`;
const Line = styled.div`
  display: flex;
  justify-content: space-between;
  #Xinfo {
    width: 10%;
    background-color: transparent;
    height: max-content;
    text-align: center;
    margin-top: 0px;
  }
  span {
    width: 45%;
    height: 1px;
    background-color: blue;
  }
`;
export default ProductdetailPage;
