<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {
        }
    },
    components: {
        RouterLink,
    }
}
</script>

<template>
    <div class="headerShow">
        <RouterLink to="/">Home</RouterLink>
        <p></p>
        <RouterLink to="/VtestAndVmodel">VtestAndVmodel</RouterLink>
    </div>
</template>

    <style scoped lang="scss">
        .headerShow {
            width: 100%;
            height: 100%;
            background-color: pink;
            text-align: center;
        }
    </style>
