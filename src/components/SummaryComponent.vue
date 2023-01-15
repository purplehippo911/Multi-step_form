<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="summary-component">
        <div class="container col">
            <section class="summary-container">
                <div class="container col">
                    <section class="summary__section summary__plan">
                        <div class="information__wrapper">
                            <strong class="summary__title">Arcade (Montly)</strong>
                            <br>
                            <router-link to="/plan" class="summary__change">Change</router-link>
                        </div>
                        <strong class="summary__price summary__price--bold">$9/mo</strong>
                    </section>

                    <section class="summary__section summary__service">
                        <p class="service__information">Online service</p>
                        <strong class="service__price">+$1/mo</strong>
                    </section>

                    <section class="summary__section summary__storage">
                        <p class="service__information">Larger storage</p>
                        <strong class="service__price">+$2/mo</strong>
                    </section>
                </div>
            </section>

            <section class="total-section">
                <p class="service__information">Total (per month)</p>
                <strong class="service__price--total">+$12/mo</strong>
            </section>
        </div>
    </section>
</template>

<style scoped lang="scss">

.summary-component {
    .summary__change {
        color:$Purplishblue;
    }
    p {
        display:block;
        opacity:1;
        color:$CoolGray;
    }

    .summary__price, .service__price {
        margin-left:auto;
    }

    .summary-container {
        background:$Magnolia;
        width:100%;
    }

    .summary__section {
        padding:1rem;
        display:grid;
        grid-template-columns: repeat(2, minmax(50%, 1fr));
    }

    .total-section {
        width:100%;
        display:flex;
        justify-content:space-between;
        margin-top:2rem;
    }
}

</style>