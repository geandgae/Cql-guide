<template>
    <div id="wrapper-time">
        <header>
            <div class="l">
                <div class="logo">BI</div>
                <h1 class="noto">객실 타임머신</h1>
            </div>
            <div class="r">
                <!-- <a href="link">닫기</a> -->
            </div>
        </header>
        <div class="select-area">
            <div class="l">
                <span class="date">2022년 12월 24일</span
                ><span class="cal"><a href="link">달력</a></span
                ><span class="selectbox-area"
                    ><select name="" id="" class="select">
                        <option value="">층선택</option>
                        <option value="">1</option>
                    </select></span
                >
            </div>
            <ul class="select-cal">
                <li>
                    <a href="link"><em>SUN</em>16</a>
                </li>
                <li>
                    <a href="link"><em>MON</em>17</a>
                </li>
                <li>
                    <a href="link"><em>TUE</em>18</a>
                </li>
                <li class="active">
                    <a href="link"><em>WED</em>19</a>
                </li>
                <li>
                    <a href="link"><em>THU</em>20</a>
                </li>
                <li>
                    <a href="link"><em>FRI</em>21</a>
                </li>
                <li>
                    <a href="link"><em>SAT</em>22</a>
                </li>
            </ul>
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
                            <span class="txt">전체</span></label
                        >
                    </li>
                    <li>
                        <label for="event92" class="checkbox"
                            ><input type="checkbox" name="" id="event92" />
                            <div class="txt">대실</div></label
                        >
                    </li>
                    <li>
                        <label for="event93" class="checkbox"
                            ><input type="checkbox" name="" id="event93" />
                            <div class="txt">숙박</div></label
                        >
                    </li>
                    <li>
                        <label for="event94" class="checkbox"
                            ><input type="checkbox" name="" id="event94" />
                            <div class="txt">장기</div></label
                        >
                    </li>
                    <li>
                        <label for="event95" class="checkbox"
                            ><input type="checkbox" name="" id="event95" />
                            <div class="txt">KEY</div></label
                        >
                    </li>
                    <li>
                        <label for="event96" class="checkbox"
                            ><input type="checkbox" name="" id="event96" />
                            <div class="txt">출입문</div></label
                        >
                    </li>
                    <li>
                        <label for="event97" class="checkbox"
                            ><input type="checkbox" name="" id="event97" />
                            <div class="txt">객실상태</div></label
                        >
                    </li>
                </ul>
                <div class="confirm"><a href="link">적용</a></div>
            </div>
        </div>
        <div class="time-content">
            <div class="content">
                <div class="layer1">content</div>
                <div class="layer2">content</div>
                <div class="layer3">content</div>
                <div class="layer4">content</div>
                <div class="layer5">content</div>
                <div class="layer6">content</div>
                <div class="layer7">
                    <div id="content-room">
                        <div class="status">
                            <div class="tit">1층 이벤트현황</div>
                        </div>
                        <ul class="room-list">
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록</span>
                                </div>
                                <div class="content-area">
                                    <div class="stay-txt">공실</div>
                                    <div class="door close">문닫힘</div>
                                </div>
                                <div class="checkinout">
                                    <dl>
                                        <dt>입실</dt>
                                        <dd>14:00</dd>
                                    </dl>
                                    <dl>
                                        <dt>퇴실</dt>
                                        <dd class="type2 active">14:00</dd>
                                    </dl>
                                </div>
                                <div class="power">
                                    <div class="onoff out">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication out">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key got">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                            <dt>상태</dt>
                                            <dd class="type1">숙박</dd>
                                        </dl>
                                        <dl>
                                            <dt>입실</dt>
                                            <dd class="type2">20:08</dd>
                                        </dl>
                                        <dl>
                                            <dt>도어</dt>
                                            <dd class="type1">손님키</dd>
                                        </dl>
                                        <dl>
                                            <dt>전원</dt>
                                            <dd class="type4">ON</dd>
                                        </dl>
                                        <dl>
                                            <dt>통신</dt>
                                            <dd class="type4">정상</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key got">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key got">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key got">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
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
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
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
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
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
                            <li>
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
                            <div class="tit">1층 이벤트현황</div>
                        </div>
                        <ul class="room-list">
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록</span>
                                </div>
                                <div class="content-area">
                                    <div class="stay-txt">공실</div>
                                    <div class="door close">문닫힘</div>
                                </div>
                                <div class="checkinout">
                                    <dl>
                                        <dt>입실</dt>
                                        <dd>14:00</dd>
                                    </dl>
                                    <dl>
                                        <dt>퇴실</dt>
                                        <dd class="type2 active">14:00</dd>
                                    </dl>
                                </div>
                                <div class="power">
                                    <div class="onoff out">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication out">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key got">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                            <dt>상태</dt>
                                            <dd class="type1">숙박</dd>
                                        </dl>
                                        <dl>
                                            <dt>입실</dt>
                                            <dd class="type2">20:08</dd>
                                        </dl>
                                        <dl>
                                            <dt>도어</dt>
                                            <dd class="type1">손님키</dd>
                                        </dl>
                                        <dl>
                                            <dt>전원</dt>
                                            <dd class="type4">ON</dd>
                                        </dl>
                                        <dl>
                                            <dt>통신</dt>
                                            <dd class="type4">정상</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key got">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key got">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key got">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
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
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
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
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
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
                            <li>
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
                            <div class="tit">1층 이벤트현황</div>
                        </div>
                        <ul class="room-list">
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록</span>
                                </div>
                                <div class="content-area">
                                    <div class="stay-txt">공실</div>
                                    <div class="door close">문닫힘</div>
                                </div>
                                <div class="checkinout">
                                    <dl>
                                        <dt>입실</dt>
                                        <dd>14:00</dd>
                                    </dl>
                                    <dl>
                                        <dt>퇴실</dt>
                                        <dd class="type2 active">14:00</dd>
                                    </dl>
                                </div>
                                <div class="power">
                                    <div class="onoff out">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication out">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key got">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                            <dt>상태</dt>
                                            <dd class="type1">숙박</dd>
                                        </dl>
                                        <dl>
                                            <dt>입실</dt>
                                            <dd class="type2">20:08</dd>
                                        </dl>
                                        <dl>
                                            <dt>도어</dt>
                                            <dd class="type1">손님키</dd>
                                        </dl>
                                        <dl>
                                            <dt>전원</dt>
                                            <dd class="type4">ON</dd>
                                        </dl>
                                        <dl>
                                            <dt>통신</dt>
                                            <dd class="type4">정상</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key got">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key got">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key got">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
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
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
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
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
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
                            <li>
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
                            <div class="tit">1층 이벤트현황</div>
                        </div>
                        <ul class="room-list">
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록</span>
                                </div>
                                <div class="content-area">
                                    <div class="stay-txt">공실</div>
                                    <div class="door close">문닫힘</div>
                                </div>
                                <div class="checkinout">
                                    <dl>
                                        <dt>입실</dt>
                                        <dd>14:00</dd>
                                    </dl>
                                    <dl>
                                        <dt>퇴실</dt>
                                        <dd class="type2 active">14:00</dd>
                                    </dl>
                                </div>
                                <div class="power">
                                    <div class="onoff out">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication out">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key got">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                            <dt>상태</dt>
                                            <dd class="type1">숙박</dd>
                                        </dl>
                                        <dl>
                                            <dt>입실</dt>
                                            <dd class="type2">20:08</dd>
                                        </dl>
                                        <dl>
                                            <dt>도어</dt>
                                            <dd class="type1">손님키</dd>
                                        </dl>
                                        <dl>
                                            <dt>전원</dt>
                                            <dd class="type4">ON</dd>
                                        </dl>
                                        <dl>
                                            <dt>통신</dt>
                                            <dd class="type4">정상</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key got">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key got">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key got">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
                                </div>
                                <div class="content-area">
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
                                </div>
                                <div class="power">
                                    <div class="onoff">전원</div>
                                    <div class="temperature">23ºC</div>
                                    <div class="communication">통신</div>
                                </div>
                            </li>
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
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
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
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
                            <li>
                                <div class="tit-area">
                                    <span class="key">키</span>
                                    <span class="tit">101호 VIP룸</span
                                    ><span class="list">목록 </span>
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
                            <li>
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
            </div>
            <div class="timeline">
                <div class="center">센터고정</div>
                <div class="open"><span>오늘</span> <em>문열림</em></div>
                <div class="enter"><span>10:00</span> <em>입실</em></div>
                <div class="out"><span>10:00</span> <em>퇴실</em></div>
                <div class="clean"><span>10:00</span> <em>청소</em></div>
                <div class="empty"><span>10:00</span> <em>공실</em></div>
                <div class="change"><span>10:00</span> <em>방변경</em></div>
                <div class="guest"><span>10:00</span> <em>방변경</em></div>
                <div class="stay">
                    <span>10:00</span> <em class="type1">숙</em>
                </div>
                <div class="stay" style="top: 558px">
                    <span>10:00</span> <em class="type2">대</em>
                </div>
                <div class="stay" style="top: 578px">
                    <span>10:00</span> <em class="type3">장</em>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      img1: require("@/assets/images/icon-two2.png"),
      img2: require("@/assets/images/trash7.png"),
      img3: require("@/assets/images/trash6.png"),
      img4: require("@/assets/images/trash1.png"),
      img5: require("@/assets/images/trash2.png"),
      img6: require("@/assets/images/trash3.png"),
      img7: require("@/assets/images/trash4.png"),
    }
  }
}
</script>