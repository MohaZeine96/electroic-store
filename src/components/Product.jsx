import styled from "styled-components";

const ProductHolder = ({ products, Gatageries }) => {
  return (
    <>
      <ProductGatagriesType>
        <div className="LeftLine"></div>
        <div className="title">{Gatageries}</div>
        <div className="RightLine"></div>
      </ProductGatagriesType>
      <ProductHolderC>
        {products?.map((element, index) => (
          <Product
            key={index}
            src={element.imageSrc}
            name={element.name}
            price={element.price}
          />
        ))}
      </ProductHolderC>
    </>
  );
};

const Product = ({ src, name, price }) => {
  return (
    <PorductBox>
      <ProductImage>
        <img src={src} alt={name} />
      </ProductImage>
      <ProductNameAndPriceHolder>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}$</ProductPrice>
      </ProductNameAndPriceHolder>
    </PorductBox>
  );
};
const ProductHolderC = styled.div`
  width: 1400px;
  height: 300px;
  margin: 30px auto;
  display: flex;
  justify-content: space-around;
`;
const ProductGatagriesType = styled.div`
  width: 1400px;
  margin: 0 auto;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .LeftLine {
    width: 40%;
    height: 2px;
    background-color: #ccc;
  }
  .RightLine {
    width: 40%;
    height: 2px;
    background-color: #ccc;
  }
`;
const PorductBox = styled.div`
  width: 220px;
  float: left;
  cursor: pointer;
  gap: 10px;
`;
const ProductImage = styled.div`
  width: 100%;
  height: 160px;
  overflow: hidden;
  img {
    width: 100%;
    height: 160px;
    overflow: hidden;
  }
`;
const ProductNameAndPriceHolder = styled.div`
  margin: 10px 20px;
`;
const ProductName = styled.div``;
const ProductPrice = styled.div`
  float: right;
`;
export default ProductHolder;
