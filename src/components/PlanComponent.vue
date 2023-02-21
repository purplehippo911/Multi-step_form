<script setup>
import { usePlanStore } from '../stores/planCounter';
import { storeToRefs } from 'pinia';

const planStore = usePlanStore();

// const {} = planStore;

const {checkPlan, isMonthly, isYearly} = storeToRefs(planStore);

</script>

<template>
    <section class="plan-component" v-on:waiting="checkPlan">
        <div class="container row">

            <section class="plan__box plan__box--arcade">
                <picture class="image__wrapper">
                    <img src="../assets/images/icon-arcade.svg" alt="Joystick Drawing. Arcade plan.">
                </picture>
                <div class="plan__information">
                    <h3 class="plan__title">Arcade</h3>
                    
                    <p class="plan__price" v-if="isYearly">$90/yr</p>
                    <p class="plan__price" v-else>$9/mo</p>

                    <p v-show="isYearly">2 months free</p>
                </div>
            </section>

            <section class="plan__box plan__box--arcade" href="#">
                <picture class="image__wrapper">
                    <img src="../assets/images/icon-advanced.svg" alt="Another joystick Drawing. Advanced plan.">
                </picture>

                <div class="plan__information">
                    <h3 class="plan__title">Advanced</h3>
                    <!-- <p v-if="this.$refs.slider.style.gridColumnStart == '3'" class="plan__price">$120/yr</p> -->
                    <p class="plan__price">$12/mo</p>
                    <!-- <p v-show="this.$refs.slider.style.gridColumnStart == '3'">2 months free</p> -->
                </div>
            </section>
                
            <section class="plan__box plan__box--arcade" href="#">
                <picture class="image__wrapper">
                    <img src="../assets/images/icon-pro.svg" alt="Gaming controller drawing. Pro plan.">
                </picture>
                <div class="plan__information">
                    <h3 class="plan__title">Pro</h3>
                    <!-- <p v-if="this.$refs.slider.style.gridColumnStart == '3'" class="plan__price">$150/yr</p>   -->
                    <p class="plan__price">$15/mo</p>
                    <!-- <p v-show="this.$refs.slider.style.gridColumnStart == '3'">2 months free</p> -->
                </div>
            </section>
        </div>
    </section>
</template>

<style scoped lang="scss">
.plan-component {
    .row {
      display:flex;
      flex-direction:column;
      gap:2rem;
      .plan__box {
        padding:1.2rem;
        background:$White;
        border:1px solid $Pastelblue;
        display:grid;
        grid-template-columns: repeat(2, minmax(100px, 1fr));
        align-items:center;
        justify-items:start;
        cursor:pointer;
        &:hover, &:focus, &:active, &:focus-within {
          background:$Magnolia;
          border:1px solid $Purplishblue;
        }
    }
}
@media screen and (min-width:800px ) {
        .row {
            flex-direction:row;
            .plan__box {
                grid-template-columns:repeat(1, minmax(100px, 1fr));
                grid-template-rows:repeat(2, minmax(100px, 1fr));
            }
        }    
    }
}
  </style>