<template>
    <div class="login">
        <div class="login_wrapper">
            <div class="login_box">
                <div class="login_box_title">
                    <h1>선린인터넷고등학교</h1>
                    <h2>정보보호과</h2>
                </div>
                <div class="login_box_form">
                    <form @submit.prevent="login">
                        <div class="login_box_form_input">
                            <input type="text" id="id" v-model="id" placeholder="아이디를 입력하세요.">
                        </div>
                        <div class="login_box_form_input">
                            <input type="password" id="pw" v-model="pw" placeholder="비밀번호를 입력하세요.">
                        </div>
                        <div class="login_box_form_button">
                            <button type="submit">로그인</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "LoginPage",
    setup() {
        let id = ref("");
        let pw = ref("");
        let login = () => {
            // api 연동
            console.log(1)
        };
        return {
            id,
            pw,
            login
        };
    }
}
</script>


<style lang="scss" src="@/assets/styles/login/style.scss"></style>