<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/conter'
export default {
  data() {    //data: function(){}
    return {
      title: "title",
      info: {
        name: "雪碧",
        age: 2,
        type: "波絲",
      },
      cool: "",
      selectText: "",
      lazyText: "",
      trim: "",
      number: "",
      checkBoxText: [],

      radio: "",
    }
  },
  methods:{
    ...mapActions(counter,["getLocation","setLocation"])
  }
}
</script>

<template>
  <button type="button" @click="setLocation('桃園')">BTN1</button>
  <button type="button" @click="setLocation(2)">BTN2</button>
  <h1>{{ this.title }}</h1>
  <!-- V-text -->
  <h2>V-text</h2>
  <p v-text="'this is a page'"></p>
  <p v-text="info"></p>
  <p v-text="'info' + title"></p>
  <p v-text="`info ${title}`"></p>
  <p>{{ this.info }}</p>
  <!-- V-model -->
  <h2>V-model</h2>
  <input type="text" v-model="cool">
  <p>{{ this.cool }}</p>
  <h2>v-model 2</h2>
  <select name="" id="" v-model="selectText">
    <option value="1">1</option>
    <option value="2">2</option>
  </select>

  <p>{{ this.selectText }}</p>

  <!-- lazy,number,trim -->
  <h2>lazy</h2>
  <input type="text" v-model.lazy="lazyText">
  <p>{{ this.lazyText }}</p>
  <h2>number</h2>
  <input type="text" v-model.number="number">
  <p>{{ this.number }}</p>
  <h2>trim</h2>
  <input type="text" v-model.trim="trim">
  <p>{{ this.trim }}</p>
  <!-- checkBox -->
  <label for="">早餐</label>
  <input type="checkbox" v-model="checkBoxText" name="meal" value="bread">
  <label for="">午餐</label>
  <input type="checkbox" v-model="checkBoxText" name="meal" value="lunch">
  <p>{{ this.checkBoxText }}</p>

  <!-- 複選的變數需要為陣列 ，單選綁定的變數列只要一般的就行-->

  <!-- radio -->
  <h2>radio</h2>
  <input type="radio" value="早餐" v-model="radio">
  <label for="早餐">早餐</label>
  <input type="radio" value="午餐" v-model="radio">
  <label for="午餐">午餐</label>
  <input type="radio" value="晚餐" v-model="radio">
  <label for="晚餐">晚餐</label>
  <p>該吃:{{ radio }}</p>
</template>

<style scoped lang="scss"></style>