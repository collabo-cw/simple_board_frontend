import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 100%;
  padding: 0 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const Title = styled.h1`
    font-size: 24px;
    text-align: center;
    color:#fff;
`;

export const WrapLogin = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 100px 15px 0 15px;
  padding: 15px 15px 30px;
  border-radius: 4px;
  border: 1px solid #333;
  background: #333;
  ox-shadow: 0px 0px 10px #333;
`;

export const H4 = styled.h4`
    font-size: 16px;
    color:#fff;
    font-weight:500;
`;

export const Textarea = styled.textarea`
    width:100%;
    min-height: 100px;
    resize: none;
    box-sizing: border-box;
    padding:10px;
`