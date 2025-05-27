import styled from "styled-components";
import AsideTop from "./AsideTop";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductsMain({ brand }) {
  const [products, setProducts] = useState([]);
  const [Filtered, setFiltered] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);
  useEffect(() => {
    // setProducts(products.filter((item) => item.brand === brand));
    const filtered = products.filter((item) => brand.includes(item.brand));
    console.log(filtered);
    setFiltered(filtered);
    if (filtered.length === 0) {
      setFiltered(products);
    }
  }, [brand]);
  useEffect(() => {
    console.log("Updated Filtered products:", products);
  }, [Filtered]);
  return (
    <Aside>
      <AsideTop />
      <DescAndPath />
      <ProductContainer>
        {Filtered?.map((item) => (
          <Product
            key={item._id}
            src={item.imageSrc}
            des={item.name}
            price={item.price}
            id={item._id}
          />
        ))}
      </ProductContainer>
    </Aside>
  );
}
function DescAndPath() {
  return (
    <Container>
      <Path>Categorie / tablets and phone</Path>
      <p>
        Find the phone or tablets that fit your need explorer the world of tech
        and get the latest product here
      </p>
    </Container>
  );
}
function Product({ src, des, price, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate(`/product/${id}`);
    navigate("/product", { state: { id } });
  };
  return (
    <ProductCon
      onClick={() => {
        handleClick();
      }}
    >
      <img src={src} />
      <Disc>
        <p>{des}</p>
        <span className="Price">{price}$</span>
      </Disc>
    </ProductCon>
  );
}
function ProductContainer({ children }) {
  return <div className="ProductContainer">{children}</div>;
}
const Aside = styled.div`
  width: calc(100% - 380px);
  min-height: 300px;
  height: max-content;
  margin-left: 80px;
  float: left;
  .ProductContainer {
    width: 100%;
    min-height: 100vh;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 80px;
  p {
    float: left;
    width: 100%;
    text-align: left;
  }
`;
const Path = styled.div`
  float: left;
  width: 100%;
  text-align: left;
`;
const ProductCon = styled.div`
  display: block;
  width: 250px;
  height: 250px;
  float: left;
  gap: 10px;
  cursor: pointer;
  .Price {
    float: right;
  }
`;
const Disc = styled.div``;
export default ProductsMain;
