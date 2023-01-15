<script setup>
import HeroComponent from "../components/HeroComponent.vue";
import PlanComponent from '../components/PlanComponent.vue';
import PlanToggle from '../components/PlanToggle.vue';
</script>

<script>
  
</script>

<template>
  <section class="plan">
    <div class="container row">
      <HeroComponent informationTitle="Select your plan" informationText="You have the option of monthly or yearly billing"/>
      <PlanComponent/>
      <PlanToggle/>
    </div>
  </section>
</template>

<style lang="scss">
</style>