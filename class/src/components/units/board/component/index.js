import axios from "axios";
import { useState } from "react";
import {Container,Wrapper,WrapLogin,Title,H4,Textarea} from '../../../../../styles/new.styles';
export default function BoardNewPage(props) {

    return(
        <Container>
            <Wrapper>
                <WrapLogin>
                    <Title>게시글 {props.isEdit? "수정" : "작성"}</Title>
                    <div>
                        <H4>작성자</H4>
                        <input type="text"/>
                        <H4>내용</H4>
                        <Textarea type="text" />
                    </div>
                    <button>{props.isEdit? "수정" : "작성"}하기</button>
                </WrapLogin>
            </Wrapper>
        </Container>
    )
}