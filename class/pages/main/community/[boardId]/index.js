
import styled from "@emotion/styled";
import { useRouter } from 'next/router';    
const Container = styled.div`
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

const Wrap = styled.div`
  display: block;
  scrollbar-width: none;
  display: block;
  overflow: scroll;
`;

const DetaillTag = styled.div`
    margin-top:10px;
    padding:10px;
    div{
        color:#000;
        margin:10px 0;    
        border: 1px solid #ddd;
        padding:10px;
        span{
            font-weight:bold;
        }
        > span:last-child{
            color:red;
        }
    }
`;

const MoveBtn = styled.button`
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

export default function DetaillPage(){
    const router = useRouter();
    
    const updateMove = ()=>{
       /*  router.push( `/main/community/[boardId]/new`)  */
       alert("해결못하는중......")
      }
    return(
        <Container>
            <Wrap>
                <DetaillTag>
                    <div>
                        <span>카테고리</span> : <span>카테고리 받을 곳</span>
                    </div>
                    <div>
                        <span>작성자</span> : <span>작성자 받을 곳</span>
                    </div>
                    <div>
                        <span>제목</span> : <span>제목 받을 곳</span>
                    </div>
                    <div>
                        <span>내용</span> : <span>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용 받을 곳</span>
                    </div>
                </DetaillTag>
                <MoveBtn onClick={updateMove}>수정하러 가기</MoveBtn>
            </Wrap>
        </Container>
    )
}