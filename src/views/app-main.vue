<template>
  <div id="wrapper">
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
      <div class="header-bottom">
        <div class="l">
          <div class="date">
            <span class="m">12월</span>
            <span class="d">24일</span>
          </div>
          <div class="time">15 <em>:</em> 28 <em>:</em> 46</div>
          <div class="tit">파라다이스 호텔</div>
          <div class="select-area">
            <select name="" id="" class="select">
              <option value="">(+ 03)</option>
              <option value="">(+ 04)</option>
            </select>
          </div>
        </div>
        <div class="r">
          <div class="status-m">
            <dl class="total-01">
              <dt>총객실</dt>
              <dd>254</dd>
            </dl>
            <dl class="total-02">
              <dt>숙박현황</dt>
              <dd>254</dd>
            </dl>
            <dl class="total-03">
              <dt>총객실</dt>
              <dd>254</dd>
            </dl>
            <dl class="total-04">
              <dt>총객실</dt>
              <dd>254</dd>
            </dl>
            <dl class="total-05">
              <dt>총객실</dt>
              <dd>254</dd>
            </dl>
            <dl class="total-06">
              <dt>총객실</dt>
              <dd>254</dd>
            </dl>
            <dl class="total-07">
              <dt>청소중</dt>
              <dd>03</dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="header-tab">
        <div class="l">
          <ul>
            <li class="active"><a href="lilnk">대시보드</a></li>
            <li><a href="lilnk">객실화면 01</a></li>
            <li><a href="lilnk">객실화면 01</a></li>
            <li><a href="lilnk">객실화면 01</a></li>
          </ul>
          <div class="add"><a href="link">추가</a></div>
        </div>
        <div class="r">
          <span class="tit">탭분리</span>
          <div class="cont">
            <img :src="img3" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div id="wrapper-content">
      <div class="content-header">
        <h2 class="total-pay-tit">매출통계</h2>
        <div class="quick-area">
          <div class="tit"><a href="link">quick menu</a></div>
          <div class="cont">
            <span>퀵메뉴</span>
            <ul>
              <li class="home"><a href="link">HOME</a></li>
              <li class="remote"><a href="link">원격지원</a></li>
              <li class="sales"><a href="link">매출조회</a></li>
              <li class="preferences">
                <a href="link">환경설정</a>
              </li>
              <li class="unmanned-sales">
                <a href="link">무인판매1</a>
              </li>
              <li class="unmanned-sales">
                <a href="link">무인판매2</a>
              </li>
              <li class="unmanned-sales">
                <a href="link">무인판매3</a>
              </li>
            </ul>
            <span class="close"><a href="link">닫기</a></span>
          </div>
        </div>
      </div>
      <section>
        <div class="m-total-pay">
          <div class="t">
            <div class="l">
              <ul class="dayby">
                <li class="active"><a href="link">일별</a></li>
                <li><a href="link">주별</a></li>
                <li><a href="link">월별</a></li>
                <li><a href="link">년별</a></li>
              </ul>
              <div class="dateby">
                <span class="label">날짜별</span>
                <input type="text" class="datepicker" value="2022-12-24" />
                <span class="wave">~</span>
                <input type="text" class="datepicker" />
              </div>
              <ul class="dayby">
                <li class="active"><a href="link">3개월</a></li>
                <li><a href="link">6개월</a></li>
              </ul>
            </div>
            <div class="r">
              <div class="txt">최근 17:04</div>
              <div class="more">
                <a href="link" title="새창열림">팝업열기</a>
              </div>
            </div>
          </div>
          <div class="b">
            <div class="graph">
              <!-- <img src="../assets/images/trash1.png" alt="" /> -->
              <img :src="img4" alt="" />
            </div>
            <div class="real-time">
              <div class="pay">
                <div class="tit">실시간 정산금액</div>
                <span>1,560,000<em>원</em></span>
              </div>
              <div class="room">
                <div class="tit">실시간 객실현황</div>
                <div class="cont">
                  <dl>
                    <dt>숙박</dt>
                    <dd>6</dd>
                  </dl>
                  <dl>
                    <dt>대실</dt>
                    <dd>45</dd>
                  </dl>
                  <dl>
                    <dt>장기</dt>
                    <dd>1</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-pay-summary">
          <div class="tit">객실별 매출 요약보기</div>
          <div class="select-area">
            <select name="" id="" class="select">
              <option value="">층 선택</option>
              <option value="">1</option>
            </select>
            <select name="" id="" class="select">
              <option value="">객실</option>
              <option value="">12</option>
            </select>
            <input type="text" class="search" />
          </div>
          <div class="result">
            <dl>
              <dt>층별 :</dt>
              <dd>3층</dd>
            </dl>
            <dl>
              <dt>객실 :</dt>
              <dd>306호</dd>
            </dl>
            <dl>
              <dt>유형 :</dt>
              <dd class="onhire">대실</dd>
            </dl>
          </div>
          <dl class="total">
            <dt>총건수</dt>
            <dd><em>56</em>건</dd>
          </dl>
          <ul class="result-list">
            <li>
              <span class="tit">현금</span
              ><span class="count"><em>12</em>건</span
              ><span class="won"><em>600,000</em>원</span>
            </li>
            <li>
              <span class="tit">카드</span
              ><span class="count"><em>34</em>건</span
              ><span class="won"><em>1,700,000</em>원</span>
            </li>
            <li>
              <span class="tit">미수금</span
              ><span class="count"><em>0</em>건</span
              ><span class="won"><em>0</em>원</span>
            </li>
            <li class="total-result">
              <span class="tit">합계</span
              ><span class="count"><em>56</em>건</span
              ><span class="won"><em>2,800,000</em>원</span>
            </li>
          </ul>
        </div>
      </section>
      <section class="content-c">
        <div class="l">
          <div class="m-calendar">
            <!-- <img src="../assets/images/trash2.png" alt="" /> -->
            <img :src="img5" alt="" />
          </div>
          <div class="m-banner">
            <!-- <img src="../assets/images/trash3.png" alt="" /> -->
            <img :src="img6" alt="" />
          </div>
          <div class="m-event">
            <div class="t">
              <h3>이벤트 현황</h3>
              <span class="txt"> ※ 매일 00시에 초기화</span>
            </div>
            <div class="b">
              <ul class="checkbox-area">
                <li>
                  <label for="event1" class="checkbox"
                    ><input
                      type="checkbox"
                      name=""
                      id="event1"
                      checked="checked"
                    />
                    <span class="txt">대실</span></label
                  >
                </li>
                <li>
                  <label for="event2" class="checkbox"
                    ><input type="checkbox" name="" id="event2" />
                    <div class="txt">숙박</div></label
                  >
                </li>
                <li>
                  <label for="event3" class="checkbox"
                    ><input type="checkbox" name="" id="event3" />
                    <div class="txt">KEY</div></label
                  >
                </li>
                <li>
                  <label for="event4" class="checkbox"
                    ><input type="checkbox" name="" id="event4" />
                    <div class="txt">출입문</div></label
                  >
                </li>
              </ul>
              <div class="select-area">
                <select name="" id="" class="select">
                  <option value="">층 선택</option>
                  <option value="">1</option>
                </select>
                <select name="" id="" class="select">
                  <option value="">객실</option>
                  <option value="">12</option>
                </select>
                <input type="text" class="search" />
              </div>
              <ul class="list">
                <li class="blue">
                  <a href="link"
                    ><em>[대실201호]</em>땡땡 이벤트 발생땡땡 이벤트 발생땡땡
                    이벤트 발생땡땡 이벤트 발생땡땡 이벤트 발생땡땡 이벤트
                    발생땡땡 이벤트 발생</a
                  >
                </li>
                <li class="orange">
                  <a href="link"><em>[숙박201호]</em>땡땡 이벤트 발생</a>
                </li>
                <li class="blue">
                  <a href="link"><em>[대실201호]</em>땡땡 이벤트 발생</a>
                </li>
                <li class="blue">
                  <a href="link"><em>[대실201호]</em>땡땡 이벤트 발생</a>
                </li>
                <li class="blue">
                  <a href="link"><em>[대실201호]</em>땡땡 이벤트 발생</a>
                </li>
                <li class="blue">
                  <a href="link"><em>[대실201호]</em>땡땡 이벤트 발생</a>
                </li>
                <li class="blue">
                  <a href="link"><em>[대실201호]</em>땡땡 이벤트 발생</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="m-news">
            <div class="t">
              <h3>숙박뉴스</h3>
              <div class="more">
                <a href="link" title="새창열림">팝업열기</a>
              </div>
            </div>
            <ul class="b-list">
              <li>
                <a href="link"
                  ><span
                    >JW 메리어트 제주 리조트 앤 스파 '내년 2분기 오픈'
                  </span></a
                >
                <i> <img :src="img1" alt="new" /></i>
                <em class="time">12:24</em>
              </li>
              <li>
                <a href="link"><span>JW 메리어트 제주 리조트 </span></a>
                <em class="time">12/24</em>
              </li>
              <li>
                <a href="link"
                  ><span
                    >JW 메리어트 제주 리조트 앤 스파 '내년 2분기 오픈'
                  </span></a
                >
                <em class="time">12/24</em>
              </li>
              <li>
                <a href="link"
                  ><span
                    >JW 메리어트 제주 리조트 앤 스파 '내년 2분기 오픈'
                  </span></a
                >
                <em class="time">12/24</em>
              </li>
              <li>
                <a href="link"
                  ><span
                    >JW 메리어트 제주 리조트 앤 스파 '내년 2분기 오픈'
                  </span></a
                >
                <em class="time">12/24</em>
              </li>
              <li>
                <a href="link"
                  ><span
                    >JW 메리어트 제주 리조트 앤 스파 '내년 2분기 오픈'
                  </span></a
                >
                <em class="time">12/24</em>
              </li>
            </ul>
          </div>
        </div>
        <div class="c">
          <div class="m-ispa">
            <div class="t">
              <h3>ISPA</h3>
              <div class="more">
                <a href="link" title="새창열림">팝업열기</a>
              </div>
            </div>
            <div class="b">
              <ul class="tab">
                <li class="active">
                  <a href="link">무인판매1</a>
                </li>
                <li><a href="link">무인판매2</a></li>
                <li><a href="link">무인판매3</a></li>
              </ul>
              <div class="sales-status">
                <dl>
                  <dt>판매상태</dt>
                  <dd>
                    <img :src="img2" alt="" />
                  </dd>
                </dl>
                <dl>
                  <dt>성인인증사용</dt>
                  <dd>
                    <img :src="img2" alt="" />
                  </dd>
                </dl>
              </div>
              <div class="sales-status2">
                <span class="tit">판매현황</span>
                <dl>
                  <dt>숙박</dt>
                  <dd>6</dd>
                </dl>
                <dl class="type2">
                  <dt>대실</dt>
                  <dd>6</dd>
                </dl>
              </div>
              <div class="sales-history">
                <span class="tit">판매이력</span>
                <div class="r">
                  <ul class="checkbox-area">
                    <li>
                      <label for="event91" class="checkbox"
                        ><input
                          type="checkbox"
                          name=""
                          id="event91"
                          checked="checked"
                        />
                        <span class="txt">대실</span></label
                      >
                    </li>
                    <li>
                      <label for="event92" class="checkbox"
                        ><input type="checkbox" name="" id="event92" />
                        <div class="txt">숙박</div></label
                      >
                    </li>
                  </ul>
                  <select name="" id="" class="select">
                    <option value="">층 선택</option>
                    <option value="">1</option>
                  </select>
                </div>
              </div>
              <div class="sales-list">
                <table>
                  <tr>
                    <th>호실</th>
                    <th>객실명</th>
                    <th>결제</th>
                    <th>시간</th>
                  </tr>
                  <tr class="active">
                    <td class="red">101호</td>
                    <td>
                      스위트룸
                      <div class="view">
                        <ul>
                          <li>호실:<em>405호</em></li>
                          <li>유형:<em>VIP룸</em></li>
                          <li>입실:<em>13:00</em></li>
                          <li>퇴실:<em>11:56</em></li>
                        </ul>
                        <div class="card-cash">
                          <span
                            ><em>카드 (<i>5건</i>)</em
                            ><em><i class="orange">750,000</i>원</em></span
                          ><span
                            ><em>현금 (<i>5건</i>)</em
                            ><em><i class="orange">750,000</i>원</em></span
                          >
                        </div>
                      </div>
                    </td>
                    <td class="blue">카드</td>
                    <td>18:00</td>
                  </tr>
                  <tr>
                    <td class="red">101호</td>
                    <td>스위트룸</td>
                    <td class="blue">카드</td>
                    <td>18:00</td>
                  </tr>
                  <tr>
                    <td class="red">101호</td>
                    <td>스위트룸</td>
                    <td class="blue">카드</td>
                    <td>18:00</td>
                  </tr>
                  <tr>
                    <td class="red">101호</td>
                    <td>스위트룸</td>
                    <td class="blue">카드</td>
                    <td>18:00</td>
                  </tr>
                  <tr>
                    <td class="red">101호</td>
                    <td>스위트룸</td>
                    <td class="blue">카드</td>
                    <td>18:00</td>
                  </tr>
                  <tr>
                    <td class="red">101호</td>
                    <td>스위트룸</td>
                    <td class="blue">카드</td>
                    <td>18:00</td>
                  </tr>
                  <tr>
                    <td class="red">101호</td>
                    <td>스위트룸</td>
                    <td class="blue">카드</td>
                    <td>18:00</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="r">
          <dir class="m-reservation-status">
            <div class="t">
              <h3>예약 현황</h3>
              <div class="r">
                <div class="txt">최근 17:04</div>
                <div class="more">
                  <a href="link" title="새창열림">팝업열기</a>
                </div>
              </div>
            </div>
            <div class="b">
              <div class="list">
                <dl>
                  <dt>총건수</dt>
                  <dd>26</dd>
                </dl>
                <dl>
                  <dt>신규</dt>
                  <dd>5</dd>
                </dl>
                <dl>
                  <dt>처리</dt>
                  <dd>13</dd>
                </dl>
                <dl>
                  <dt>취소</dt>
                  <dd>8</dd>
                </dl>
              </div>
              <ul class="b-list">
                <li>
                  <a href="link"
                    ><span
                      ><em class="txt3">[숙박앱]</em> JW 메리어트 제주 리조트 앤
                      스파 '내년 2분기 오픈'
                    </span></a
                  >
                  <i> <img :src="img1" alt="new" /></i>
                  <em class="time">12:24</em>
                </li>
                <li>
                  <a href="link"
                    ><span
                      ><em class="txt2">[업데이트]</em> JW 메리어트 제주 리조트
                    </span></a
                  >
                  <em class="time">12/24</em>
                </li>
              </ul>
            </div>
          </dir>
          <dir class="m-reservation-statistics">
            <div class="t">
              <h3>예약 통계</h3>
              <ul class="radio-list">
                <li>
                  <label for="total1" class="radio">
                    <input type="radio" name="total" id="total1" />
                    <span class="txt">일간통계</span>
                  </label>
                </li>
                <li>
                  <label for="total2" class="radio">
                    <input type="radio" name="total" id="total2" checked />
                    <span class="txt">주간통계</span>
                  </label>
                </li>
                <li>
                  <label for="total3" class="radio">
                    <input type="radio" name="total" id="total3" />
                    <span class="txt">월간통계</span>
                  </label>
                </li>
              </ul>
            </div>
            <div class="b">
              <div class="btns">
                <a href="link" class="before">이전</a>
                <span>2주</span>
                <a href="link" class="next">다음</a>
              </div>
              <!-- <img src="../assets/images/trash5.png" alt="" /> -->
              <highcharts :options="chartOptions" />
            </div>
          </dir>
          <dir class="m-notice">
            <div class="t">
              <h3>공지사항</h3>
              <div class="more">
                <a href="link" title="새창열림">팝업열기</a>
              </div>
            </div>
            <div class="b">
              <ul class="tab">
                <li class="active">
                  <a href="link">공지</a>
                </li>
                <li><a href="link">TODO-미션</a></li>
              </ul>
              <ul class="b-list">
                <li>
                  <a href="link"
                    ><span
                      ><em class="txt">중요</em>JW 메리어트 제주 리조트 앤 스파
                      '내년 2분기 오픈'
                    </span></a
                  >
                  <i> <img :src="img1" alt="new" /></i>
                  <em class="time">12:24</em>
                </li>
                <li>
                  <a href="link"
                    ><span
                      ><em class="txt2">[업데이트]</em> JW 메리어트 제주 리조트
                    </span></a
                  >
                  <em class="time">12/24</em>
                </li>
                <li>
                  <a href="link"
                    ><span
                      >JW 메리어트 제주 리조트 앤 스파 '내년 2분기 오픈'
                    </span></a
                  >
                  <em class="time">12/24</em>
                </li>
                <li>
                  <a href="link"
                    ><span
                      >JW 메리어트 제주 리조트 앤 스파 '내년 2분기 오픈'
                    </span></a
                  >
                  <em class="time">12/24</em>
                </li>
                <li>
                  <a href="link"
                    ><span
                      >JW 메리어트 제주 리조트 앤 스파 '내년 2분기 오픈'
                    </span></a
                  >
                  <em class="time">12/24</em>
                </li>
              </ul>
            </div>
          </dir>
          <dir class="m-subscription">
            <div class="t">
              <h3>구독현황</h3>
              <div class="more">
                <a href="link" title="새창열림">팝업열기</a>
              </div>
            </div>
            <div class="b">
              <ul class="tab">
                <li class="active">
                  <a href="link">구독중</a>
                </li>
                <li><a href="link">신규 및 추천</a></li>
              </ul>
              <ul class="b-list">
                <li>
                  <a href="link"
                    ><span
                      ><em class="txt">중요</em>JW 메리어트 제주 리조트 앤 스파
                      '내년 2분기 오픈'
                    </span></a
                  >
                  <i> <img :src="img1" alt="new" /></i>
                  <em class="time">12:24</em>
                </li>
                <li>
                  <a href="link"
                    ><span
                      ><em class="txt2">[업데이트]</em> JW 메리어트 제주 리조트
                    </span></a
                  >
                  <em class="time">12/24</em>
                </li>
                <li>
                  <a href="link"
                    ><span
                      >JW 메리어트 제주 리조트 앤 스파 '내년 2분기 오픈'
                    </span></a
                  >
                  <em class="time">12/24</em>
                </li>
                <li>
                  <a href="link"
                    ><span
                      >JW 메리어트 제주 리조트 앤 스파 '내년 2분기 오픈'
                    </span></a
                  >
                  <em class="time">12/24</em>
                </li>
                <li>
                  <a href="link"
                    ><span
                      >JW 메리어트 제주 리조트 앤 스파 '내년 2분기 오픈'
                    </span></a
                  >
                  <em class="time">12/24</em>
                </li>
              </ul>
            </div>
          </dir>
        </div>
      </section>
      <footer>
        <div><img :src="img7" alt="" /></div>
        <ul class="ad">
          <li>
            <div>
              <em>[광고]</em> 한줄 광고가 여러개일 경우 자동으로 롤링되며
              표시됩니다.
            </div>
          </li>
          <li>
            <div>
              <em class="txt2">[알림]</em> 프로그램 관련 및 공지알림이 있을 경우
              롤링되며 표시됩니다.
            </div>
            <div style="display: none">
              <em class="txt2">[알림]</em> 프로그램 관련 및 공지알림이 있을 경우
              롤링되며 표시됩니다.
            </div>
          </li>
        </ul>
        <div class="alert">
          <div class="new">
            <span class="tit">신규알림</span><span class="txt">3</span
            ><span class="view-all"><a href="link">전체보기</a></span>
          </div>
          <div class="limit">프로그램 사용기한 : 15일 남음</div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  // data: () => ({

  // }),

  name: "GuideChart",
  data() {
    return {
      img1: require("@/assets/images/icon-new.png"),
      img2: require("@/assets/images/trash7.png"),
      img3: require("@/assets/images/trash6.png"),
      img4: require("@/assets/images/trash1.png"),
      img5: require("@/assets/images/trash2.png"),
      img6: require("@/assets/images/trash3.png"),
      img7: require("@/assets/images/trash4.png"),
      // highcharts
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        xAxis: {
          categories: ["1일", "2일", "3일", "4일", "5일", "6일", "7일"],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "avarage",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        series: [
          {
            name: "현재상품",
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6],
          },
          {
            name: "유사상품",
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0],
          },
        ],
        accessibility: {
          enabled: false,
        },
      },
    };
  },
};
</script>
