import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
export default function RestGetPage() {


    const [result, setResult] = useState(null); // 상태 선언
    const [error, setError] = useState(null); // 에러 상태 선언
    const [currentCategory, setCurrentCategory] = useState(null); // 현재 카테고리 상태 선언

    const fetchData = async (category) => {
        try {
            setCurrentCategory(category); // 현재 카테고리 설정
            const response = await axios.post('https://243c-175-197-73-179.ngrok-free.app/board/get/board-detail', {
                "id": 6,
                "category": category
            });
            console.log(response.data)
            return response.data; // 응답 데이터 반환
        } catch (error) {
            return null; // 요청 실패 시 null 반환
        }
    };

    const onClickSync = async () => {
        setResult(null); // 이전 결과 초기화
        setError(null); // 이전 에러 초기화
        setCurrentCategory(null); // 현재 카테고리 초기화
        const categories = ["NOTICE", "GENERAL", "QNA"];
        for (const category of categories) {
            const data = await fetchData(category);
            if (data) {
                setResult(data); // 결과 설정
                return; // 결과가 성공적으로 반환되면 종료
            }
        }
        setError('모든 카테고리에서 결과를 찾을 수 없습니다.'); // 모든 요청 실패 시 에러 설정
    };
    // 컴포넌트가 처음 렌더링될 때 데이터 가져오기
    useEffect(() => {
        onClickSync(); // 자동으로 데이터 요청
    }, []); // 빈 배열을 넣어 컴포넌트가 처음 렌더링될 때만 실행
    return (
        <div>
            {/* 결과가 null이 아닐 때만 렌더링 */}
            {result && (
                <div>
                    <div>현재 요청 중인 카테고리: {currentCategory}</div>
                    <div>{result.result.guest_author}</div>
                    <div>{result.result.title}</div>
                    <div>{result.result.id}</div>
                    <div>{result.result.content}</div>
                    <div>{result.result.created_at}</div>
                    <div>{result.result.number !== undefined ? result.result.number : 'Number not found'}</div>
                </div>
            )}
            {/* 에러 메시지 렌더링 */}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
}
