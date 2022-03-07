import Link from "next/link";
const SignInPage=()=>{
    return (
        
        <div class="sm p-8 ">
             <p>이메일을 입력해 주세요</p>
             <input type="text"  placeholder="이메일을 입력해주세요."/><br></br>
             <p>비밀번호 입력</p>
             <input type="password" placeholder="비밀번호를 입력해주세요."/>
             <p>비밀번호 확인</p>
             <input type="password" placeholder="비밀번호 확인을 위해 재입력 해주세요."/>
             <hr></hr>
             <Link href="privacy"><a>개인정보 처리방침   <label></label></a></Link><input type="checkbox"></input>
       
            <hr>
            </hr>
 
        </div>
        
    );
}
export default SignInPage; 