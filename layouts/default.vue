<template>
    <div id="app">
        <Header />
        <Nuxt />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"

export default {
    components:{
        Header
    },
    setup() {
        
    },
}
</script>

<style src="@/assets/styles/global.css"></style>