<template>
    <div class="panel">
        <div class="notice_card">
            <h1 class="notice_title">학과 소식</h1>
        
            <hr class="notice_hr" />
            
            <div class="notice_box">
                
                <div class="notice_item" v-for="(i, n) in 20" :key="n" :style="{animationDelay: n*100+'ms'}">
                    <div class="notice_item_title">
                        <h1>안녕하세요</h1>
                        <p>김성빈</p>
                    </div>
                    <div class="notice_item_content">
                        <p>테스트</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NoticePage",
    setup(){
    }
}
</script>

<style lang="scss" src="@/assets/styles/notice/NoticePage/style.scss"></style>