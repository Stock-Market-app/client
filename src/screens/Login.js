import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginImage from "../assets/login.svg";
import { CoverPicture } from "../components/CoverPicture";
import * as authActions from "../store/actions/auth";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    // console.log(email, password);
    try {
      if (username && password) {
        toast.info("Logging In ...", { autoClose: 1000 });
       await dispatch(authActions.login(username, password));
        setUserName("");
        
        setPassword("");

        navigate("/dashboard");
      } else {
        toast.warning("Please fill username and password", { autoClose: 2500 });
      }
    } catch (error) {
      if (error)
        toast.error("Invalid username / password", { autoClose: 2500 });
    }
  };
  
  
    const signUpClickHandler = () => {
    navigate("/signup");
  };


  return (
    <Wrapper>
      <SubContainer>
        <Left>
          <h3>Welcome Back</h3>
          <h4>Please fill in your credentials</h4>
          <FormContainer>
            <p>Email</p>
            <InputBox
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
            />
            <p>Password</p>
            <InputBox
              type="password"
              placeholder="Your Password Here"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button onClick={loginHandler}>Login</Button>
            <p>
              Dont have an account?{" "}
              <span onClick={signUpClickHandler} style={{ cursor: "pointer" }}>
                Join Us Now!
              </span>
            </p>
          </FormContainer>
        </Left>
        <Right>
          <CoverPicture url={LoginImage} alt="stock market" />
        </Right>
      </SubContainer>
      <ToastContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SubContainer = styled.div`
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 20px;
  border-radius: 12px;
`;

const Left = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    margin-bottom: 4px;
    font-weight: 400;
  }

  > div > p > span {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const Right = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const InputBox = styled.input`
  background: #fefefe;
  border-width: 1px;
  border-color: #d9dadd;
  border-radius: 6px;
  width: 100%;
  height: 28px;
  padding: 6px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Button = styled.button`
  margin: 12px 0 12px 6px;
  background: #101727;
  border-radius: 12px;
  color: white;
  padding: 12px;
  width: 100%;
`;
