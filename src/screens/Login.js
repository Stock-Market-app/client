import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
        await dispatch(authActions.login(username, password));
      }
      setUserName("");
      setPassword("");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
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
              <span onClick={signUpClickHandler}>Join Us Now!</span>
            </p>
          </FormContainer>
        </Left>
        <Right>
          <CoverPicture url={LoginImage} alt="stock market" />
        </Right>
      </SubContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #e3e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SubContainer = styled.div`
  background: #ffffff;
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
  color: white;
  padding: 12px;
  border-radius: 12px;
  width: 100%;
`;
