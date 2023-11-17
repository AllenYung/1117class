<script>
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

    }
  }
}
</script>

<template>
  <h1>{{ this.title }}</h1>
  <!-- V-text -->
  <h2>V-text</h2>
  <p v-text="'this is a page'"></p>
  <p v-text="info"></p>
  <p v-text="'info' + title"></p>
  <p v-text="`info ${title}`"></p>
  <p>{{ this.info }}</p>

  <br>
  <!-- V-model -->
  <h2>V-model</h2>
  <input type="text" v-model="cool">
  <p>{{ this.cool }}</p>
</template>

<style scoped lang="scss"></style>