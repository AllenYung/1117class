import { defineStore } from "pinia";

export default defineStore("counter", {
    //data(){}
    state() {
        return {
            location: 1,
        }

    },
    //computed
    getters: {
        locationInfo(state) {
            return `現在位置:${this.location}`
        }

    },
    //methods
    actions: {
        getLocation() {
            console.log(this.location)
        },
        setLocation(num) {
            this.location = num;
        },
        getWeather(){}
    }
})