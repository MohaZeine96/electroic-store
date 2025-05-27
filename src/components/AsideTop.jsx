const { default: styled } = require("styled-components");
const v12 = `${process.env.PUBLIC_URL}/img/v12.png`;
function AsideTop() {
  return (
    <AsideTopControls>
      <SortBy />
      <NumberOfProductsPerPage />
      <Columns />
      <TypeOfViewbtn />
    </AsideTopControls>
  );
}

function SortBy() {
  return (
    <SortByT>
      <select>
        <option>1 option</option>
        <option>2 option</option>
        <option>3 option</option>
        <option>4 option</option>
        <option>5 option</option>
      </select>
    </SortByT>
  );
}

function NumberOfProductsPerPage() {
  return (
    <NumberOfProductsPerPageOptions>
      <select>
        <option>Product per page 12</option>
        <option>Product per page 24</option>
        <option>Product per page 48</option>
        <option>Product per page 96</option>
      </select>
    </NumberOfProductsPerPageOptions>
  );
}
function Columns() {
  return (
    <ColumnsOptions>
      <span>Columns:</span>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
    </ColumnsOptions>
  );
}
function TypeOfViewbtn() {
  return (
    <ViewBtn>
      <button>
        <img src={v12} alt="viewbtn" />
      </button>
    </ViewBtn>
  );
}
const AsideTopControls = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 4px;
`;
const SortByT = styled.div`
  float: left;
  select {
    padding: 12px 20px;
  }
`;
const NumberOfProductsPerPageOptions = styled.div`
  float: left;
  margin-left: 20px;
  select {
    padding: 12px 20px;
  }
`;
const ColumnsOptions = styled.div`
  width: 300px;
  height: 40px;
  float: left;
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    float: left;
  }
  button {
    float: left;
    background-color: transparent;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
  }
`;
const ViewBtn = styled.div`
  float: right;
  display: block;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
export default AsideTop;
