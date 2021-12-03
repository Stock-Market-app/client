import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignUpImage from "../assets/login.svg";
import { CoverPicture } from "../components/CoverPicture";
import * as authActions from "../store/actions/auth";

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [check, setCheck] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(false);

  const signUpHandler = async () => {
    // console.log(first_name, last_name, email, password, confirmPass);
    try {
      if (first_name && last_name && email && password && confirmPass) {
        setIsLoading(true);
        if (loading) toast.info("Signing Up...");
        await dispatch(
          authActions.signUp(
            first_name,
            last_name,
            email,
            password,
            confirmPass
          )
        );
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
        setIsLoading(false);
        toast.success("Sign up successful");
      } else {
        setIsError(true);
        setIsLoading(false);
        if (error) toast.warning("Please fill all the fields");
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      if (error) toast.error("Email already taken");
      setIsError(false);
    }
  };

  const checkConfirmPass = () => {
    return password === confirmPass;
  };

  useEffect(() => {
    if (checkConfirmPass() && confirmPass.length > 0) {
      setCheck("Passwords match!");
    } else if (confirmPass.length > 0) {
      setCheck("Passwords do not match");
    }
  }, [check, confirmPass]);

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
              value={first_name}
            />
            <p>Last name</p>
            <InputBox
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={last_name}
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
            <p>Confirm Password</p>
            <InputBox
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPass(e.target.value)}
              value={confirmPass}
            />
            {confirmPass.length > 0 && <p>{check}</p>}
            <Button onClick={signUpHandler}>Sign Up</Button>
            <p>
              Already have an account?{" "}
              <span onClick={loginClickHandler} style={{ cursor: "pointer" }}>
                Log In!
              </span>
            </p>
          </FormContainer>
        </Left>
        <Right>
          <CoverPicture url={SignUpImage} alt="stock market" />
        </Right>
      </SubContainer>
      <ToastContainer newestOnTop={true} theme="dark" />
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

  > div > p {
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
