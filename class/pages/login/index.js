import axios from 'axios';
import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from 'next/router'
const Container = styled.div`
  position:relative;
  width: 100%;
  box-sizing: border-box;
  background: url("simple_board_frontend/public/img/frame2.png") no-repeat;
  background-size:100% auto;
  max-width: 440px;
  min-height:860px;
  margin:0 auto;
  padding:120px 40px 0;
`;
const Wrapper = styled.div`
  display: block;
`;

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
const MainMove = styled.a`
  position: absolute;
  top: 86px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 30px;
  cursor: pointer;
`
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
    if (password.length >= 5 && password.length <= 16) {
      setPasswordError("");
    } else {
      setPasswordError("8~16자의 영문,숫자,특수 문자만 사용 가능합니다.");
    }
  };

  // 로그인 인증 start
  const onAuthentication = async () => {
    try{
      const result = await axios.post("https://243c-175-197-73-179.ngrok-free.app/user/login",{
        email,
        password 
      }) 
      console.log(result) // 제대로된 결과 => { title: "..."}

      localStorage.setItem('access_token', JSON.stringify(result.data.result.access_token));
      localStorage.setItem('user_uuid', JSON.stringify(result.data.result.user_uuid));
      localStorage.setItem('refresh_token', JSON.stringify(result.data.result.refresh_token));
      /* console.log('access_token', result.data.result.user_uuid)  데이터 보기 */
      /* console.log('access_token', result.data.result.access_token)  데이터 보기 */
      /* console.log('access_token', result.data.result.refresh_token)  데이터 보기 */
      alert("로그인 성공");
      router.push('/main')
    }catch(errer){
      alert("올바르지 않습니다")
    }
  };
  // 로그인 인가 start 
  const onAuthorization = async () =>{
    const refresh_token  = JSON.parse(localStorage.getItem('refresh_token'));
    try {
      const response = await axios.post("https://243c-175-197-73-179.ngrok-free.app/user/api/token/refresh", {
        refresh : refresh_token
      });
      console.log(response.data)

    } catch (error) {
        console.error("Failed to fetch user data:", error);
    }
  }
  // 로그인 인가 end 
  const onClickMembership = () => {
    router.push('./membership')
    alert("회원가입 페이지로 이동합니다")
  }

  const onMainMove = () =>{
    router.push('/main')
  }
  return (
    <Container>
      <Wrapper>
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
        <LoginButton onClick={onAuthentication}>
          <LoginButtonTitle>이메일로 로그인</LoginButtonTitle>
          <SocialLoginButton>
            <SocialLoginButtonImg src="../img/kakao.png"></SocialLoginButtonImg>
            <SocialLoginButtonTitle>카카오톡으로 로그인</SocialLoginButtonTitle>
          </SocialLoginButton>
        </LoginButton>
        {/* <LoginButton onClick={onAuthorization}>
          로그인 인가 확인버튼 
        </LoginButton> */}
        <EtcButton>
          <EtcItem>이메일 찾기</EtcItem>
          <EtcItem>|</EtcItem>
          <EtcItem>비밀번호 찾기</EtcItem>
          <EtcItem>|</EtcItem>
          <EtcItem onClick={onClickMembership}>회원가입</EtcItem>
        </EtcButton>
      </Wrapper>
      <MainMove onClick={onMainMove}></MainMove>
    </Container>
  );
}