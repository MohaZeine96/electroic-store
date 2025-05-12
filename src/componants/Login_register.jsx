import { useState, useRef, useEffect } from "react"; // Remove `use` — it doesn't exist

import styled from "styled-components";

const LoginRegister = () => {
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef(null);
  const handleToggle = () => {
    setIsOpen((curr) => !curr);
  };
  const handleClickOutside = (event) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <BoxHolder ref={boxRef}>
      <Box onClick={handleToggle}>
        <span>Login / Register</span>
      </Box>
      {isOpen && <Dropdown />}
    </BoxHolder>
  );
};
const LoginForm = () => {
  return (
    <div id="LoginBox" className="formContainer">
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
      <button id="LoginButton">Login</button>
    </div>
  );
};
const RegisterForm = () => {
  return (
    <div id="RegisterBox" className="formContainer">
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm your Password" />
      </form>
      <button id="RegisterButton">Register</button>
    </div>
  );
};
// Renamed for clarity
const Dropdown = () => {
  const [LoginOrRegister, setLoginOrRegister] = useState(0);
  const [LoginOrRegisterActive, setLoginOrRegisterActive] =
    useState("LoginActive");
  return (
    <DropdownInner>
      <div className={`Btnholder  ${LoginOrRegisterActive}`}>
        <button
          onClick={() => {
            setLoginOrRegister(0);
            setLoginOrRegisterActive("LoginActive");
          }}
          id="LoginBtn"
        >
          Login
        </button>
        <button
          id="RegisterBtn"
          onClick={() => {
            setLoginOrRegister(-100);
            setLoginOrRegisterActive("RegisterActive");
          }}
        >
          Register
        </button>
      </div>
      {/* <RegisterAndLeft style={`left: ${LoginOrRegister} + 'px'`}> */}
      <RegisterAndLeft style={{ left: `${LoginOrRegister}%` }}>
        {/* {LoginOrRegister ? <LoginForm /> : <RegisterForm />} */}
        <LoginForm />
        <RegisterForm />
      </RegisterAndLeft>
    </DropdownInner>
  );
};

const DropdownInner = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 15px;
  background: #fff;
  border: 1px solid #ccc;
  position: absolute;
  top: 50px;
  left: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
  .Btnholder {
    width: 100%;
    height: 40px;
    position: relative;
  }
  .Btnholder::before {
    content: "";
    transition: 250ms linear;
    width: 50%;
    height: 2px;
    position: relative;
    display: block;
    background-color: blue;
    bottom: 0;
  }
  button {
    width: 50%;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  #LoginBtn {
    border-right: solid 1px #ccc;
  }
  form {
    padding: 20px;
    float: left;
  }
  form input {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-bottom: solid 1px #ccc;
  }
  #RegisterBox #RegisterButton,
  #LoginButton {
    left: calc(50% - 75px);
    position: relative;
  }
  .LoginActive::before {
    left: 0;
  }
  .RegisterActive::before {
    left: 50%;
  }
`;
const RegisterAndLeft = styled.div`
  width: 600px;
  height: 300px;
  position: relative;
  transition: 250ms linear;
  .formContainer {
    float: left;
    width: 300px;
  }
`;
const BoxHolder = styled.div`
  position: relative;
`;

const Box = styled.div`
  width: 300px;
  height: 40px;
  border-radius: 15px;
  border: solid 1px #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default LoginRegister;
