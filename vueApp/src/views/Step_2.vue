<script setup>
import PlanComponent from '../components/PlanComponent.vue';
import SubscriptionToggle from '../components/SubscriptionToggle.vue';
</script>

<template>
  <div class="plan">

    <PlanComponent/>
    <SubscriptionToggle/>
  </div>
  </template>

<style lang="scss">

.plan {
  .plan-component {
    .plans-wrapper {
      display:flex;
      flex-direction:column;
      gap:2rem;
      .plan__box {
        width:100%;
        padding:1.2rem;
        background:$White;
        border:1px solid $Pastelblue;
        display:grid;
        grid-template-columns: repeat(2, minmax(100px, 1fr));
        align-items:center;
        justify-items:start;
        cursor:pointer;
        &:hover, &:focus, &:active {
          background:$Magnolia;
          border:1px solid $Marineblue;
        }
      }
    }
  }
}

.slider {
  align-self: center;
  width: 30%;
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