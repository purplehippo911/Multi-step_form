<script setup>
import InformationComponent from "../components/InformationComponent.vue";
import MainForm from "../components/MainForm.vue";
</script>

<template>
  <div class="main-view">
    <div class="container row">
      <InformationComponent informationTitle="Personal info" informationText="Please provide your name, email address, and phone number."/>
      <MainForm/>
    </div>
  </div>
</template>

<style lang="scss">
</style>
