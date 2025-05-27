import { useState, useRef, useEffect } from "react"; // Remove `use` — it doesn't exist
import axios from "axios";
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
// const LoginForm = () => {
//   const [loginMailOnchange, setLogingMailOnchange] = useState("");
//   const [loginPasswordOnchange, setLogingPasswordOnchange] = useState("");
//   const handleloginMailOnchange = (e) => {
//     setLogingMailOnchange(e.value);
//   };
//   const handleloginPasswordOnchange = (e) => {
//     setLogingPasswordOnchange(e.value);
//   };
//   const handleLogin = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     console.log(loginMailOnchange);
//     const userData = {
//       loginMailOnchange,
//       loginPasswordOnchange,
//     };
//     console.log(userData);
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/users",
//         userData
//       );

//       alert("User successfully logged in!");
//       console.log("Response:", response.data);
//     } catch (err) {
//       console.error("Error: User unable to login:", err);
//       alert("Error: User unable to login.");
//     }
//   };

//   return (
//     <div id="LoginBox" className="formContainer">
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           onChange={handleloginMailOnchange}
//           placeholder="Email"
//           value={loginMailOnchange}
//         />
//         <input
//           type="password"
//           onChange={handleloginPasswordOnchange}
//           value={loginPasswordOnchange}
//           placeholder="Password"
//         />
//       </form>
//       <button id="LoginButton" onClick={handleLogin}>
//         Login
//       </button>
//     </div>
//   );
// };

const LoginForm = () => {
  const [loginMailOnchange, setLogingMailOnchange] = useState("");
  const [loginPasswordOnchange, setLogingPasswordOnchange] = useState("");
  const fetchUserByEmail = async (email) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/users/${email}`);
      console.log("User found:", res.data);
    } catch (err) {
      console.error("User not found or error occurred", err);
    }
  };

  const handleloginMailOnchange = (e) => {
    setLogingMailOnchange(e.target.value);
  };

  const handleloginPasswordOnchange = (e) => {
    setLogingPasswordOnchange(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email: loginMailOnchange,
      password: loginPasswordOnchange,
    };
    fetchUserByEmail(loginMailOnchange);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users",
        userData
      );
      alert("User successfully logged in!");
      console.log("Response:", response.data);
    } catch (err) {
      console.error("Error: User unable to login:", err);
      alert("Error: User unable to login.");
    }
  };

  return (
    <div id="LoginBox" className="formContainer">
      <form onSubmit={handleLogin}>
        <input
          type="text"
          onChange={handleloginMailOnchange}
          placeholder="Email"
          value={loginMailOnchange}
        />
        <input
          type="password"
          onChange={handleloginPasswordOnchange}
          value={loginPasswordOnchange}
          placeholder="Password"
        />
        <button id="LoginButton" type="submit">
          Login
        </button>
      </form>
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
