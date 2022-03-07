import Link from "next/link";

const signin_step2 = ()=>{
    return(
        <div class="p-8">
        <h1>SNS 회원가입</h1>
        <h2>2.회원정보입력</h2>
        <h4>윈윈 계정으로 사용되는 회원정보를 입력해 주세요</h4>
        <br/>

        <p class="font-sans ">이메일</p>
        <input type="text"  placeholder="이메일을 입력해주세요"/><br></br>
        <p class="font-sans ">닉네임</p>
        <input type="text"  placeholder="ex)홍길동"/><br></br>
        <p class="font-sans ">생년월일</p>
        <input type="text"  placeholder="ex)19950715"/><br></br>
        <Link href="/signin_step3" passHref><center><button><a>다음</a></button></center></Link>
        </div>

    );

}

export default signin_step2;