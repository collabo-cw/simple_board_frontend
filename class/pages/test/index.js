import axios from 'axios'
export default function RestGetPage(){
    
    function onClickAsync(){
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log(result) // Promise
    }
    //async function onClickSync(){
    //    const result = await axios.get("https://koreanjson.com/posts/1")     =>함수 중복선언 문제
    //    console.log(result) // 제대로된 결과 => { title: "..."}
    //    console.log(result.data.title) // 제대로된 결과 => { title: "..."}
    //}
            
    const onClickSync = async () => {
        try {
            const result = await axios.post('https://144b-121-140-170-17.ngrok-free.app/board/get/board-detail', {
                "id": 2
            });
    
            console.log(result); // 전체 결과 출력
            console.log(result.data); // data 구조 확인
    
            // 응답 구조 안전하게 확인

            console.log(result.data.result.guest_author, 'guest_author') 
            console.log(result.data.result.title, 'title') 
            console.log(result.data.result.id, 'id') 
            console.log(result.data.result.bumber, 'number') /* undefined 뜸 */
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
   
    // - Pending(대기): 비동기 처리 로직이 아직 완료되지 않은 상태
    // - Fulfilled(이행): 비동기 처리가 완료되어 프로미스가 결과 값을 반환해 준 상태
    // - Rejected(실패): 비동기 처리가 실패하거나 오류가 발생한 상태    
    return(
        <div>
            <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
            <button onClick={onClickSync}>상세글ID값 보기</button>
            <div>{}</div>
        </div>
    )
}