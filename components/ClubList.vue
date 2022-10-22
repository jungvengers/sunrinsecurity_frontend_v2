<template>
    <div class="panel">
        <div class="clublist_background">
            <div class="clublist_box">

                <nuxt-link :to="{name:'clubinfo-club', params:{club: 'layer7'}}" class="clublist_item" style="animation-delay: 100ms;">
                    <img src="@/static/layer7.png">
                    <p>LAYER7</p>
                </nuxt-link>
                <nuxt-link :to="{name:'clubinfo-club', params:{club: 'unifox'}}" class="clublist_item" style="animation-delay: 200ms;">
                    <img src="@/static/unifox.png">
                    <p>UNIFOX</p>
                </nuxt-link>
                <nuxt-link :to="{name:'clubinfo-club', params:{club: 'emotion'}}" class="clublist_item" style="animation-delay: 300ms;">
                    <img src="@/static/emotion.png">
                    <p>EMOTION</p>
                </nuxt-link>
                <nuxt-link :to="{name:'clubinfo-club', params:{club: 'nefus'}}" class="clublist_item" style="animation-delay: 400ms;">
                    <img src="@/static/nefus.png">
                    <p>NEFUS</p>
                </nuxt-link>
                <nuxt-link :to="{name:'clubinfo-club', params:{club: 'teamlog'}}" class="clublist_item" style="animation-delay: 500ms;">
                    <img src="@/static/teamlog.png">
                    <p>TEAMLOG</p>
                </nuxt-link>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ClubInfo",
}
</script>

<style lang="scss" src="@/assets/styles/clubinfo/ClubList/style.scss"></style>