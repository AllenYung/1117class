<script>
export default {
    //語法糖
    data() {
        return {
            arr: [1, 2, 3,4,5,6,7,8,9,],
            arr2: [
                {
                    name: "雪碧",
                    type: "cat",
                    age: 2
                },
                {
                    name: "可樂",
                    type: "long",
                    age: 6
                },
                {
                    name: "芬達",
                    type: "short",
                    age: 8
                },
            ]
        }
    }
}
</script>

<template>
    <h3>V-for</h3>
    <!-- arr -->
    <p v-for="item in arr">{{ item }}</p>
    <p v-for="(item, index) in arr">{{ index }}</p>

    <!-- arr2 -->
    <ol v-for="element in arr2">
        <li>{{ element.name }}</li>
        <li>{{ element.type }}</li>
        <li>{{ element.age }}</li>
        <p>==========</p>
    </ol>

    <div class="big">
        <div class="t1"></div>
        <div class="t2"></div>
        <div class="left"></div>
        <div class="title">Title</div>
        <div class="tit2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, iste?</div>
        <div class="nine">
            <div class="tal" v-for="item in arr">
                <div class="color"></div>
                <div class="pou">Product name</div>
            </div>
        </div>
        <div class="bottom"></div>
    </div>
</template>

<style scoped lang="scss">
.big {
    width: 754px;
    height: 1271px;
    position: relative;

    .t1 {
        width: 100%;
        height: 101px;
        background-color: #86DDD3;

    }

    .t2 {
        width: 100%;
        height: 264px;
        background-color: #CCF8F2;

    }

    .left {
        width: 202px;
        height: 762px;
        background-color: #86DDD2;
        position: absolute;
        top: 393px;
        left: 0;
    }

    .title {
        width: 83px;
        height: 48px;
        font-size: 40px;
        position: absolute;
        top: 412px;
        left: 232px;

    }

    .tit2 {
        width: 375px;
        height: 39px;
        font-size: 14px;
        position: absolute;
        top: 417px;
        right: 31px;

    }
.nine{
    width: 500px;
    height: 140px;
    position: absolute;
    right: 0;
    top: 501px;;
    display: flex;
    justify-content:space-around;
    align-items: space-around;
    flex-wrap: wrap;
    box-sizing: border-box;
    
    .tal {
        width: 138px;
        height: 166px;
        margin-bottom: 50px;
        margin-right: 20px;
        .color{
            width: 138px;
            height: 135px;
            background-color: #86DDD2;
        }
        .pou{
            font-size: 20px;
        }
    }
}
    .bottom {
        width: 100%;
        height: 86px;
        position: absolute;
        bottom: 0;
        background-color: #86DDD3;
    }
}</style>