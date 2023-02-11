<template>
  <div>
    <editor
      api-key="2jcbz2joi9s0xve80mqmeilcqhjfyn3204335n94uxrftan1"
      :init="{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
        
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import Editor from "@tinymce/tinymce-vue";
</script>

<style lang="scss" scoped>
@import "~~/assets/styles/pages/notice/write/styles.scss";
</style>
