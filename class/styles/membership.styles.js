import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  color:#fff
`;
export const Wrapper = styled.div`
  wIdth: 100%;
  height:100vh;
  padding: 0 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background: url("../img/pizza.jpg") no-repeat;
  background-color: rgba(0, 0, 0, 0.55);
  background-blend-mode: multiply;
  background-size:cover;
`;

export const WrapLogin = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 100px 15px 0 15px;
  padding: 15px 15px;
  border-radius: 4px;
  border: 1px solid #fff;
`;

export const Iddiv = styled.div`
  display:flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const IdInput = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 1px solid #FFF;
  color: #fff;
  outline: red;

  &::placeholder {
    color: #fff;
  }
`;
export const PasswordDiv = styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const NameDiv = styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const Error = styled.div`
  color: red; 
`