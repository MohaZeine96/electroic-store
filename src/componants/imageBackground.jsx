import styled from "styled-components";

const ImageBackgroudContainer = ({ imgSrc }) => {
  return <ImageBackgroudForDecartion imgsrc={imgSrc} />;
};

const ImageBackgroudForDecartion = styled.div((props) => ({
  width: "100%",
  height: "400px",
  margin: "30px 0px",
  backgroundImage: `url(${props.imgsrc})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  maskSize: "cover",
  backgroundAttachment: "fixed",
}));

export default ImageBackgroudContainer;
