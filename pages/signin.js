import Link from "next/link";

export default function SignInPage(){
    return (
        
        <div>
             <p>이메일을 입력해 주세요</p>
             <input type="text"  placeholder="이메일을 입력해주세요."/><br></br>
             <p>비밀번호 입력</p>
             <input type="password" placeholder="비밀번호를 입력해주세요."/>
             <p>비밀번호 확인</p>
             <input type="password" placeholder="비밀번호 확인을 위해 재입력 해주세요."/>
             <hr></hr>
             <Link href="privacy"><a>개인정보 처리방침   <label><input type="checkbox"></input></label></a></Link>
       
            <hr>
            </hr>

             <style jsx>{`
  
           div{
            display: flex;
      
            flex-direction: column;
            padding-left : 30px;
            padding-right : 30px;
            padding-top: 20px;
            padding-bottom: 200px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
           }`
           
}
            </style> 
        </div>
        
    );
}