import React from 'react'
import "./mypage.css"

export default function Mypage() {
return (
<section className="join-type">
    <div className="member-form">
        <h3>회원정보</h3>
        <form action="mypageSave.php" name="mypage" method="post">
            <fieldset>
                <legend className="ir_so">회원정보 입력폼</legend>
                <div className="join-intro">
                    <div className="face">
                        <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt="me" />
                    </div>
                </div>
                <div className="join-info">
                    <ul>
                        <li><strong>자기소개</strong><span>안녕하세요.</span></li>
                        <li><strong>이메일</strong><span>1111@naver.com</span></li>
                        <li><strong>이름</strong><span>이현우</span></li>
                        <li><strong>성별</strong><span>남자</span></li>
                        <li><strong>생년월일</strong><span>1997-12-21</span></li>
                        <li><strong>휴대폰 번호</strong><span>010-0000-1111</span></li>
                        <li><strong>사이트 소개</strong><span>11</span></li>
                    </ul>
                </div>

                <div className="join-btn">
                    <a href="mypageModify.php">수정하기</a>
                    <a href="mypageRemove.php">탈퇴하기</a>
                </div>
            </fieldset>
        </form>
    </div>
</section>

)
}