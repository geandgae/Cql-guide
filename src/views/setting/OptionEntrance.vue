<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2">입실 시간 옵션</h3>
    <!-- table -->
    <v-table fixed-header height="248" class="overflow-y-auto text-center dense-dark mt-2">
      <colgroup>
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>선택</th>
          <th>옵션명</th>
          <th>타입</th>
          <th>시작</th>
          <th>종료</th>
          <th>적용시간</th>
          <th>추가/할인</th>
          <th>객실타입</th>
          <th>무인</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="" value=""></v-radio>
            </v-radio-group>
          </td>
          <td>무한대실</td>
          <td>대실</td>
          <td>0</td>
          <td>23</td>
          <td class="color-aqua">21시에 퇴실</td>
          <td class="color-secondary">20,000원</td>
          <td>VIP룸 / 스위트룸</td>
          <td>판매</td>
          <td>
            <v-btn color="grey" size="small" style="min-width: 50px; height: 20px;">삭제</v-btn>
          </td>
        </tr>
        <tr class="active">
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="" value=""></v-radio>
            </v-radio-group>
          </td>
          <td>영화관람형</td>
          <td>대실</td>
          <td>0</td>
          <td>23</td>
          <td class="color-pink">5시간 이용</td>
          <td class="color-secondary">10,000원</td>
          <td>VIP룸 / 스위트룸</td>
          <td>판매</td>
          <td>
            <v-btn color="secondary" size="small" style="min-width: 50px; height: 20px;">삭제</v-btn>
          </td>
        </tr>
        <tr v-for="item in 20" :key="item">
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="" value=""></v-radio>
            </v-radio-group>
          </td>
          <td>이른퇴실</td>
          <td>대실</td>
          <td>0</td>
          <td>23</td>
          <td class="color-aqua">6시에 퇴실</td>
          <td class="color-secondary">20,000원</td>
          <td>VIP룸 / 스위트룸</td>
          <td>판매</td>
          <td>
            <v-btn color="grey" size="small" style="min-width: 50px; height: 20px;">삭제</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <!-- //table -->
  </fieldset>

  <fieldset class="field-set">
    <h3 class="field-title mb-2">옵션 시간 추가/변경<span class="color-secondary ml-2">* [옵션시작] ~ [옵션종료] 시간내에만 옵션 적용이
        가능합니다.</span></h3>
    <v-table>
      <colgroup>
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      <tbody>
        <tr>
          <th class="text-center">옵션명</th>
          <td>
            <input type="text" class="input" />
          </td>
          <th class="text-center">투숙형태</th>
          <td>
            <v-select :items="['select1', '대실', 'select3', 'select4', 'select5']" value="대실" density="compact"
              class="custom-select" hide-details>
            </v-select>
          </td>
        </tr>
        <tr>
          <th class="text-center">옵션시작</th>
          <td>
            <div class="input-counter" style="width: 140px">
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
              </v-btn>
              <input type="text" value="0시" />
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
              </v-btn>
            </div>
          </td>
          <th class="text-center">옵션종료</th>
          <td>
            <div class="input-counter" style="width: 140px">
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
              </v-btn>
              <input type="text" value="23시" />
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
              </v-btn>
            </div>
          </td>
        </tr>
        <tr>
          <th class="text-center">적용기준</th>
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="이용시간 기준" value="이용시간 기준"></v-radio>
              <v-radio color="secondary" label="퇴실시간 기준" value="퇴실시간 기준"></v-radio>
            </v-radio-group>
          </td>
          <th class="text-center">퇴실시간</th>
          <td>
            <div class="input-counter" style="width: 140px">
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
              </v-btn>
              <input type="text" value="21시" />
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
              </v-btn>
            </div>
          </td>
        </tr>
        <tr>
          <th class="text-center">추가/할인</th>
          <td>
            <div class="input-counter" style="width: 140px">
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-minus</v-icon>
              </v-btn>
              <input type="text" value="15,000원" />
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-plus</v-icon>
              </v-btn>
            </div>
          </td>
          <th class="text-center">적용 객실타입</th>
          <td>
            <div class="d-flex align-center">
              <v-checkbox hide-details density="compact" color="secondary" label="VIP룸"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="스위트룸"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="일반실"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="커플룸"></v-checkbox>
            </div>
          </td>
        </tr>
        <tr>
          <th class="text-center">적용기준</th>
          <td colspan="3">
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="사용" value="사용"></v-radio>
              <v-radio color="secondary" label="사용안함" value="사용안함"></v-radio>
            </v-radio-group>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>
  <!-- //field-set -->
</template>

<script>
export default {
  name: "OptionEntrance",
  data() {
    return {
    };
  },
};
</script>

<style lang="scss"></style>
