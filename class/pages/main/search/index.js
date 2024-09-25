import styled from "@emotion/styled";
import FooterComponent from '../../../src/components/footer/footer';

const Container = styled.div`
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
const Wrap = styled.div`
  display: block;
`;

export default function SearchPage(){
    return(
        <Container>
            <Wrap>
               검색
            </Wrap>
            <FooterComponent />
        </Container>

    )
}

