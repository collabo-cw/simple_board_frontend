import axios from 'axios'
import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from 'next/router'
const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: url("../img/frame.png") no-repeat;
  background-size:100% auto;
  max-width: 500px;
  min-height:770px;
  margin:0 auto;
  padding:120px 40px 0;
`;
const Wrap = styled.div`
  display: block;
`;

export default function LoginPage() {


  return (

      <Container>
        <Wrap>
          언제 다 만드니 이걸 ㅠㅠㅠㅠㅠ
        </Wrap>
      </Container>

  );
}