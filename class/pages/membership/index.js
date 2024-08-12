import { useState } from 'react';
import {Container,Wrapper,WrapLogin, Iddiv ,IdInput,PasswordDiv, NameDiv, Error} from '../../styles/membership.styles';
import axios from 'axios';


export default function MembershipPage(){

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
    
    //onChange
    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
        if(e.target.value !== ""){
            setEmailError("")
        }
    }
    const onChangePassword =(e) =>{
        setPassword(e.target.value)
        if(e.target.value !== ""){
            setPasswordError("")
        }
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)
        if(e.target.value !== ""){
            setPhoneError("")
        }
    }
    const onChangeName = (e) =>{
        setName(e.target.value)
        if(e.target.value !== ""){
            setNameError("")
        }
    }
    const onChangeBirthday = (e) => {
        setBirthday(e.target.value)
            if(e.target.value !== ""){
            setBirthdayError("")
        }
    }
    const onChangeGender = (e) => {
        setGender(e.target.value )
        if(e.target.value !== ""){
            setGenderError("")
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
            setBirthdayError("찍어라 입력해주세요")
        }
        if(!name){
            setNameError("이름을 입력해주세요")
        }
        if(!gender){
            setGenderError("성별을 입력해주세요")
        }
        if(email && password && phone && name &&  birthday && gender){
            try{
                const response = await axios.post('https://306a-121-140-170-17.ngrok-free.app/user/user-sign-up',{
                    email,
                    password,
                    phone,
                    name,
                    birthday,
                    gender
                });   
                console.log("성공")
            }catch(error){
                alert(error.massage)
                console.log("실패")
            }


        }
    }

    
    return(
        <Container>
            <Wrapper>
                <WrapLogin>
                    <Iddiv>
                        <IdInput placeholder='email' onChange={onChangeEmail} />
                        
                    </Iddiv>
                    <Error>{emailError}</Error>

                    <Iddiv>
                        <IdInput type="password" placeholder='password' onChange={onChangePassword} />
                    </Iddiv>
                    <Error>{passwordError}</Error>

                    <Iddiv>
                        <IdInput type="tel" placeholder='phone' onChange={onChangePhone} />
                    </Iddiv>
                    <Error>{phoneError}</Error>
                    
                    <Iddiv>
                        <IdInput type="text" placeholder='name' onChange={onChangeName} />
                    </Iddiv>
                    <Error>{nameError}</Error>

                    <Iddiv>
                        <IdInput type="date" placeholder='birthday' onChange={onChangeBirthday} />
                    </Iddiv>
                    <Error>{birthdayError}</Error>

                    <Iddiv>
                        <IdInput type="text" placeholder='gender' onChange={onChangeGender} />
                    </Iddiv>
                    <Error>{genderError}</Error>

                </WrapLogin>
                <button onClick={onClickSubmit}>회원가입</button>
            </Wrapper>
        </Container>
    )
}