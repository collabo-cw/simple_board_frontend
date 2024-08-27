

/* gpt에서 뽑아온 현재 이메일 유효성 검사 String or Numver@String.Strinbg  const EmailForm = () => {


  
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // 정규 표현식을 사용하여 이메일 유효성 검사
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;

    ^[a-zA-Z0-9]+: 이메일의 시작 부분으로 문자 또는 숫자가 하나 이상 포함되어야 합니다.
    @: "@" 기호가 필요합니다.
    [a-zA-Z]+: "@" 기호 뒤에는 문자만 포함됩니다.
    \.: "." 기호가 필요합니다.
    [a-zA-Z]+$: "." 기호 뒤에는 문자만 포함되며, 이메일 주소의 끝입니다.
    
    setIsValid(emailPattern.test(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // 이메일이 유효할 때의 처리
      console.log('Valid email:', email);
    } else {
      // 이메일이 유효하지 않을 때의 처리
      console.log('Invalid email:', email);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={handleChange}
          style={{ borderColor: isValid ? 'black' : 'red' }}
        />
      </label>
      <button type="submit" disabled={!isValid}>Submit</button>
      {!isValid && <p style={{ color: 'red' }}>Invalid email format</p>}
    </form>
  );
};

export default EmailForm; */



/* gtp에서 뽑아온 회원가입 컴퍼넌트 import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    name: '',
    birthday: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://306a-121-140-170-17.ngrok-free.app/user/user-sign-up', formData);
      router.push('/main');
      console.log(response);
      console.log('회원가입 성공:');
    } catch (error) {
      console.error('회원가입 실패:');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이메일:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />
      <label>
        비밀번호:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <br />
      <label>
        전화번호:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </label>
      <br />
      <label>
        이름:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        생일:
        <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} required />
      </label>
      <br />
      <label>
        성별:
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignUp;
 */