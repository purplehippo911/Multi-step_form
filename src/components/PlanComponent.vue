<script setup>
</script>

<template>
    <div class="plan-component">
        <div class="container row">
            <section class="plan__box plan__box--arcade">
                <picture class="image__wrapper">
                    <img src="../assets/images/icon-arcade.svg" alt="Joystick Drawing. Arcade plan.">
                </picture>
                    <div class="plan__information">
                        <h3 class="plan__title">Arcade</h3>
                        <p class="plan__price">$9/mo</p>
                    </div>
            </section>

            <section class="plan__box plan__box--arcade" href="#">
                <picture class="image__wrapper">
                    <img src="../assets/images/icon-advanced.svg" alt="Another joystick Drawing. Advanced plan.">
                </picture>

                <div class="plan__information">
                    <h3 class="plan__title">Advanced</h3>
                    <p class="plan__price">$12/mo</p>
                    <p v-if="isYearly" class="plan__price">$12/mo</p>
                </div>
            </section>
                
            <section class="plan__box plan__box--arcade" href="#">
                <picture class="image__wrapper">
                    <img src="../assets/images/icon-pro.svg" alt="Gaming controller drawing. Pro plan.">
                </picture>
                <div class="plan__information">
                    <h3 class="plan__title">Pro</h3>
                    <p class="plan__price">$15/mo</p>   
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped lang="scss">
.plan-component {
    .row {
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
  </style>