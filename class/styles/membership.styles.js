import styled from "@emotion/styled";

export const Container = styled.div`
  position:relative;
  width: 100%;
  box-sizing: border-box;
  background: url("../img/frame.png") no-repeat;
  background-size:100% auto;
  max-width: 440px;
  min-height:860px;
  margin:0 auto;
  padding:120px 40px 0;
`;
export const Wrapper = styled.div`
  display: block;
`;

export const Title = styled.h1`
    font-size: 18px;
    margin:20px 0 40px;
`;

export const WrapLogin = styled.div`
    box-sizing: border-box;

    border-radius: 4px;
`;

export const Iddiv = styled.div`
  margin-top:5px;
  margin-bottom: 20px;

  border-radius: 4px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const IdInput = styled.input`
  width:100%;
  background: transparent;
  box-sizing: border-box;
  border: 0;
  color: #000;
  border: 1px solid #ddd;
  padding:10px;
  &::placeholder {
    color: #999;
  }
`;

export const SmallTitle = styled.div`
  font-size:14px;
  font-weight:bold;
  margin-bottom:5px;
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
  color: #ff1b6d; 
  font-size:14px;
`;

export const MembershipBtn = styled.button`
    width:100%;
    background: #ff1b6d;
    color: #fff;
    border:0;
    border-radius: 4px;
    padding: 15px;
    margin-top: 20px;
    font-weight: 600;
`;