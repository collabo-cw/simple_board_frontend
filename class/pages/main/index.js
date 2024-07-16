import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
  box-sin
`;
const Wrapper = styled.div`
  width: 375px;
  padding: 0 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
box-sizing: border-box;
  background-image: url("../img/pizza.jpg");
  background-color: rgba(0, 0, 0, 0.55);
  background-blend-mode: multiply;
  background-size:contain;
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;
  padding-bottom: 70px;
`;
const LogoImg = styled.img`
  width: 100px;
  height: 100px;
`;
const LogoTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  padding-top: 10px;
`;
const InputWrapper = styled.div`
  width: 340px;
`;
const EmailInputWrapper = styled.div`
  border-bottom: 1px solid #fff;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;
const EmailInput = styled.input`
  width: 80%;
  font-size: 16px;
  color: #fff;
  border: none;
  background: none;
  outline: none;
`;
const PasswordInputWrapper = styled.div`
  border-bottom: 1px solid #fff;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;
const PasswordInput = styled.input`
  width: 80%;
  margin-top: 40px;
  font-size: 16px;
  color: #fff;
  border: none;
  background: none;
  outline: none;
`;
const EmailError = styled.div`
  padding-top: 10px;
  font-size: 12px;
  color: #ff1b6d;
`;
const PasswordError = styled.div`
  padding-top: 10px;
  font-size: 12px;
  color: #ff1b6d;
`;
const LoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
  border-radius: 38px;
  background-color: rgba(255, 27, 109, 0.6);
  cursor: pointer;
  margin-top:15px;
  margin-bottom:15px;
`;
const LoginButtonTitle = styled.div`
  opacity: 1;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
const EtcButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const EtcItem = styled.div`
  font-size: 14px;
  color: #fff;
  cursor: pointer;
`;
const SocialLoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-radius: 38px;
  color: #fae100;
  border: 2px solid #fae100;
  margin: 60px 0 80px 0;
  cursor: pointer;
`;
const SocialLoginButtonImg = styled.img`
  width: 32px;
  height: 30px;
  margin-right: 20px;
`;
const SocialLoginButtonTitle = styled.div`
  opacity: 1;
  font-size: 16px;
  font-weight: bold;
`;

export default function Quiz01_05() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    if (!email.includes("@")) {
      setEmailError("이메일 주소를 다시 확인해주세요.");
    } else {
      setEmailError("");
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (password.length >= 8 && password.length <= 16) {
      setPasswordError("");
    } else {
      setPasswordError("8~16자의 영문,숫자,특수 문자만 사용 가능합니다.");
    }
  };
  const onClickLogin = () => {
    if (emailError === "" && passwordError === "") {
      alert("환영합니다");
    } 
  };

  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <LogoImg src="/img/Logo.png"></LogoImg>
          <LogoTitle>잇츠로드</LogoTitle>
        </LogoWrapper>
        <InputWrapper>
          <EmailInputWrapper>
            <EmailInput
              placeholder="이메일을 입력해주세요"
              onChange={onChangeEmail}
            ></EmailInput>
          </EmailInputWrapper>
          <EmailError>{emailError}</EmailError>
          <PasswordInputWrapper>
            <PasswordInput
              placeholder="비밀번호를 입력해주세요"
              type="password"
              onChange={onChangePassword}
            ></PasswordInput>
          </PasswordInputWrapper>
          <PasswordError>{passwordError}</PasswordError>
        </InputWrapper>
        <LoginButton onClick={onClickLogin}>
          <LoginButtonTitle>로그인</LoginButtonTitle>
        </LoginButton>
        <EtcButton>
          <EtcItem>이메일 찾기</EtcItem>
          <EtcItem>|</EtcItem>
          <EtcItem>비밀번호 찾기</EtcItem>
          <EtcItem>|</EtcItem>
          <EtcItem>회원가입</EtcItem>
        </EtcButton>
        <SocialLoginButton>
          <SocialLoginButtonImg src="../img/kakao.png"></SocialLoginButtonImg>
          <SocialLoginButtonTitle>카카오톡으로 로그인</SocialLoginButtonTitle>
        </SocialLoginButton>
      </Wrapper>
    </Container>
  );
}