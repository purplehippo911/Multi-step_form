<script setup>
// importing store
import {usePlanStore} from "../stores/planCounter.js";
import { storeToRefs } from 'pinia';


const planStore = usePlanStore()

// importing funtions
const {toggleOpen} = planStore



</script>

<template>
  <section class="plan-toggler">
    <div class="container row">
      <h3 class="subscription-toggle__plan-title">Monthly</h3>
      
      <div class="slider" @click="toggleOpen">
        <div class="slider__item" @click="toggleOpen">
          <strong class="slider__ball" @click="toggleOpen" ref="slider" aria-checked="false"></strong>
        </div>
      </div>

      <h3 class="subscription-toggle__plan-title">Yearly</h3>
    </div>
  </section>
</template>

<style scoped lang="scss">

.active .slider__ball {
  grid-column:3;
}
.plan-toggler {
    background:$Magnolia;
    padding:2rem;
    .row {
      flex-direction:row;
      align-items:center;
    }

    .container {
      background:inherit;
    }
}

.slider {
  width: 30%;
  transition:0.7s;
  .slider__item {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    justify-self: center;
    background: $Marineblue;
    padding: 0.3rem;
    border-radius: 20px;
    .slider__ball {
      background: $White;
      width: auto;
      padding: 0.7rem;
      border-radius: 50%;
      transition: 0.5s;
      grid-column: 0;
      box-shadow: -1px -1px $Marineblue;
      &:hover {
        transform:scale(1.2);
      }
    }
  }
}
</style>