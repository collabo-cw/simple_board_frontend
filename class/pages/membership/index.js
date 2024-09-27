import { useState, useEffect } from 'react';
import {Container,Wrapper,WrapLogin, Iddiv ,IdInput,PasswordDiv, NameDiv, Error, Title, MembershipBtn, SmallTitle,MainMove} from '../../styles/membership.styles';
import axios from 'axios';
import { useRouter } from 'next/router'

export default function MembershipPage(){
    const [isValid, setIsValid] = useState(true); // 유효한 

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [phone , setPhone] = useState("");
    const [name , setName] = useState("");
    const [birthday , setBirthday] = useState("");
    const [gender , setGender] = useState("");

    const [emailError , setEmailError] = useState("");
    const [passwordError , setPasswordError] = useState("");
    const [phoneError , setPhoneError] = useState("");
    const [nameError , setNameError] = useState("");
    const [birthdayError , setBirthdayError] = useState("");
    const [genderError , setGenderError] = useState("");
    const router = useRouter();

    //onChange
    const onChangeEmail = (e) =>{
        setEmail(e.target.value);
        // backend 명세서에 표기된 표현식에 맞게 적용
        const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
        setIsValid(emailPattern.test(e.target.value));

        if(e.target.value !== "" && isValid){
            setEmailError("")
        }else {
            // 이메일이 유효하지 않을 때의 처리
            setEmailError("ex)ddddddddd@naver.com")
            console.log('emailError:', email);
        }
    }

    const onChangePassword =(e) =>{
        setPassword(e.target.value);

        const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`|-]).+$/;
        setIsValid(passwordPattern.test(e.target.value));

        if(e.target.value !== "" && isValid){
            setPasswordError("")
        }else{
            // 비밀번호가 유효하지 않을 때의 처리
            setPasswordError("ex) password1!")
            console.log('passwordError:', password);
        }
    }
    useEffect( () => {
        const phonePattern = /^\d{11}$/;
        const phoneIsValid = phonePattern.test(phone);
           
        if (phone === "" || phoneIsValid) {
            setPhoneError("");
        } else {
            setPhoneError("ex) 01012345678");
        }
    }, [phone]); // phone 상태가 변경될 때마다 실행됩니다.

    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const onChangeName = (e) =>{
        setName(e.target.value)

        const namePattern = /^[가-힣\s]+$/;
        setIsValid(namePattern.test(e.target.value))
        if(e.target.value !== "" && isValid){
            setNameError("")
        }else{
            // 휴대폰 번호가 유효하지 않을 때의 처리
            setNameError("이름을 입력해주세요.")
            console.log('name:', name);
        }
    }

    const onChangeBirthday = (e) => {
        setBirthday(e.target.value)
            if(e.target.value !== ""){
            setBirthdayError("")
            console.log(e.target.value)
        }
    }

    const onChangeGender = (e) => {
        setGender(e.target.value )
        if(e.target.value == "F" || e.target.value == "M" ){
            setGenderError("")
        }else {
            setGenderError("F 또는 M만 입력");
        }

    }

    const onClickSubmit = async (e) => {
        e.preventDefault();
        if(!email){
            setEmailError("이메일을 입력해 주세요")
        }
        if(!password){
            setPasswordError("패스워드를 입력해주세요")
        }
        if(!phone){
            setPhoneError("번호를 입력해주세요")
        }
        if(!birthday){
            setBirthdayError("생년월일을 선택해주세요")
        }
        if(!name){
            setNameError("이름을 입력해주세요")
        }
        if(!gender){
            setGenderError("성별 'F' 또는 'M' 을입력해주세요")
        }
        if(isValid && birthday && gender){
            try{
                const response = await axios.post('https://4f60-121-140-170-17.ngrok-free.app/user/user-sign-up',{
                    email,
                    password,
                    phone,
                    name,
                    birthday,
                    gender
                });   
                router.push('/main')
                console.log('회원가입 성공:');
            }catch(error){
                alert(error.massage)
                console.log('회원가입 실패:');
            }
        }
        /* if (isValid) {
            // 이메일이 유효할 때의 처리
            console.log('good', email);
            setEmailError("")
        } */
    }

    const onClickResult = (e) => {
        e.preventDefault();
        if(isValid && birthday && gender) console.log("통과")
        else console.log("노통과")
    }
    const onMainMove = () =>{
        router.push('/main')
      }
    return(
        <Container>
            <Wrapper>
                <WrapLogin>
                    <Title>회원가입</Title>

                    <Iddiv>
                        <SmallTitle>이메일</SmallTitle>
                        <IdInput placeholder='email' onChange={onChangeEmail} />
                        {!isValid && <Error>{emailError}</Error>}
                    </Iddiv>

                    <Iddiv>
                        <SmallTitle>비밀번호</SmallTitle>
                        <IdInput type="password" placeholder='password' onChange={onChangePassword} />
                        <Error>{passwordError}</Error>
                    </Iddiv>

                    <Iddiv>
                        <SmallTitle>휴대폰 번호</SmallTitle>
                        <IdInput type="tel" placeholder='phone' value={phone} onChange={onChangePhone} maxLength={11}/>
                        <Error>{phoneError}</Error>
                    </Iddiv>
                    
                    <Iddiv>
                        <SmallTitle>이름</SmallTitle>
                        <IdInput type="text" placeholder='name' onChange={onChangeName} />
                        <Error>{nameError}</Error>
                    </Iddiv>

                    <Iddiv>
                        <SmallTitle>생년월일</SmallTitle>
                        <IdInput type="date" placeholder='birthday' onChange={onChangeBirthday} />
                        <Error>{birthdayError}</Error>
                    </Iddiv>

                    <Iddiv>
                        <SmallTitle>성별</SmallTitle>
                        <IdInput type="text" placeholder='F or M' onChange={onChangeGender} />
                        <Error>{genderError}</Error>
                    </Iddiv>

                </WrapLogin>
                <MembershipBtn onClick={onClickSubmit}>회원가입</MembershipBtn>
                {/* <MembershipBtn onClick={onClickResult}>결과보기</MembershipBtn> */}
            </Wrapper>
            <MainMove onClick={onMainMove}></MainMove>
        </Container>
    )
}