import {Container,Wrapper,WrapLogin, Iddiv ,IdInput,PasswordDiv, NameDiv} from '../../styles/membership.styles';
import axios from 'axios';


export default function MembershipPage(){

    
    return(
        <Container>
            <Wrapper>
                <WrapLogin>
                    <Iddiv>
                        <IdInput placeholder='아이디' />
                        <div>@itload.com</div>
                    </Iddiv>
                    <Iddiv>
                        <IdInput type="password" placeholder='비밀번호' />
                    </Iddiv>
                    <PasswordDiv>
                        <IdInput type="password" placeholder='비밀번호 확인' />
                        <button>비밀번호 확인</button>
                        <button> 확인</button>
                    </PasswordDiv>
                    <NameDiv>

                    </NameDiv>
                </WrapLogin>
            </Wrapper>
        </Container>
    )
}