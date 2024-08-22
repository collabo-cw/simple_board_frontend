import axios from "axios";
import { useState } from "react";
import { Container, Wrapper, WrapLogin, Title, H4, Textarea } from '../../../../../styles/new.styles';

export default function BoardNewPage(props) {
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const onChangeWriter = (e) => setWriter(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);
    const onChangeTitle = (e) => setTitle(e.target.value);
    const onChangeContents = (e) => setContents(e.target.value);

    const onClickSubmit = async (e) => {
        try {
            const result = await axios.post('http://backend-example.codebootcamp.co.kr/api-docs/board', {
                writer,
                password,
                title,
                contents
            });
            console.log(result.data); // data 속성을 확인합니다
        } catch (error) {
            console.error(error);
        }
    };

    const onClickGet = async (e) => {
        try {
            const getResult = await axios.get('https://koreanjson.com/comments/1');
            console.log(getResult); // data 속성을 확인합니다
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <Wrapper>
                <WrapLogin>
                    <Title>게시글 {props.isEdit ? "수정" : "작성"}</Title>
                    <div>
                        <H4>제목</H4>
                        <input type="text" onChange={onChangeTitle} />
                        <H4>작성자</H4>
                        <input type="text" onChange={onChangeWriter} />
                        <H4>비밀번호</H4>
                        <input type="text" onChange={onChangePassword} />
                        <H4>내용</H4>
                        <Textarea type="text" onChange={onChangeContents} />
                    </div>
                    <button onClick={onClickSubmit}>{props.isEdit ? "수정" : "작성"}하기</button>
                    <button onClick={onClickGet}>가져오기</button>
                </WrapLogin>
            </Wrapper>
        </Container>
    );
}