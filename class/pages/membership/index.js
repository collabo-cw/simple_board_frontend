import React, { useState } from 'react';
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
      const response = await axios.post('http://183.109.108.47:5555/user/user-sign-up', formData);
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
