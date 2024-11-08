import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/router'
import { Container, Wrap, WrapLogin, Title, H4, Textarea, Select, SelectContainer,MoveBtn,IdInput,MainMove} from '../../../../../styles/new.styles';

export default function BoardNewPage(props) {
    const [guest_id, setGuest_id] = useState(""); //작성자
    const [password, setPassword] = useState(""); //비회원일시 비밀번호 
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [user_id, setUser_id] = useState("3fa85f64-5717-4562-b3fc-2c963f66afa6");
    const [file, setFile] = useState("");
    const onChangeGuest = (e) => setGuest_id(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);
    const onChangeTitle = (e) => setTitle(e.target.value);
    const onChangeContent = (e) => setContent(e.target.value);
    const onChangeCategory = (e) => {setCategory(e.target.value);}
    const router = useRouter();
    /* //// 카테고리 //// start */
    const options = [
    { value: '선택', label: '선택' },
    { value: 'NOTICE', label: 'NOTICE' },
    { value: 'GENERAL', label: 'GENERAL' },
    { value: 'QNA', label: 'QNA' },
    ];

    // 셀렉트 박스 컴포넌트
    const CustomSelect = ({ options, value, onChange }) => (
        <Select value={value} onChange={onChange}>
        {options.map((option) => (
            <option key={option.value} value={option.value}>
            {option.label}
            </option>
        ))}
        </Select>
    );
    /* const upperStr = options.toUpperCase(); */
    /* //// 카테고리 //// end */

    /* 비회원 게시글 작성 테스트 start */
    const onClickGuestSubmit = async (e) => {
        try {
            const result = await axios.post('https://2595-175-197-73-179.ngrok-free.app/board/create/board', {
                category,
                title,
                guest_id,
                password,
                content
            });
            console.log("성공"); // data 속성을 확인합니다
            console.log(result)
            console.log(result.data, 'data')
            console.log(result.data.user_id, 'data.user_id')
            console.log(result.data.id, 'data.id')
            /* router.push( `/main/community/${result.data.guest_id}`)  */
        } catch (error) {
            console.error(error);
            console.log("실패")
            console.log(category, ',category')
            console.log(guest_id,',guest_id')
            console.log(password,',password')
            console.log(title,',title')
            console.log(content,',content')
            /* console.log(user_id,',user_id') */
        }
    };
    /* 비회원 게시글 작성 테스트 end */
    
    const onMainMove = () =>{
        router.push('/main')
    }

    return (
        <Container>
            <Wrap>
                <WrapLogin>
                    <Title>게시글 {props.isEdit ? "수정" : "작성"}</Title>
                    
                    {
                    !props.isEdit&& ( // 수정페이지로 재 진입시 hide 
                    <SelectContainer>
                        <H4>카테고리</H4>
                        <CustomSelect 
                            options={options} 
                            value={category} 
                            onChange={onChangeCategory} 
                        />
                    </SelectContainer>
                    )}        
                    <div>
                        <H4>제목</H4>
                        <IdInput type="text" onChange={onChangeTitle} />
                        <H4>작성자</H4>
                        <IdInput type="text" onChange={onChangeGuest} />
                        <H4>비밀번호</H4>
                        <IdInput type="password" onChange={onChangePassword} />
                        <H4>내용</H4>
                        <Textarea type="text" onChange={onChangeContent} />
                    </div>
                    <MoveBtn onClick={onClickGuestSubmit}>{props.isEdit ? "수정" : "작성"}하기</MoveBtn>
                </WrapLogin>
            </Wrap>
            <MainMove onClick={onMainMove}></MainMove>
        </Container>
    );
}