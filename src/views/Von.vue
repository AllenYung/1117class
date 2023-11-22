<script>
export default {
    data() {
        return {
            title: "",
            text: "",
        }
    },
    methods: {
        print() {
            console.log("Zz")
            this.title = "zz";
        },
        fly() {
            console.log("fly~")
        },
        write() {
            console.log(this.text)
            //跳出通知
            alert("xxxx")
        },
        //切換頁面
        goOtherWay() {
            this.$router.push('/vfor')
        }
    }

}
</script>

<template>
    <h1>V-on</h1>
    <!-- 在button裡面設置點擊事件 點一下就會觸發事件print -->
    <button type="button" v-on:click="print(
    )">Zz</button>
    <!-- @click == v-on:click 意思一樣 -->
    <button type="button" @click="print(
    )">@Zz</button>
    <p>{{ this.title }}</p>
    <!-- @change 當數值改變時觸發事件 fly  -->
    <select name="" id="" @change="fly()">
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
    <!-- 會將我輸入的值回傳到主控台 並且跳出alert XXX的通知 -->
    <input type="text" v-model="this.text" @keydown.enter="write()">
    <!-- 當我按下button 會轉換到其他頁面 -->
    <button type="button" @click="goOtherWay"><i class="fa-solid fa-umbrella"></i></button>
    <!-- 在div.cool裡面按一下滑鼠就會使用方法fly(印出fly~) -->
    <div class="cool" @click="fly()"></div>
    
</template>

<style scoped lang="scss">
.cool {
    width: 500px;
    height: 500px;
    border: 1px solid black;
}


</style>