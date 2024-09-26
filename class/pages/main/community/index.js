import styled from "@emotion/styled";
import FooterComponent from '../../../src/components/footer/footer';
import { useRouter } from 'next/router';
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
  scrollbar-width: none;
  max-height: 600px;
  display: block;
  overflow: scroll;
`;
const MoveBtn = styled.button`
  position: absolute;
  bottom: 150px;
  width: calc(100% - 80px);
  background: #ff1b6d;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 15px;
  font-weight: 600;
  cursor: pointer;
`;
const CommunityTag = styled.h2`
  font-size:14px;
  text-align:center;
  color:#000;
  border-top:1px solid #ff1b6d;
  border-bottom:1px solid #ff1b6d;
  padding: 10px;
`
const ListWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center
  padding-bottom:10px;
`
export default function CommunityPages(){
    const router = useRouter();

    const WriterMove = ()=>{
      router.push( `/main/community/new`) 
    }
    return(
        <Container>
            <Wrap>
                <CommunityTag>커뮤니티</CommunityTag>
                <ListWrap>
                  <span>카테고리</span>
                  <span>작성자</span>
                  <span>제목</span>
                </ListWrap>
                <MoveBtn onClick={WriterMove}>글쓰기</MoveBtn>
            </Wrap>
            <FooterComponent />
        </Container>

    )
}