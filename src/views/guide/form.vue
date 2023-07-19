<template>
  <h2 class="mb-2">구분 hr</h2>
  <v-spacer></v-spacer>
  <hr class="my-5">
  <hr class="my-5">
  <hr class="my-5">

  <h2 class="mb-2">textarea</h2>
  <textarea class="textarea" style="height: 80px;"></textarea>

  <h2 class="mb-2 mt-10">input</h2>
  <input type="text" class="input sm" value="input sm" />
  <br />
  <br />
  <input type="text" class="input" value="input" />
  <br />
  <br />
  <input type="text" class="input md" value="input md" />
  <br />
  <br />

  <h2 class="mb-2 mt-10">field-set</h2>
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
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="14" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
              <div class="input-counter ml-2" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="14" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
              <span class="ml-2">전 부터 입실 가능</span>
              <span class="ml-5 color-secondary">(2022년 04월 05일 14시 25분 이내 표시됩니다.)</span>
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
            <!-- <select class="select-custom">
            <option value="">층 선택</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select> -->
            <v-select :items="['select1', 'select2', 'select3', 'select4', 'select5']" value="select1" density="compact" hide-details style="width: 200px">
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
        <tr>
          <th class="text-center">아이디</th>
          <td>
            <v-select :items="['select1', 'select2', 'select3', 'select4', 'select5']" value="select2" density="compact" class="custom-select" hide-details>
            </v-select>
          </td>
          <th class="text-center">검색</th>
          <td>
            <v-select :items="['foo', 'bar', 'fizz', 'buzz', 'fizzbuzz', 'foobar']" value="foo" density="compact" hide-details>
              <template v-slot:selection="{ item }">
                <span>{{ item.title }}</span>
              </template>
            </v-select>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>
  <fieldset class="field-set d-flex w-100" style="gap: 8px">
    <div class="field-inner">
      <h3 class="field-title mb-2">도어 음성 설정</h3>
      <div class="field-box">
        <v-checkbox hide-details density="compact" color="secondary" label="객실문 닫힘"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="객실문 열림"></v-checkbox>
      </div>
    </div>
    <div class="field-inner">
      <h3 class="field-title mb-2">청소 음성 설정</h3>
      <div class="field-box">
        <v-checkbox hide-details density="compact" color="secondary" label="청소요청"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="청소완료"></v-checkbox>
      </div>
    </div>
    <div class="field-inner">
      <h3 class="field-title mb-2">전원 음성 설정</h3>
      <div class="field-box">
        <v-checkbox hide-details density="compact" color="secondary" label="전원차단"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="전원공급"></v-checkbox>
      </div>
    </div>
    <div class="field-inner">
      <h3 class="field-title mb-2">차량호출 음성 설정</h3>
      <div class="field-box">
        <v-checkbox hide-details density="compact" color="secondary" label="배차요청"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="배차완료"></v-checkbox>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "GuideForm",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
