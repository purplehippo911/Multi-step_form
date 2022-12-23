<script setup>
import PlanComponent from '../components/PlanComponent.vue';
import PlanToggle from '../components/PlanToggle.vue';
</script>

<template>
  <div class="plan">

    <PlanComponent/>
    <PlanToggle/>
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
  .plan-toggler {
    background:$Magnolia;
    .row {
      flex-direction:row;
      align-items:center;
    }

    .container {
      background:inherit;
    }
  }
}

.slider {
  width: 30%;
  .slider__item {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    justify-self: center;
    background: $Marineblue;
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