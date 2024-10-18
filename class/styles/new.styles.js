import styled from "@emotion/styled";

export const Container = styled.div`
  position:relative;
  width: 100%;
  box-sizing: border-box;
  background: url("/img/frame.png") no-repeat;
  background-size:100% auto;
  max-width: 440px;
  min-height:860px;
  margin:0 auto;
  padding:120px 40px 0;
`;
export const Wrap = styled.div`
  display: block;
  scrollbar-width: none;
  display: block;
  overflow: scroll;
`;

export const Title = styled.h1`
  font-size: 18px;
  margin:20px 0 40px;
`;

export const WrapLogin = styled.div`
  box-sizing: border-box;
  border-radius: 4px;

`;

export const H4 = styled.h4`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Textarea = styled.textarea`
  width:100%;
  min-height: 100px;
  resize: none;
  box-sizing: border-box;
  padding:10px;
  border: 1px solid #ddd;
`

export const SelectContainer = styled.div`
  display: flex;
      flex-direction: column;
`;

export const Select = styled.select`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px 10px 10px 0;
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

export const MoveBtn = styled.button`
    position: absolute;
    bottom: 70px;
    width: calc(100% - 80px);
    background: #ff1b6d;
    color: #fff;
    border:0;
    border-radius: 4px;
    padding: 15px;
    margin-top: 80px;
    font-weight: 600;
    cursor: pointer;
`;

export const MainMove = styled.a`
  position: absolute;
  top: 86px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 30px;
  cursor: pointer;
`