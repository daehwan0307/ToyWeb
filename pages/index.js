import KakaoLoginButton from "../componenents/KakaoLoginButton";
import Link from "next/link";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";


export default function Home(){

    return (
       
        <div>
           <img src="/hihi.jpg" />      
           <style jsx>{`
           img{
               max-width:500px;
               margin-bottom:400px;
           }
           div{
            display: flex;
            flex-direction: column;
            align-items: center;
           }`
           
}
            </style> 
            <KakaoLoginButton/>
            <span>
                <Link href="/signin"><a>이메일로 회원가입</a></Link>
                <a>|</a> 
                <Link href="/login"><a>이메일로 로그인</a></Link>
            </span>
                <Link href="/main"><a>main page(제작중)</a></Link>
            
        </div>        
    );
}