<script setup>
import InformationComponent from "../components/InformationComponent.vue";
import PlanComponent from '../components/PlanComponent.vue';
import PlanToggle from '../components/PlanToggle.vue';
</script>

<template>
  <div class="plan">
    <div class="container row">
      <InformationComponent informationTitle="Select your plan" informationText="You have the option of monthly or yearly billing"/>
      <PlanComponent/>
      <PlanToggle/>
    </div>
  </div>
</template>

<style lang="scss">
</style>