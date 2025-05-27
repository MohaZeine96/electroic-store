import styled from "styled-components";
import Top from "../components/Top";
import image6 from "../img/image 6.png";
import ProductHolder from "../components/Product";
import ImageBackgroudContainer from "../components/imageBackground";
import Footer from "../components/Footer";
import AddProductForm from "../components/AddProductForm";
import { useState, useEffect } from "react";
import axios from "axios";
const ImageBackgroud = "img/Maskgroup.png";

function Home() {
  const [products, setProducts] = useState([]);
  const [pp, setPp] = useState([]);

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
    axios.get("http://localhost:5000/api/users").then((res) => {
      console.log(res);
    });
  });
  useEffect(() => {
    // const categories = [...new Set(products.map((p) => p.category))];
    // console.log(categories);
    const cate = {};

    products.forEach((pro) => {
      const cat = pro.category;

      cate[cat] = [...(cate[cat] || []), pro];
    });
    setPp(cate);
    console.log(Object.values(pp)[0]);
  }, [products]);
  return (
    <AppWrapper>
      <Top />
      <TopSlider>
        <img src={image6} alt="Image" />
      </TopSlider>
      <Body>
        <ProductHolder
          products={Object.values(pp)[0]}
          Gatageries={Object.keys(pp)[0]}
        />
        <ImageBackgroudContainer imgSrc={ImageBackgroud} />
        <ProductHolder
          products={Object.values(pp)[1]}
          Gatageries={Object.keys(pp)[1]}
        />
        <AddProductForm />
        <Footer />
      </Body>
    </AppWrapper>
  );
}
const AppWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Body = styled.div`
  width: 100%;
  height: auto;
`;
const TopSlider = styled.div`
  width: 100%;
  height: max-content;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;
export default Home;
