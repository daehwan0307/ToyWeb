import KakaoLoginButton from "../componenents/KakaoLoginButton";
import Link from "next/link";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

const  Home=()=>{
    return (
        <div class="md:text-center">
            <center><img src="/hihi.jpg"  /></center>
            <center><KakaoLoginButton/></center>
            <Link href="/signin" passHref><center><a><img src=""></img>이메일로 회원가입</a></center></Link>
            <Link href="/login" passHref><center><a>이메일로 로그인</a></center></Link>
            <Link href="/main" passHref><center><a>main page(제작중)</a></center></Link>
        </div>
    );
}
export default Home;