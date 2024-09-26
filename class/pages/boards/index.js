import axios from "axios";
import { useState } from "react";

export default function ListPasges() {
    // 상태를 정의합니다
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');

    const onClickGuestSubmit = async (e) => {
        try {
            const response = await axios.post('https://944e-121-140-170-17.ngrok-free.app/board/get/board-detail', {
                id: 1,
                category: "GENERAL"
            });
            
            // 응답 데이터에서 guest_author와 title을 추출하여 상태를 업데이트합니다
            const { guest_author, title } = response.data.result;
            setAuthor(guest_author);
            setTitle(title);
            console.log("성공"); // 데이터가 성공적으로 받아졌음을 확인합니다
        } catch (error) {
            console.error(error);
            console.log("실패");
        }
    };

    return (
        <div style={{ fontSize: "30px" }}>
            목록
            <button onClick={onClickGuestSubmit}>버튼</button>
            <div>
                <div>작성자: {author}</div>
                <div>제목: {title}</div>
            </div>
        </div>
    );
}
