import axios from "axios";
import { useState } from "react";
import {Container,Wrapper,WrapLogin,Title,H4, Textarea} from '../../../styles/new.styles';
export default function BoardNewPage() {


    
    return(
        <Container>
            <Wrapper>
                <WrapLogin>
                    <Title>게시글 작성</Title>
                    <div>
                        <H4>작성자</H4>
                        <input type="text" />
                        <H4>작성자</H4>
                        <Textarea type="text" />
                    </div>
                    <button>등록하기</button>
                </WrapLogin>
            </Wrapper>
        </Container>
    )
}