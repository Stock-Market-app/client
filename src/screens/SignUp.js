import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import LoginImage from "../assets/login.svg";
import { CoverPicture } from "../components/CoverPicture";

export const SignUp = () => {
  let navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = () => {
    console.log(firstName, lastName, email, password);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  const loginClickHandler = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <SubContainer>
        <Left>
          <h3>Register yourself now!</h3>
          <FormContainer>
            <p>First name</p>
            <InputBox
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <p>Last name</p>
            <InputBox
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <p>Email</p>
            <InputBox
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <p>Password</p>
            <InputBox
              type="password"
              placeholder="Your Password Here"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button onClick={signUpHandler}>Sign Up</Button>
            <p>
              Already have an account?{" "}
              <span onClick={loginClickHandler}>Log In!</span>
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
