import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  color:#fff
`;
export const Wrapper = styled.div`
  position:fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const WrapLogin = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 100px 15px 0 15px;
  padding: 15px 15px;
  border-radius: 4px;
  border: 1px solid #333;
  background: #333;
`;

export const Iddiv = styled.div`
  margin-top: 20px;
  border: 1px solid #FFF;
  border-radius: 4px;
  
  &:first-of-type {
    margin-top: 0;
  }
`;

export const IdInput = styled.input`
  background: transparent;
  border: 0;
  color: #fff;
  outline: red;
  padding:10px;
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