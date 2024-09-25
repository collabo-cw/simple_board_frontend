import axios from 'axios';
import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from 'next/router'
const Container = styled.div`
  position:relative;
  width: 100%;
  box-sizing: border-box;
  background: url("../img/frame2.png") no-repeat;
  background-size:100% auto;
  max-width: 440px;
  min-height:860px;
  margin:0 auto;
  padding:120px 40px 0;
`;
const Wrapper = styled.div`
  display: block;
`;
/* const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 768px;
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-image: url("../img/pizza.jpg");
  background-color: rgba(0, 0, 0, 0.55);
  background-blend-mode: multiply;
  background-size:contain;
`; */


/* const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;
  padding-bottom: 70px;
`;  const LogoImg = styled.img`
  width: 100px;
  height: 100px;
`;  const LogoTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  padding-top: 10px;
`; */


const InputWrapper = styled.div`
  margin-top: 300px;
  padding:0 20px;
`;
const EmailInputWrapper = styled.div`
  border-bottom: 1px solid #333;
  padding-bottom: 10px;

`;
const EmailInput = styled.input`
  width: 80%;
  font-size: 14px;
  border: none;
  background: none;
  outline: none;
`;
const PasswordInputWrapper = styled.div`
  border-bottom: 1px solid #333;
  padding-bottom: 10px;

`;
const PasswordInput = styled.input`
  width: 80%;
  margin-top: 40px;
  font-size: 14px;
  color: #000;
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
  padding:0 70px;
  cursor: pointer;
  margin-top:35px;
  margin-bottom:5px;
`;
const LoginButtonTitle = styled.div`
  background-color: rgba(255, 27, 109, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 38px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;

`;
const EtcButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top:60px;
`;
const EtcItem = styled.div`
  font-size: 14px;
  color: #000;
  cursor: pointer;
`;
const SocialLoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:10px;
  padding:8px;
  border-radius: 38px;
  color: #fae000;
  border: 2px solid #fae100;
  cursor: pointer;
`;
const SocialLoginButtonImg = styled.img`
  width: 22px;
  height: 20px;
  margin:0 10px;
`;
const SocialLoginButtonTitle = styled.div`
  opacity: 1;
  font-size: 16px;
  font-weight: bold;
`;

 
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const router =  useRouter();
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    if (!email.includes("@")) {
      setEmailError("이메일 주소를 정확히 입력해주세요.");
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
  const onClickLogin = async () => {
    if (emailError === "" && passwordError === "") {
      alert("환영합니다");
    } 
    const result = await axios.get("https://koreanjson.com/posts/1")     //함수 중복선언 문제
        console.log(result) // 제대로된 결과 => { title: "..."}
        console.log(result.data.title) // 제대로된 결과 => { title: "..."}
  };

  const onClickMembership = () => {
    router.push('./membership')
    alert("회원가입 페이지로 이동합니다")
  }

  return (
    <Container>
      <Wrapper>
        {/* <LogoWrapper>
          <LogoImg src="/img/Logo.png"></LogoImg>
          <LogoTitle>잇츠로드</LogoTitle>
        </LogoWrapper> */}
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
          <LoginButtonTitle>이메일로 로그인</LoginButtonTitle>
          <SocialLoginButton>
            <SocialLoginButtonImg src="../img/kakao.png"></SocialLoginButtonImg>
            <SocialLoginButtonTitle>카카오톡으로 로그인</SocialLoginButtonTitle>
          </SocialLoginButton>
        </LoginButton>
        <EtcButton>
          <EtcItem>이메일 찾기</EtcItem>
          <EtcItem>|</EtcItem>
          <EtcItem>비밀번호 찾기</EtcItem>
          <EtcItem>|</EtcItem>
          <EtcItem onClick={onClickMembership}>회원가입</EtcItem>
        </EtcButton>
      </Wrapper>
    </Container>
  );
}