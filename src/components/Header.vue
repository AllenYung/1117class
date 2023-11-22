<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapState, mapActions } from 'pinia'
import counter from '../stores/conter'
export default {
    data() {
        return {
        }
    },
    components: {
        RouterLink,
    },
    computed:{
        ...mapState(counter, ["location","locationInfo"])
    }
}
</script>

<template>
    <div class="headerShow">
        <RouterLink to="/">Home</RouterLink>
        <p></p>
        <RouterLink to="/VtestAndVmodel">VtestAndVmodel</RouterLink>
        <p></p>
        <RouterLink to="/vfor">vfor</RouterLink>
        <p></p>
        <RouterLink to="/Von">Von</RouterLink>
    </div>
    <p></p>
    <p>{{ location }}</p>
    <p>{{ locationInfo }}</p>
</template>

    <style scoped lang="scss">
        .headerShow {
            width: 100%;
            height: 100%;
            background-color: pink;
            display: flex;
        }
    </style>
