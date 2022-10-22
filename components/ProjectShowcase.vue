<template>
  <div class="panel">
      <div class="showcase_background">
        <div class="showcase_club">
            <a v-on:click="select" :class="[selected === 'ALL' ? 'showcase_club_item_selected' : 'showcase_club_item']">ALL</a>
            <a v-on:click="select" :class="[selected === 'LAYER7' ? 'showcase_club_item_selected' : 'showcase_club_item']">LAYER7</a>
            <a v-on:click="select" :class="[selected === 'EMOTION' ? 'showcase_club_item_selected' : 'showcase_club_item']">EMOTION</a>
            <a v-on:click="select" :class="[selected === 'UNIFOX' ? 'showcase_club_item_selected' : 'showcase_club_item']">UNIFOX</a>
            <a v-on:click="select" :class="[selected === 'NEFUS' ? 'showcase_club_item_selected' : 'showcase_club_item']">NEFUS</a>
            <a v-on:click="select" :class="[selected === 'TEAMLOG' ? 'showcase_club_item_selected' : 'showcase_club_item']">TEAMLOG</a>
        </div>

        <hr class="showcase_hr" />
    </div>
  </div>
</template>

<script>
import {ref} from "vue"

export default {
    name: "ProjectShowcase",
    setup(){
        let selected = ref(false);
        return {selected};
    },
    methods: {
        select(e){
            this.selected = e.target.innerText;
        }
    },
    mounted(){
        this.selected = 'ALL'; 
    }
}
</script>

<style lang="scss" src="@/assets/styles/project/ProjectShowcase/style.scss"></style>