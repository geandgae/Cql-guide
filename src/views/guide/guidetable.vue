<template>
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
      <tr class="newapp">
        <td>td</td>
        <td>td</td>
        <td>td</td>
        <td>td</td>
        <td>td</td>
      </tr>
    </tbody>
  </v-table>
  <!-- //table -->

  <!-- pagination -->
  <div class="text-center mt-3">
    <v-pagination
      v-model="page"
      :length="15"
      :total-visible="7"
    ></v-pagination>
  </div>
  <!-- /pagination -->
</template>

<script>
export default {
  name: "GuideTable",
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style lang="scss" scoped></style>
