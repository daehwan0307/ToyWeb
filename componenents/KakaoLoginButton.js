import React from "react";
import {  IconButton } from "@material-ui/core";


const loginUri = `https://kauth.kakao.com/oauth/authorize?client_id=4e0e43146612ec5ab55a1a2123b98013\
&redirect_uri=http://localhost:3000/signin_step1&response_type=code`;

const KakaoLoginButton = () => {
  return (
    <IconButton>
      <a href={loginUri} rel="noopener noreferrer">
        <img src="/kakao_login_medium_wide.png" />
      </a>
    </IconButton>
  );
};

export default KakaoLoginButton;

