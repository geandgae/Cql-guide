<template>
  <!-- v-container -->
  <v-container fluid class="theme-cqi pa-10">
    <h1 class="mb-10">guide</h1>

    <v-tabs v-model="tab" color="primary" align-tabs="start" style="border-bottom: 1px solid #ddd">
      <v-tab v-for="item in ['grid', 'buttons', 'popup', 'form', 'font', 'chart', 'table', 'color', 'icon']" :key="item" :value="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <!-- grid -->
    <div v-if="tab === 'grid'" class="py-10">
      <h2 class="mb-2">grid</h2>
      <v-container fluid class="bg-surface-variant">
        <v-row no-gutters>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2"> .v-col-2 </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="6">
            <v-sheet class="pa-2 ma-2">
              <fieldset class="field-set">
                <h3 class="field-title mb-2">QR코드 키 발급</h3>
                <div class="field-box">
                  <v-radio-group hide-details density="compact" inline>
                    <v-radio color="secondary" label="현금" value="현금"></v-radio>
                    <v-radio color="secondary" label="카드" value="카드"></v-radio>
                  </v-radio-group>
                </div>
              </fieldset>
              <fieldset class="field-set">
                <h3 class="field-title mb-2">객실 이력 표시 설정</h3>
                <div class="field-box">
                  <v-checkbox hide-details density="compact" color="secondary" label="전원상태"></v-checkbox>
                  <v-checkbox hide-details density="compact" color="secondary" label="통신상태"></v-checkbox>
                  <v-checkbox hide-details density="compact" color="secondary" label="온도상태"></v-checkbox>
                  <v-checkbox hide-details density="compact" color="secondary" label="차량상태"></v-checkbox>
                </div>
              </fieldset>
            </v-sheet>
          </v-col>
          <v-col cols="6">
            <v-sheet class="pa-2 ma-2">
              <fieldset class="field-set">
                <h3 class="field-title mb-2">공실 경과 시간 표시 설정</h3>
                <div class="field-box">
                  <v-radio-group hide-details density="compact" inline>
                    <v-radio color="secondary" label="표시" value="표시"></v-radio>
                    <v-radio color="secondary" label="숨김" value="숨김"></v-radio>
                  </v-radio-group>
                </div>
              </fieldset>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- buttons -->
    <div v-if="tab === 'buttons'" class="py-10">
      <h2 class="mb-2">icon btn</h2>
      <div class="d-flex align-center mt-2" style="gap: 12px">
        <v-btn color="darkgrey" prepend-icon="mdi-check-circle" append-icon="mdi-account-circle">
          <template v-slot:prepend>
            <v-icon color="white"></v-icon>
          </template>
          text
          <template v-slot:append>
            <v-icon color="white"></v-icon>
          </template>
        </v-btn>

        <v-btn append-icon="mdi-trash-can-outline" size="small" style="width: 160px" class="custom-btn-icon">
          VIP 룸
          <template v-slot:append>
            <v-icon color="white"></v-icon>
          </template>
        </v-btn>

        <v-btn color="secondary" append-icon="mdi-plus" size="small" style="width: 160px" class="custom-btn-icon">
          객실추가
          <template v-slot:append>
            <v-icon color="white"></v-icon>
          </template>
        </v-btn>

        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
          <v-icon size="x-small" color="white">mdi-plus</v-icon>
        </v-btn>
        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
          <v-icon size="x-small" color="white">mdi-minus</v-icon>
        </v-btn>
        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
          <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
        </v-btn>
        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
          <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
        </v-btn>
        <v-btn color="darkgrey" size="small" rounded="xl" class="pa-0">
          <v-icon color="white">mdi-close-thick</v-icon>
        </v-btn>
        <v-btn color="darkgrey" size="small" rounded="xl" class="pa-0">
          <v-icon color="white">mdi-pin</v-icon>
        </v-btn>

        <v-btn color="grey" size="small" style="min-width: 80px">취소</v-btn>

        <v-btn variant="outlined" color="secondary" prepend-icon="mdi-plus" size="small" style="min-width: 80px">
          <template v-slot:prepend>
            <v-icon></v-icon>
          </template>
          구독추가
        </v-btn>
      </div>
      <h2 class="mt-10">primary</h2>
      <div class="d-flex align-center mt-2" style="gap: 12px">
        <v-btn color="primary" size="x-small" style="min-width: 150px">x-small 20</v-btn>
        <v-btn color="primary" size="small" style="min-width: 150px">small 28</v-btn>
        <v-btn color="primary" style="min-width: 150px">regular 36</v-btn>
        <v-btn color="primary" size="large" style="min-width: 150px">large 40</v-btn>
        <v-btn color="primary" size="x-large" style="min-width: 150px">x-large 60</v-btn>
      </div>
      <h2 class="mt-10">secondary</h2>
      <div class="d-flex align-center mt-2" style="gap: 12px">
        <v-btn color="secondary" size="x-small" style="min-width: 150px">x-small</v-btn>
        <v-btn color="secondary" size="small" style="min-width: 150px">small</v-btn>
        <v-btn color="secondary" style="min-width: 150px">regular</v-btn>
        <v-btn color="secondary" size="large" style="min-width: 150px">large</v-btn>
        <v-btn color="secondary" size="x-large" style="min-width: 150px">x-large</v-btn>
      </div>
    </div>

    <!-- popup -->
    <div v-if="tab === 'popup'" class="py-10">
      <h2>popup</h2>

      <v-btn color="primary" class="my-10" @click="dialog = true">open popup</v-btn>
      <!-- popup -->
      <v-dialog v-model="dialog" width="auto">
        <div class="popup size-md">
          <v-card>
            <v-card-title class="d-flex align-center">
              <span class="chip-bi">BI</span>
              <h2 class="title mx-auto">환경설정</h2>
              <div class="btns d-flex align-center">
                <v-btn color="white" size="small" rounded="xl" class="pa-0" @click="dialog = false">
                  <v-icon size="large" color="darkgrey">mdi-close-thick</v-icon>
                </v-btn>
              </div>
            </v-card-title>
            <v-card-text>popup-content</v-card-text>
            <div class="popup-footer">
              <div class="btns">
                <v-btn color="darkgrey" size="large" style="min-width: 150px">닫기</v-btn>
                <v-btn color="primary" size="large" style="min-width: 150px">저장</v-btn>
              </div>
            </div>
          </v-card>
        </div>
      </v-dialog>
      <!-- //popup -->

      <!-- popup -->
      <div class="popup size-md">
        <v-card>
          <!-- top -->
          <v-card-title class="d-flex align-center">
            <span class="chip-bi">BI</span>
            <h2 class="title mx-auto">환경설정</h2>
            <div class="btns d-flex align-center">
              <v-btn color="white" size="small" rounded="xl" class="pa-0 mr-2">
                <v-icon size="large" color="darkgrey">mdi-pin</v-icon>
              </v-btn>
              <v-btn color="white" size="small" rounded="xl" class="pa-0">
                <v-icon size="large" color="darkgrey">mdi-close-thick</v-icon>
              </v-btn>
            </div>
          </v-card-title>
          <!-- //top -->
          <!-- body -->
          <v-card-text class="pa-0">
            <!-- tabs -->
            <!-- <ul class="tabs">
              <li v-for="item in tabsItem" :key="item" :value="item">
                <v-btn v-if="item === '구독관리'" color="white" style="width: 80px; height: 76px !important; position: absolute" @click="test">
                  {{ item }}
                </v-btn>
                <v-btn v-else color="white" @click="test">
                  {{ item }}
                </v-btn>
              </li>
            </ul> -->
            <v-item-group v-model="setting" class="tabs">
              <div v-for="item in tabsItem" :key="item" :value="item">
                <v-btn
                  v-if="item === '구독관리'"
                  color="white"
                  style="width: 80px; height: 76px !important; position: absolute"
                  @click="toggle(item)"
                  :class="setting === item ? 'active' : ''"
                >
                  {{ item }}
                </v-btn>
                <v-btn v-else color="white" @click="toggle(item)" :class="setting === item ? 'active' : ''">
                  {{ item }}
                </v-btn>
              </div>
            </v-item-group>
            <!-- //tabs -->
            <!-- tab-apanel -->
            <div class="tab-apanel" v-if="setting === '요금설정'">
              <h2>요금설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '운영규칙 설정'">
              <h2>운영규칙 설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '입실시간 옵션'">
              <h2>입실시간 옵션</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '무인판매 설정'">
              <h2>무인판매 설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '예약설정'">
              <h2>예약설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '포인트 설정'">
              <h2>포인트 설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '잠금 설정'">
              <h2>잠금 설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '냉/난방 설정'">
              <h2>냉/난방 설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '구독관리'">
              <h2>구독관리</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '화면설정'">
              <h2>화면설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '음성설정'">
              <h2>음성설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '전원설정'">
              <h2>전원설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '알림설정'">
              <h2>알림설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === 'PMS 설정'">
              <h2>PMS 설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '도어락 설정'">
              <h2>도어락 설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '데이터 관리'">
              <h2>데이터 관리</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '직원관리'">
              <h2>직원관리</h2>
            </div>
            <!-- //tab-apanel -->
          </v-card-text>
          <!-- //body -->
          <!-- footer -->
          <div class="popup-footer">
            <div class="btns">
              <v-btn color="darkgrey" size="large" style="min-width: 150px">닫기</v-btn>
              <v-btn color="primary" size="large" style="min-width: 150px">저장</v-btn>
            </div>
          </div>
          <!-- //footer -->
        </v-card>
      </div>
      <!-- //popup -->
    </div>

    <!-- form -->
    <div v-if="tab === 'form'" class="py-10">
      <h2 class="mb-2">form</h2>
      <!-- field-set -->
      <fieldset class="field-set">
        <h3 class="field-title mb-2">QR코드 키 발급</h3>
        <div class="field-box">
          <v-radio-group hide-details density="compact" inline>
            <v-radio color="secondary" label="현금" value="현금"></v-radio>
            <v-radio color="secondary" label="카드" value="카드"></v-radio>
          </v-radio-group>
        </div>
      </fieldset>
      <fieldset class="field-set">
        <h3 class="field-title mb-2">객실 이력 표시 설정</h3>
        <div class="field-box">
          <v-checkbox hide-details density="compact" color="secondary" label="전원상태"></v-checkbox>
          <v-checkbox hide-details density="compact" color="secondary" label="통신상태"></v-checkbox>
          <v-checkbox hide-details density="compact" color="secondary" label="온도상태"></v-checkbox>
          <v-checkbox hide-details density="compact" color="secondary" label="차량상태"></v-checkbox>
        </div>
      </fieldset>
      <fieldset class="field-set">
        <h3 class="field-title mb-2">레이아웃 설정</h3>
        <div class="field-box">
          <label class="label">좌측메뉴 넓이</label>
          <div class="field">
            <div class="input-counter" style="width: 120px">
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-minus</v-icon>
              </v-btn>
              <input type="text" value="11" />
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-plus</v-icon>
              </v-btn>
            </div>
            <div class="ml-2">분 후 문구 숨김 <span class="color-primary">(※0분 이면 계속 표시)</span></div>
            <div class="ml-2">분 후 문구 숨김 <span class="color-secondary">(※0분 이면 계속 표시)</span></div>
          </div>
        </div>
      </fieldset>
      <fieldset class="field-set">
        <h3 class="field-title mb-2">레이아웃 설정</h3>
        <v-table>
          <colgroup>
            <col style="width: 360px" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th class="color-primary">* 타입별 / 요일별 / 시간별 추가 요금을 설정합니다.</th>
              <td><v-btn color="darkgrey" size="small" class="w-100">설정하기</v-btn></td>
            </tr>
          </tbody>
        </v-table>
      </fieldset>
      <fieldset class="field-set">
        <h3 class="field-title mb-2">글자크기 설정</h3>
        <v-table>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th class="text-center">기본설정</th>
              <td>
                <div class="input-counter" style="width: 120px">
                  <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                    <v-icon size="x-small" color="white">mdi-minus</v-icon>
                  </v-btn>
                  <input type="text" value="14" />
                  <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                    <v-icon size="x-small" color="white">mdi-plus</v-icon>
                  </v-btn>
                </div>
              </td>
              <th class="text-center">좌측메뉴</th>
              <td>
                <div class="input-counter" style="width: 120px">
                  <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                    <v-icon size="x-small" color="white">mdi-minus</v-icon>
                  </v-btn>
                  <input type="text" value="14" />
                  <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                    <v-icon size="x-small" color="white">mdi-plus</v-icon>
                  </v-btn>
                </div>
              </td>
              <th class="text-center">체크인 팝업</th>
              <td>
                <div class="input-counter" style="width: 120px">
                  <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                    <v-icon size="x-small" color="white">mdi-minus</v-icon>
                  </v-btn>
                  <input type="text" value="14" />
                  <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                    <v-icon size="x-small" color="white">mdi-plus</v-icon>
                  </v-btn>
                </div>
              </td>
              <th class="text-center">객실명</th>
              <td>
                <div class="input-counter" style="width: 120px">
                  <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                    <v-icon size="x-small" color="white">mdi-minus</v-icon>
                  </v-btn>
                  <input type="text" value="14" />
                  <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                    <v-icon size="x-small" color="white">mdi-plus</v-icon>
                  </v-btn>
                </div>
              </td>
            </tr>
          </tbody>
        </v-table>
      </fieldset>
      <fieldset class="field-set">
        <h3 class="field-title mb-2">로그인 정보</h3>
        <v-table>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th class="text-center">아이디</th>
              <td>
                <input type="text" class="input" />
              </td>
              <th class="text-center">비밀번호</th>
              <td>
                <input type="password" class="input" />
              </td>
            </tr>
          </tbody>
        </v-table>
      </fieldset>
      <fieldset class="field-set">
        <h3 class="field-title mb-2">사용자 전화번호 (USER ID)</h3>
        <div class="field-box">
          <input type="text" class="input" />
        </div>
      </fieldset>
      <fieldset class="field-set">
        <h3 class="title-sub mb-4">객실정보 변경</h3>
        <v-table>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th class="text-center">아이디</th>
              <td>
                <v-select 
                  :items="['select1', 'select2', 'select3', 'select4', 'select5']"
                  value="select2"
                  density="compact"
                  hide-details
                  variant="outlined">
                </v-select>
              </td>
              <th class="text-center">검색</th>
              <td>
                <div class="input-search">
                  <input type="text" value="14" />
                  <v-btn density="compact" size="small" icon="mdi-magnify"></v-btn>
                </div>
              </td>
            </tr>
          </tbody>
        </v-table>
      </fieldset>
    </div>

    <!-- font -->
    <div v-if="tab === 'font'" class="py-10">
      <h2 class="mb-2">font</h2>
      <div class="title">title 18px</div>
      <div class="title color-primary">title 18px color-primary</div>
      <div class="title color-secondary">title 18px color-secondary</div>
      <v-spacer class="my-5"></v-spacer>
      <div class="title-sub">title-sub 14px</div>
      <div class="title-sub">조회일자</div>
      <div class="title-sub">필터옵션</div>
      <v-spacer class="my-5"></v-spacer>
      <div class="body-1">body-1 본문 14px</div>
      <v-spacer class="my-5"></v-spacer>
      <div class="bbs-title d-flex align-center">
        <span class="text">'야놀자 라이브' 조회수 10만 돌파</span>
        <span class="date">12/24/10:36</span>
      </div>
    </div>

    <!-- chart -->
    <div v-if="tab === 'chart'" class="py-10">
      <h2>chart</h2>
      <highcharts :options="chartOptions" />
    </div>

    <!-- table -->
    <div v-if="tab === 'table'" class="py-10">
      <h2 class="mb-2">table</h2>
      <!-- table -->
      <v-table>
        <colgroup>
          <col style="width: 80px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th class="text-center">th</th>
            <td>td</td>
          </tr>
          <tr>
            <th class="text-center">th</th>
            <td>td</td>
          </tr>
        </tbody>
      </v-table>
      <!-- //table -->

      <v-spacer class="my-5"></v-spacer>

      <!-- table -->
      <v-table>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>td</td>
            <td>td</td>
            <td>td</td>
            <td>td</td>
            <td>td</td>
          </tr>
        </tbody>
      </v-table>
      <!-- //table -->

      <v-spacer class="my-5"></v-spacer>

      <!-- table -->
      <v-table class="dense-dark">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </thead>
        <tbody>
          <tr class="active">
            <td>td</td>
            <td>td</td>
            <td>td</td>
            <td>td</td>
            <td>td</td>
          </tr>
          <tr>
            <td>td</td>
            <td>td</td>
            <td>td</td>
            <td>td</td>
            <td>td</td>
          </tr>
          <tr>
            <td>td</td>
            <td>td</td>
            <td>td</td>
            <td>td</td>
            <td>td</td>
          </tr>
        </tbody>
      </v-table>
      <!-- //table -->
    </div>

    <!-- color -->
    <div v-if="tab === 'color'" class="py-10">
      <h2>color</h2>
    </div>

    <!-- icon -->
    <div v-if="tab === 'icon'" class="py-10">
      <h2>icon</h2>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "guideList",
  data() {
    return {
      // highcharts
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "Weekly Average Chart",
        },
        subtitle: {
          text: "highchart sample subtitle",
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
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
      // tab
      tab: "form",
      setting: "요금설정",
      dialog: false,
      tabsItem: [
        "요금설정",
        "운영규칙 설정",
        "입실시간 옵션",
        "무인판매 설정",
        "예약설정",
        "포인트 설정",
        "잠금 설정",
        "냉/난방 설정",
        "구독관리",
        "화면설정",
        "음성설정",
        "전원설정",
        "알림설정",
        "PMS 설정",
        "도어락 설정",
        "데이터 관리",
        "직원관리",
      ],
    };
  },
  methods: {
    toggle(val) {
      this.setting = val;
    },
  },
};
</script>

<style lang="scss"></style>
