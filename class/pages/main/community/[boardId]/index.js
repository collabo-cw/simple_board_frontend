import React, { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import { useRouter } from 'next/router';
import axios from 'axios';

const Container = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background: url("/img/frame.png") no-repeat;
  background-size: 100% auto;
  max-width: 440px;
  min-height: 860px;
  margin: 0 auto;
  padding: 120px 40px 0;
`;

const Wrap = styled.div`
  display: block;
  scrollbar-width: none;
  overflow: scroll;
`;

const DetaillTag = styled.div`
  margin-top: 10px;
  padding: 10px;
  div {
    color: #000;
    margin: 10px 0;    
    border: 1px solid #ddd;
    padding: 10px;
    span {
      font-weight: bold;
    }
    > span:last-child {
      color: red;
    }
  }
`;

const MoveBtn = styled.button`
  position: absolute;
  bottom: 70px;
  width: calc(100% - 80px);
  background: #ff1b6d;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 15px;
  margin-top: 80px;
  font-weight: 600;
  cursor: pointer;
`;

const MainMove = styled.a`
  position: absolute;
  top: 86px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 30px;
  cursor: pointer;
`;

export default function DetaillPage() {
    const router = useRouter();
    const { boardId } = router.query; // URL에서 boardId 가져오기

    const [boardDetail, setBoardDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchBoardDetail = async () => {
        if (!boardId) return; // boardId가 없으면 요청하지 않음

        try {
            const response = await axios.post('https://243c-175-197-73-179.ngrok-free.app//board/get/board-detail', {
                id: parseInt(boardId) // 해당 boardId
            });
            setBoardDetail(response.data.result); // 결과를 상태에 저장
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBoardDetail(); // 컴포넌트가 마운트될 때 API 호출
    }, [boardId]); // boardId가 변경될 때마다 호출

    const updateMove = () => {
        alert("수정 페이지로 이동합니다...");
        router.push(`/main/community/${boardId}/edit`); // [boardId]에 맞춰 URL 수정
    };

    const onMainMove = () => {
        router.push('/main');
    };

    if (loading) {
        return <div>Loading...</div>; // 로딩 중 표시
    }

    if (error) {
        return <div>Error: 정보가 없거나 에러임 {error.message}</div>; // 오류 표시
    }

    return (
        <Container>
            <Wrap>
                <DetaillTag>
                    <div>
                        <span>카테고리</span> : <span>{boardDetail.category}</span>
                    </div>
                    <div>
                        <span>작성자</span> : <span>{boardDetail.guest_author}</span>
                    </div>
                    <div>
                        <span>제목</span> : <span>{boardDetail.title}</span>
                    </div>
                    <div>
                        <span>내용</span> : <span>{boardDetail.content}</span> {/* 내용이 있는 경우 */}
                    </div>
                </DetaillTag>
                <MoveBtn onClick={updateMove}>수정하러 가기</MoveBtn>
            </Wrap>
            <MainMove onClick={onMainMove}></MainMove>
        </Container>
    );
}
