<template>
  <div class="admin_login">
    <h1>관리자 로그인</h1>
    <div class="form">
      <p>아이디</p>
      <input
        v-model="account.id"
        type="text"
        placeholder="아이디를 입력하세요"
      />
    </div>
    <div class="form">
      <p>비밀번호</p>
      <input
        v-model="account.password"
        type="password"
        placeholder="비밀번호를 입력하세요"
        @keyup.enter="login()"
      />
    </div>
    <button class="login_btn" @click="login()">로그인</button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "admin",
});

const router = useRouter();
const account = ref({ id: "", password: "" });

const login = () => {
  if (
    account.value.id === "admin" &&
    account.value.password === "admin12356478"
  )
    router.push("/admin");
};
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/admin/login/styles.scss";
</style>
