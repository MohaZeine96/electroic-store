import "./App.css";
import Search from "./componants/search";
import styled from "styled-components";
import LoginRegister from "./componants/Login_register";
import Ulmenu from "./componants/UlMenu";
import image6 from "./img/image 6.png";
import ProductHolder from "./componants/Product";
import ImageBackgroudContainer from "./componants/imageBackground";
import Footer from "./componants/Footer";
const ImageBackgroud = "img/Maskgroup.png";
const products = [
  {
    imageSrc: "img/image 7.png",
    name: "Samsung Tab S10+",
    price: 920,
  },
  {
    imageSrc: "img/image 7.png",
    name: "Samsung Tab S10+",
    price: 920,
  },
  {
    imageSrc: "img/image 7.png",
    name: "Samsung Tab S10+",
    price: 920,
  },
  {
    imageSrc: "img/image 7.png",
    name: "Samsung Tab S10+",
    price: 920,
  },
  {
    imageSrc: "img/image 7.png",
    name: "Samsung Tab S10+",
    price: 920,
  },
];
const products2 = [
  {
    imageSrc: "img/Sonysat-new-1-510x510 2.png",
    name: "Samsung Tab S10+",
    price: 920,
  },
  {
    imageSrc: "img/Sonysat-new-1-510x510 2.png",
    name: "Samsung Tab S10+",
    price: 920,
  },
  {
    imageSrc: "img/Sonysat-new-1-510x510 2.png",
    name: "Samsung Tab S10+",
    price: 920,
  },
  {
    imageSrc: "img/Sonysat-new-1-510x510 2.png",
    name: "Samsung Tab S10+",
    price: 920,
  },
  {
    imageSrc: "img/Sonysat-new-1-510x510 2.png",
    name: "Samsung Tab S10+",
    price: 920,
  },
];

function App() {
  return (
    <AppWrapper>
      <Top>
        <Search />
        <LoginRegister />
      </Top>
      <TopMenu>
        <Ulmenu></Ulmenu>
      </TopMenu>
      <TopSlider>
        <img src={image6} alt="Image" />
      </TopSlider>
      <Body>
        <ProductHolder products={products} Gatageries={"Tablets & Phone"} />
        <ProductHolder products={products2} Gatageries={"Monitors and TVs"} />
        <ImageBackgroudContainer imgSrc={ImageBackgroud} />
        <ProductHolder products={products} Gatageries={"Tablets & Phone"} />
        <ProductHolder products={products2} Gatageries={"Monitors and TVs"} />
        <ImageBackgroudContainer imgSrc={ImageBackgroud} />
        <ProductHolder products={products} Gatageries={"Tablets & Phone"} />
        <ProductHolder products={products2} Gatageries={"Monitors and TVs"} />
        <Footer />
      </Body>
    </AppWrapper>
  );
}
const AppWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const Top = styled.div`
  width: 1200px;
  padding: 0px 20px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;
const TopMenu = styled.div`
  width: 100%;
  height: 60px;
  background-color: #2d2d2d;
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
export default App;
