<template>
    <header>
        <router-link :to="'/'"><img class="header_logo" src="@/assets/public/logo.png"></router-link>
        <router-link class="header_menu" v-for="i, n in headerMenuList" :key="n" :to="i.route">{{i.name}}</router-link>
    </header>
</template>

<script>
import headerMenuList from "@/assets/public/headerMenuList.js"
export default {
    name: 'Header',
    setup(){
        return {headerMenuList};
    }
}
</script>

<style lang="scss" src="@/assets/styles/Header/style.scss"></style>