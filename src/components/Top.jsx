import LoginRegister from "./Login_register";
import Ulmenu from "./UlMenu";
import styled from "styled-components";
import Search from "./search";
function Top() {
  return (
    <>
      <TopTop>
        <Search />
        <LoginRegister />
      </TopTop>
      <TopMenu>
        <Ulmenu />
      </TopMenu>
    </>
  );
}

const TopTop = styled.div`
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
export default Top;
