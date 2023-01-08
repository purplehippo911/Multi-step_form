<script setup>
import HeroComponent from '../components/HeroComponent.vue';
import AddonsOptions from '../components/AddonsOptions.vue';
</script>

<template>
  <section class="add-ons-wrapper">
    <div class="container row">
        <HeroComponent informationTitle="Pick add-ons" informationText="Add-ons help enhance your gaming experience."/>
        <AddonsOptions/>
    </div>
  </section>
</template>

<style scoped lang="scss">
</style>