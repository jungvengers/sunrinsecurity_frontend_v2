<template>
    <div class="background_img">
        <transition name="main_panel">
            <div class="main_panel" v-if="show">
                <hr />
                <h1 class="main_title font_regular">선린인터넷고등학교<br>정보보호과</h1>
                <hr />
            </div>
        </transition>
    </div>
</template>

<script>
import {ref} from "vue"

export default {
    name: "IndexPage",
    setup(){
        let show = ref(false);
        return {show};
    },
    mounted(){
        this.show = true;
    }
}
</script>

<style lang="scss" src="@/assets/styles/main/style.scss"></style>