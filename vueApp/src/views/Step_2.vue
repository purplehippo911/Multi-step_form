<script setup>
import PlanComponent from '../components/PlanComponent.vue';
import SubscriptionToggle from '../components/SubscriptionToggle.vue';
</script>

<template>
    <PlanComponent/>
    <SubscriptionToggle/>
</template>

<style lang="scss">
.slider {
  align-self: center;
  width: 10%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  .slider__item,
  .slider__numbers {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
  }
  .slider__numbers {
    color: $CoolGray;
    align-self: center;
  }
  .slider__item {
    width: 80%;
    justify-self: center;
    background: $CoolGray;
    padding: 0.1rem;
    border-radius: 20px;
    .slider__ball {
      background: $White;
      width: auto;
      padding: 0.8rem;
      border-radius: 50%;
      transition: 0.5s;
      grid-column: 0;
      box-shadow: -1px -1px $Marineblue;
    }
  }
}
</style>