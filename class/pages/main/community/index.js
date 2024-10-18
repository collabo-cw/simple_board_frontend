import styled from "@emotion/styled";
import FooterComponent from '../../../src/components/footer/footer';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import axios from 'axios';
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
  left: 50%;
  transform: translateX(-50%);
`;
const CommunityTag = styled.div`
  display: flex;
  justify-content: space-between;
  font-size:14px;
  text-align:center;
  color:#000;
  border-top:1px solid #ff1b6d;
  border-bottom:1px solid #ff1b6d;
  padding: 10px;
    & > div:first-of-type {
    margin-left:10px;
  }

  & > div:nth-of-type(2) {
    color: green; // 두 번째 div에 대한 스타일
  }

  & > div:last-of-type {
    margin-right:10px;
  }
`
const ListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center
  padding-bottom:10px;
  border-bottom:1px solid #000;
  > div{
    width:70px;
  }
  & > div:first-of-type {
    margin-left:10px;
  }


  & > div:last-of-type {
  }
`

export default function CommunityPages(){
    const router = useRouter();
    const [result, setResult] = useState("")
    const list = async() => {
      try{
        const result = await axios.post('https://243c-175-197-73-179.ngrok-free.app/board/get/board-list', {
          "category_type": "GENERAl",
          "categorize_type": "CREATED"
      });
      
      }
      catch(error){
        return console.log("실패다 이놈아");
      }
      console.log(result.data)
    }

    const WriterMove = ()=>{
      router.push( `/main/community/new`) 
    }
    return(
        <Container>
            <Wrap>
              <button onClick={list}> sdsd</button>
                {/* <CommunityTag>
                  <div>분류</div>
                  <div>작성자</div>
                  <div>제목</div>
                </CommunityTag>
                <ListWrap>
                  <div>NOTICE</div>
                  <div>작성자</div>
                  <div>제목</div>
                </ListWrap>
                <ListWrap>
                  <div>GENERAL</div>
                  <div>작성자</div>
                  <div>제목</div>
                </ListWrap>
                <ListWrap>
                  <div>QNA</div>
                  <div>작성자</div>
                  <div>제목</div>
                </ListWrap> */}
                <MoveBtn onClick={WriterMove}>글쓰기</MoveBtn>
            </Wrap>
            <FooterComponent />
        </Container>

    )
}