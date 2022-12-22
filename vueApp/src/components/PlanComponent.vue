<script setup>
</script>

<template>
    <div class="plan-component">
        <div class="container row">
            <section class="information">
                <h2 class="information__title">Select your plan</h2>
                <p class="information__text">
                    You have the option of monthly or yearly billing
                </p>
            </section>

            <section class="plans-wrapper">
                    <div class="plan__box plan__box--arcade">
                        <picture class="image__wrapper">
                            <img src="../assets/images/icon-arcade.svg" alt="Joystick Drawing. Arcade plan.">
                        </picture>
                        <div class="plan__information">
                            <h3 class="plan__title">Arcade</h3>
                            <p class="plan__price">$9/mo</p>
                        </div>
                    </div>

                    <div class="plan__box plan__box--arcade" href="#">
                        <picture class="image__wrapper">
                            <img src="../assets/images/icon-advanced.svg" alt="Another joystick Drawing. Advanced plan.">
                        </picture>
                        <div class="plan__information">
                            <h3 class="plan__title">Advanced</h3>
                            <p class="plan__price">$12/mo</p>
                        </div>
                    </div>
                
                    <div class="plan__box plan__box--arcade" href="#">
                        <picture class="image__wrapper">
                            <img src="../assets/images/icon-pro.svg" alt="Gaming controller drawing. Pro plan.">
                        </picture>
                        <div class="plan__information">
                            <h3 class="plan__title">Pro</h3>
                            <p class="plan__price">$15/mo</p>   
                        </div>
                    </div>
            </section>
        </div>
    </div>
</template>