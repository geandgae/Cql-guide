<template>
  <div id="loginWrapper">
    <div id="wrapper-header">
      <header>
        <div class="l">
          <div class="logo">BI</div>
          <h1>CHECKQIN</h1>
          <div class="ing">동작중</div>
          <!-- <div class="ing stop">동작중단</div> -->
          <div class="connect">연결됨</div>
          <!-- <div class="connect dis">연결끊김</div> -->
        </div>
        <div class="r">
          <div>최근접속정보 : 2022년 12월 24일(목)</div>
          <div class="name">
            파라다이스 호텔 담당자 : <span>홍길동<em>님</em></span>
          </div>
          <ul class="number">
            <li>
              <a href="lilnk"><em>일번</em></a>
            </li>
            <li>
              <a href="lilnk"><em class="two">이번</em></a>
            </li>
          </ul>
        </div>
      </header>
    </div>
    <div class="login-area">
      <div class="login">
        <div class="login-tit">CHECKQIN</div>
        <div class="login-txt">사용자 로그인</div>
        <div class="login-id">
          <label for="login-id">아이디</label
          ><select name="" id="login-id">
            <option>관리자</option>
            <option>관리자</option>
            <option>관리자</option>
          </select>
        </div>
        <div class="login-pw">
          <label for="login-pw">비밀번호</label
          ><input type="password" id="login-pw" />
        </div>
        <div class="login-btn"><a href="link">로그인</a></div>
        <div class="login-info">
          ※ 비밀번호를 분실한 경우 관리자에게 문의하십시요.
        </div>
        <div class="login-new"><a href="link">새 비밀번호 생성</a></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // data: () => ({

  // }),

  name: "GuideChart",
  data() {
    return {};
  },
};
</script>
