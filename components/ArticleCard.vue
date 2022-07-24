<template>
    <div class="panel">
        <div class="article_card">
            <h1 class="article_content_title">학과 소식</h1>

            <div class="article_wrapper_title">
                <hr class="article_content_hr" />
                <button class="article_content_write" >작성하기</button> 
            </div>
            
            <div class="article_content_box">


                <li class="article_item">
                    <div class="article_item_wrapper">
                        <p class="article_item_type article_item_notice" :class="{}">공지</p>
                        <p class="article_item_title">안녕하세요</p>
                    </div>
                    <div class="article_item_wrapper">
                        <p class="article_item_writer">김성빈</p>
                        <p class="article_item_date">2022-07-23</p>
                    </div>
                </li>

                <li class="article_item">
                    <div class="article_item_wrapper">
                        <p class="article_item_type article_item_notice" :class="{}">공지</p>
                        <p class="article_item_title">Hi~~</p>
                    </div>
                    <div class="article_item_wrapper">
                        <p class="article_item_writer">박금혁</p>
                        <p class="article_item_date">2022-06-17</p>
                    </div>
                </li>

                <li class="article_item">
                    <div class="article_item_wrapper">
                        <p class="article_item_type" :class="{}">1</p>
                        <p class="article_item_title">안녕하세요</p>
                    </div>
                    <div class="article_item_wrapper">
                        <p class="article_item_writer">김성빈</p>
                        <p class="article_item_date">2022-07-23</p>
                    </div>
                </li>

                <li class="article_item">
                    <div class="article_item_wrapper">
                        <p class="article_item_type" :class="{}">2</p>
                        <p class="article_item_title">안녕하세요</p>
                    </div>
                    <div class="article_item_wrapper">
                        <p class="article_item_writer">김성빈</p>
                        <p class="article_item_date">2022-07-23</p>
                    </div>
                </li>

                <li class="article_item">
                    <div class="article_item_wrapper">
                        <p class="article_item_type" :class="{}">3</p>
                        <p class="article_item_title">안녕하세요</p>
                    </div>
                    <div class="article_item_wrapper">
                        <p class="article_item_writer">김성빈</p>
                        <p class="article_item_date">2022-07-23</p>
                    </div>
                </li>
                
                <li class="article_item">
                    <div class="article_item_wrapper">
                        <p class="article_item_type" :class="{}">4</p>
                        <p class="article_item_title">안녕하세요</p>
                    </div>
                    <div class="article_item_wrapper">
                        <p class="article_item_writer">김성빈</p>
                        <p class="article_item_date">2022-07-23</p>
                    </div>
                </li>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArticleCard",
    setup(){
    }
}
</script>

<style lang="scss" src="@/assets/styles/notice/ArticleCard/style.scss"></style>