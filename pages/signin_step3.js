import Link from "next/link";

const signin_step3 = ()=>{
    
    return(
        <div class="p-8">
         <h1>SNS 회원가입 완료</h1>
        <br/>
        <h4>홍길동님 회원가입이 완료되었습니다.</h4>
        <br/>
        <h4>지금부터 윈윈을 통해 재능교환을 진행하실 수 있습니다.</h4>
        <Link href="/main" passHref><center><button><a>로그인</a></button></center></Link>
        </div>
    );
}
export default signin_step3;