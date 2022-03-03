import { Row, Col } from 'antd';
import Link from "next/link";

const  signin_step1 = ()=>{

    return(
        <>
    <>
    <h1>SNS 회원가입</h1>
    <h2>1.약관동의</h2>
    <h4>윈윈을 이용하기 위해 이용약관에 동의해 주세요</h4>
 

    </>
    <>
    
    <Row>
            <Col span={12}><img src="hh.jpg"></img></Col>
            <Col span={12}><button><a>카카오 계정으로 가입</a></button></Col>
    </Row>
    <Row>
            <Col span={24}><center><button><a>전체동의</a></button></center></Col>
    </Row>
    <Row>
            <Col span={24}><center><button><a>만 14세 이상입니다(필수)</a></button></center></Col>
    </Row>
    <Row>
            <Col span={24}><center><button><a>이용약관 동의(필수)</a></button></center></Col>
    </Row>
    <Row>
            <Col span={24}><center><button><a>개인정보취급방침 동의(필수)</a></button></center></Col>
    </Row>

    <Row>
            <Col span={24}><Link href="/signin_step2" passHref><center><button><a>다음</a></button></center></Link></Col>
    </Row>
    
    
    
    </>
    </>
    );
    
}

export default signin_step1;