import styled from "styled-components";

const Ulmenu = () => {
  return (
    <UlMenu>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">Appliance</a>
        </li>
        <li>
          <a href="#">Electronics</a>
        </li>
        <li>
          <a href="#"> Mobile & Tablets</a>
        </li>
        <li>
          <a href="/Product">accessories</a>
        </li>
        <li>
          <a href="/ProductPage">More Product</a>
        </li>
      </ul>
    </UlMenu>
  );
};

const UlMenu = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  ul {
    padding: 0;
    height: 100%;
    margin: 0;
  }
  li {
    text-align: center;
    list-style-type: none;
    padding: 19.5px 10px;
    float: left;
    position: relative;
  }
  li::before {
    content: "";
    right: 50%;
    left: 50%;
    position: absolute;
    height: 2px;
    transition: 250ms linear;
    background-color: #fff;
    bottom: 0;
  }
  li:hover::before {
    right: 0;
    left: 0;
  }
  li a {
    text-decoration: none;
    color: #fff;
  }
`;
export default Ulmenu;
