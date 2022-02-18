import KakaoLoginButton from "../componenents/KakaoLoginButton";
import Link from "next/link";
import LabelBottomNavigation from "../componenents/LabelBottomNavigation";

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
            gap: 10px;
            flex-direction: column;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 50px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
           }`
           
}
            </style> 
            <KakaoLoginButton/>
            <span>
                <Link href="/signin"><a>이메일로 회원가입</a></Link>
                <a>|</a> 
                <Link href="/loading"><a>이메일로 로그인</a></Link>
            </span>
                <Link href="/main"><a>main page(제작중)</a></Link>
            
        </div>        
    );
}