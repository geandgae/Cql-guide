<template>
    <div id="wrapper-room">
        <div id="wrapper-header">
            <header>
                <div class="l">
                    <div class="logo">BI</div>
                    <h1>Neoguri Manager</h1>
                    <div class="tit"><em>*</em>객실화면 01</div>
                    <div class="txt">최근 이벤트 : 2022-12-24(목) 16:35:28</div>
                </div>
                <div class="r">
                    <ul class="checkbox-area">
                        <li>
                            <label for="event1" class="checkbox checkbox1"
                                ><input
                                    type="checkbox"
                                    name=""
                                    id="event1"
                                    checked="checked"
                                />
                                <span class="txt">숙박</span></label
                            >
                        </li>
                        <li>
                            <label for="event2" class="checkbox checkbox2"
                                ><input type="checkbox" name="" id="event2" />
                                <div class="txt">대실</div></label
                            >
                        </li>
                        <li>
                            <label for="event3" class="checkbox checkbox3"
                                ><input type="checkbox" name="" id="event3" />
                                <div class="txt">장기</div></label
                            >
                        </li>
                        <li>
                            <label for="event4" class="checkbox checkbox4"
                                ><input type="checkbox" name="" id="event4" />
                                <div class="txt">공실</div></label
                            >
                        </li>
                        <li>
                            <label for="event5" class="checkbox checkbox5"
                                ><input type="checkbox" name="" id="event5" />
                                <div class="txt">예약</div></label
                            >
                        </li>
                    </ul>
                    <div class="voice">
                        <span class="img">
                            <img src="../assets/images/voice.png" alt=""
                        /></span>
                        <span class="txt">Voice</span>
                        <span class="toggle"
                            ><img src="../assets/images/trash8.png" alt=""
                        /></span>
                    </div>
                    <ul class="number">
                        <li>
                            <a href="lilnk"><em>일번</em></a>
                        </li>
                        <li>
                            <a href="lilnk"><em class="two2">이번</em></a>
                        </li>
                        <li>
                            <a href="lilnk"><em class="two3">이번</em></a>
                        </li>
                        <li>
                            <a href="lilnk"><em class="two4">이번</em></a>
                        </li>
                        <li>
                            <a href="lilnk"><em class="close">닫기</em></a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
        <div class="setting">
            <div class="tit">
                <h2>객실설정</h2>
                <span class="close"><a href="link">닫기</a></span>
            </div>
            <div class="welcome-area">
                <span class="welcome">반갑습니다 <em>매니저</em>님</span>
                <span class="change"><a href="link">변경</a></span>
            </div>
            <div class="setting-list">
                <div class="div">
                    <h3 class="txt-search">조회</h3>
                    <ul>
                        <li><a href="link">매출 조회</a></li>
                        <li><a href="link">객실 이력조회 </a></li>
                        <li><a href="link">포인트 이력조회</a></li>
                    </ul>
                    <h3 class="txt-management">관리</h3>
                    <ul>
                        <li>
                            <a href="link">객실정보 관리 </a>
                        </li>
                        <li><a href="link">객실타입 관리 </a></li>
                        <li><a href="link">일괄처리 </a></li>
                        <li><a href="link">포인트 관리</a></li>
                    </ul>
                    <h3 class="txt-reservation">예약 관리</h3>
                    <ul>
                        <li><a href="link">예약 목록</a></li>
                        <li><a href="link">예약 등록</a></li>
                    </ul>
                    <h3 class="txt-bbs">게시판</h3>
                    <ul>
                        <li><a href="link">매출 조회</a></li>
                        <li><a href="link">객실 이력조회 </a></li>
                        <li><a href="link">포인트 이력조회</a></li>
                    </ul>
                </div>
                <div class="div">
                    <h3 class="txt-search">설정</h3>
                    <ul>
                        <li><a href="link">요금설정</a></li>
                        <li><a href="link">운영규칙 설정</a></li>
                        <li><a href="link">입실시간 옵션</a></li>
                        <li><a href="link">무인판매 설정</a></li>
                        <li><a href="link">예약설정</a></li>
                        <li><a href="link">포인트 설정</a></li>
                        <li><a href="link">잠금 설정</a></li>
                        <li><a href="link">냉/난방 설정</a></li>
                        <li><a href="link">화면 설정</a></li>
                        <li><a href="link">음성 설정</a></li>
                        <li><a href="link">전원 설정</a></li>
                        <li><a href="link">알림 설정</a></li>
                        <li><a href="link">PMS 설정</a></li>
                        <li><a href="link">도어락 설정</a></li>
                        <li><a href="link">데이터 관리</a></li>
                        <li><a href="link">직원 관리</a></li>
                        <li><a href="link">구독관리</a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <div class="version">프로그램 버전 : 00.123.01</div>
                <div class="email">
                    <p>
                        담당자 이메일 :
                        <a href="mailto:master@checkQin.com"
                            >master@checkQin.com</a
                        >
                    </p>
                    <p>서비스 제공 : CHECKQIN Cloud</p>
                </div>
                <div class="txt">
                    Copyright ⓒ CHECKQIN Corp., All Rights Reserved.
                </div>
                <div class="limit">프로그램 사용기한 : 1515일 남음</div>
            </div>
        </div>
        <div id="content-room">
            <div class="status">
                <div class="tit">1층 객실현황</div>
                <ul class="list">
                    <li class="case1">6</li>
                    <li class="case2">3</li>
                    <li class="case3">1</li>
                    <li class="case4">2</li>
                    <li class="case5">3</li>
                </ul>
                <ul class="event-list">
                    <li class="event1">
                        [스위트룸 203호] 00 이벤트가 발생했습니다.
                    </li>
                    <li class="event2">
                        [스위트룸 203호] 00 이벤트가 발생했습니다.
                    </li>
                    <li>[스위트룸 203호] 00 이벤트가 발생했습니다.</li>
                    <li class="event2">
                        [스위트룸 203호] 00 이벤트가 발생했습니다.
                    </li>
                </ul>
            </div>
            <ul class="room-list">
                <li>
                    <div class="event">
                        <div class="tit">이벤트 알림</div>
                        <div class="txt">통신단절 이벤트 발생</div>
                    </div>
                    <div class="tit-area">
                        <span class="key">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록</span>
                    </div>
                    <div class="content-area">
                        <div class="stay-txt">공실</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key got">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 <em>이벤트</em></span>
                    </div>
                    <div class="tit-view">303호 일반룸 [숙박 / 청소요청]</div>
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt txt2">숙박</div>
                        <div class="stay-alarm">알람</div>
                        <div class="door open">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                        <div class="checkinout-view">
                            <dl>
                                <dt>입실</dt>
                                <dd>23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>퇴실예정</dt>
                                <dd class="type2">23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>이용시간</dt>
                                <dd class="type3">08:32</dd>
                            </dl>
                            <dl>
                                <dt>초과시간</dt>
                                <dd class="type4">00:25</dd>
                            </dl>
                        </div>
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key got">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 <em>이벤트</em></span>
                    </div>
                    <!-- <div class="tit-view">303호 일반룸 [숙박 / 청소요청]</div> -->
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt txt2">숙박</div>
                        <div class="stay-theft">도난</div>
                        <div class="door close">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                        <div class="clean">침대청소</div>
                        <!-- <div class="checkinout-view">
                            <dl>
                                <dt>입실</dt>
                                <dd>23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>퇴실예정</dt>
                                <dd class="type2">23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>이용시간</dt>
                                <dd class="type3">08:32</dd>
                            </dl>
                            <dl>
                                <dt>초과시간</dt>
                                <dd class="type4">00:25</dd>
                            </dl>
                        </div> -->
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key got">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 <em>이벤트</em></span>
                    </div>
                    <!-- <div class="tit-view">303호 일반룸 [숙박 / 청소요청]</div> -->
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt txt2">숙박</div>
                        <div class="stay-reservation">예약</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                        <div class="clean">침대청소</div>
                        <!-- <div class="checkinout-view">
                            <dl>
                                <dt>입실</dt>
                                <dd>23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>퇴실예정</dt>
                                <dd class="type2">23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>이용시간</dt>
                                <dd class="type3">08:32</dd>
                            </dl>
                            <dl>
                                <dt>초과시간</dt>
                                <dd class="type4">00:25</dd>
                            </dl>
                        </div> -->
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="onoff-view">전원 OFF</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key got">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 </span>
                    </div>
                    <!-- <div class="tit-view">303호 일반룸 [숙박 / 청소요청]</div> -->
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt txt2">숙박</div>
                        <div class="stay-outing">외출</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                        <!-- <div class="checkinout-view">
                            <dl>
                                <dt>입실</dt>
                                <dd>23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>퇴실예정</dt>
                                <dd class="type2">23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>이용시간</dt>
                                <dd class="type3">08:32</dd>
                            </dl>
                            <dl>
                                <dt>초과시간</dt>
                                <dd class="type4">00:25</dd>
                            </dl>
                        </div> -->
                    </div>
                    <div class="power">
                        <div class="onoff out">전원</div>
                        <div class="temperature active">23ºC</div>
                        <div class="tem-view">온도 23ºC</div>
                        <div class="communication out">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key type2">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 <em>이벤트</em></span>
                    </div>
                    <!-- <div class="tit-view">303호 일반룸 [숙박 / 청소요청]</div> -->
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt rent">대실</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                        <div class="clean">침대청소</div>
                        <!-- <div class="checkinout-view">
                            <dl>
                                <dt>입실</dt>
                                <dd>23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>퇴실예정</dt>
                                <dd class="type2">23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>이용시간</dt>
                                <dd class="type3">08:32</dd>
                            </dl>
                            <dl>
                                <dt>초과시간</dt>
                                <dd class="type4">00:25</dd>
                            </dl>
                        </div> -->
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key type2">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 <em>이벤트</em></span>
                    </div>
                    <!-- <div class="tit-view">303호 일반룸 [숙박 / 청소요청]</div> -->
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt long">장기</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                        <div class="clean">침대청소</div>
                        <!-- <div class="checkinout-view">
                            <dl>
                                <dt>입실</dt>
                                <dd>23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>퇴실예정</dt>
                                <dd class="type2">23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>이용시간</dt>
                                <dd class="type3">08:32</dd>
                            </dl>
                            <dl>
                                <dt>초과시간</dt>
                                <dd class="type4">00:25</dd>
                            </dl>
                        </div> -->
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key type2">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 <em>이벤트</em></span>
                    </div>
                    <!-- <div class="tit-view">303호 일반룸 [숙박 / 청소요청]</div> -->
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt clean">청소요청</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                        <div class="clean">침대청소</div>
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key type2">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 <em>이벤트</em></span>
                    </div>
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt cleaning">청소중</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                    </div>
                    <div class="confirm">
                        <span class="txt">침대 청소 확인</span>
                        <span class="close"><a href="link">닫기</a></span>
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key type2">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 <em>이벤트</em></span>
                    </div>
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt cleaning-done">청소완료</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                        <div class="clean">침대청소</div>
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li>
                    <div class="quick-menu">
                        <div class="tit">바로가기</div>
                        <div class="close"><a href="link">닫기</a></div>
                        <ul>
                            <li><a href="link">1 예약현황</a></li>
                            <li><a href="link">2 매출이력</a></li>
                            <li><a href="link">3 객실이력</a></li>
                        </ul>
                    </div>
                    <div class="tit-area">
                        <span class="key">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록</span>
                    </div>
                    <div class="content-area">
                        <div class="stay-txt">공실</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
            </ul>
            <div class="status">
                <div class="tit">1층 객실현황</div>
                <ul class="list">
                    <li class="case1">6</li>
                    <li class="case2">3</li>
                    <li class="case3">1</li>
                    <li class="case4">2</li>
                    <li class="case5">3</li>
                </ul>
                <ul class="event-list">
                    <li class="event1">
                        [스위트룸 203호] 00 이벤트가 발생했습니다.
                    </li>
                    <li class="event2">
                        [스위트룸 203호] 00 이벤트가 발생했습니다.
                    </li>
                    <li>[스위트룸 203호] 00 이벤트가 발생했습니다.</li>
                    <li class="event2">
                        [스위트룸 203호] 00 이벤트가 발생했습니다.
                    </li>
                </ul>
            </div>
            <ul class="room-list">
                <li>
                    <div class="event2">
                        <div class="tit">2층 이벤트 알림</div>
                        <div class="txt">스위트룸 203호 도어 열림</div>
                    </div>
                    <div class="tit-area">
                        <span class="key">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록</span>
                    </div>
                    <div class="content-area">
                        <div class="stay-txt">공실</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key got">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 <em>이벤트</em></span>
                    </div>
                    <div class="tit-view">303호 일반룸 [숙박 / 청소요청]</div>
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt txt2">숙박</div>
                        <div class="stay-alarm">알람</div>
                        <div class="door open">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                        <div class="clean">침대청소</div>
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key got">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 <em>이벤트</em></span>
                    </div>
                    <!-- <div class="tit-view">303호 일반룸 [숙박 / 청소요청]</div> -->
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt txt2">숙박</div>
                        <div class="stay-theft">도난</div>
                        <div class="door close">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                        <div class="clean">침대청소</div>
                        <!-- <div class="checkinout-view">
                            <dl>
                                <dt>입실</dt>
                                <dd>23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>퇴실예정</dt>
                                <dd class="type2">23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>이용시간</dt>
                                <dd class="type3">08:32</dd>
                            </dl>
                            <dl>
                                <dt>초과시간</dt>
                                <dd class="type4">00:25</dd>
                            </dl>
                        </div> -->
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key got">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 <em>이벤트</em></span>
                    </div>
                    <!-- <div class="tit-view">303호 일반룸 [숙박 / 청소요청]</div> -->
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt txt2">숙박</div>
                        <div class="stay-reservation">예약</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                        <div class="clean">침대청소</div>
                        <!-- <div class="checkinout-view">
                            <dl>
                                <dt>입실</dt>
                                <dd>23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>퇴실예정</dt>
                                <dd class="type2">23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>이용시간</dt>
                                <dd class="type3">08:32</dd>
                            </dl>
                            <dl>
                                <dt>초과시간</dt>
                                <dd class="type4">00:25</dd>
                            </dl>
                        </div> -->
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key got">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 </span>
                    </div>
                    <!-- <div class="tit-view">303호 일반룸 [숙박 / 청소요청]</div> -->
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt txt2">숙박</div>
                        <div class="stay-outing">외출</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                        <!-- <div class="checkinout-view">
                            <dl>
                                <dt>입실</dt>
                                <dd>23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>퇴실예정</dt>
                                <dd class="type2">23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>이용시간</dt>
                                <dd class="type3">08:32</dd>
                            </dl>
                            <dl>
                                <dt>초과시간</dt>
                                <dd class="type4">00:25</dd>
                            </dl>
                        </div> -->
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key type2">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 <em>이벤트</em></span>
                    </div>
                    <!-- <div class="tit-view">303호 일반룸 [숙박 / 청소요청]</div> -->
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt rent">대실</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                        <div class="clean">침대청소</div>
                        <!-- <div class="checkinout-view">
                            <dl>
                                <dt>입실</dt>
                                <dd>23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>퇴실예정</dt>
                                <dd class="type2">23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>이용시간</dt>
                                <dd class="type3">08:32</dd>
                            </dl>
                            <dl>
                                <dt>초과시간</dt>
                                <dd class="type4">00:25</dd>
                            </dl>
                        </div> -->
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key type2">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 <em>이벤트</em></span>
                    </div>
                    <!-- <div class="tit-view">303호 일반룸 [숙박 / 청소요청]</div> -->
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt long">장기</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                        <div class="clean">침대청소</div>
                        <!-- <div class="checkinout-view">
                            <dl>
                                <dt>입실</dt>
                                <dd>23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>퇴실예정</dt>
                                <dd class="type2">23-12-24 / 18:00</dd>
                            </dl>
                            <dl>
                                <dt>이용시간</dt>
                                <dd class="type3">08:32</dd>
                            </dl>
                            <dl>
                                <dt>초과시간</dt>
                                <dd class="type4">00:25</dd>
                            </dl>
                        </div> -->
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key type2">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 <em>이벤트</em></span>
                    </div>
                    <!-- <div class="tit-view">303호 일반룸 [숙박 / 청소요청]</div> -->
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt clean">청소요청</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                        <div class="clean">침대청소</div>
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key type2">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 <em>이벤트</em></span>
                    </div>
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt cleaning">청소중</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                    </div>
                    <div class="confirm">
                        <span class="txt">침대 청소 확인</span>
                        <span class="close"><a href="link">닫기</a></span>
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li class="on">
                    <div class="tit-area">
                        <span class="key type2">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록 <em>이벤트</em></span>
                    </div>
                    <div class="content-area">
                        <!-- 숙박 : stay , 대실 : rent , 장기 : long , 청소요청 clean 청소중 : cleaning 청소완료 : cleaning-done -->
                        <div class="stay-txt cleaning-done">청소완료</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                        <div class="clean">침대청소</div>
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
                <li>
                    <div class="quick-menu">
                        <div class="tit">바로가기</div>
                        <div class="close"><a href="link">닫기</a></div>
                        <ul>
                            <li><a href="link">1 예약현황</a></li>
                            <li><a href="link">2 매출이력</a></li>
                            <li><a href="link">3 객실이력</a></li>
                        </ul>
                    </div>
                    <div class="tit-area">
                        <span class="key">키</span>
                        <span class="tit">101호 VIP룸</span
                        ><span class="list">목록</span>
                    </div>
                    <div class="content-area">
                        <div class="stay-txt">공실</div>
                        <div class="door">문닫힘</div>
                    </div>
                    <div class="checkinout">
                        <dl>
                            <dt>입실</dt>
                            <dd>14:00</dd>
                        </dl>
                        <dl>
                            <dt>퇴실</dt>
                            <dd class="type2">14:00</dd>
                        </dl>
                    </div>
                    <div class="power">
                        <div class="onoff">전원</div>
                        <div class="temperature">23ºC</div>
                        <div class="communication">통신</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
