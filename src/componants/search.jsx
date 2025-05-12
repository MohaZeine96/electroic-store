import styled from "styled-components";

const Search = () => {
  return (
    <SearchBox>
      <div className="Search-inner">
        <input type="search" placeholder="Search" />
      </div>
    </SearchBox>
  );
};
const SearchBox = styled.div`
  width: 600px;
  height: 40px;
  .Search-inner {
    height: 100%;
  }
  .Search-inner input {
    width: 100%;
    height: 100%;
    padding: 0px 10px;
  }
`;
export default Search;
