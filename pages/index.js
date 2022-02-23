import KakaoLoginButton from "../componenents/KakaoLoginButton";
import Link from "next/link";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

const API_KEY = "10923b261ba94d897ac6b81148314a3f";


export default function Home(){

    return (
       
        <>
        <Row>
            <Col span={24}><center><img src="/hihi.jpg"  /></center></Col>
            
        </Row>
        <Row>
            <Col span={24}><center><KakaoLoginButton/></center></Col>
        </Row>
        <Row>
            <Col span={12}><Link href="/signin" passHref><center><a>이메일로 회원가입</a></center></Link></Col>
            <Col span={12}> <Link href="/login" passHref><center><a>이메일로 로그인</a></center></Link></Col>
        </Row>
        <Row>
            <Col span={24}><Link href="/main" passHref><center><a>main page(제작중)</a></center></Link></Col>
        </Row>
        </>

    
    );
}