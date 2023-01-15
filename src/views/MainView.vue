<script setup>
import HeroComponent from "../components/HeroComponent.vue";
import MainForm from "../components/MainForm.vue";
</script>

<template>
  <section class="main-view">
    <div class="container row">
      <HeroComponent informationTitle="Personal info" informationText="Please provide your name, email address, and phone number."/>
      <MainForm/>
    </div>
  </section>
</template>

<style lang="scss">
</style>
