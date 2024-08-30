import axios from "axios";
import { useState } from "react";

export default function ListPasges(){

    const onClickGuestSubmit = async (e) => {
        try {
            const result = await axios.post('https://944e-121-140-170-17.ngrok-free.app/board/get/board-detail',{
                id: 1,
                category:"GENERAL"
            })
            console.log("성공"); // data 속성을 확인합니다
        } catch (error) {
            console.error(error);
            console.log("실패")
        }
    };

    return (
        <div style={{ fontSize: "30px"}}>
            목록
            <button onClick={onClickGuestSubmit}>버튼</button>
        </div>
    )
}




