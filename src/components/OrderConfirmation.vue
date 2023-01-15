<script setup>
import HeroComponent from './HeroComponent.vue';
</script>

<template>
    <section class="order-confirmation">
        <div class="container row">
            <picture>
                <img src="../assets/images/icon-checkmark.svg" alt="Your order was confirmed! A checkmark for you"/>
            </picture>
            <HeroComponent informationTitle="Thank you!" informationText="Thanks for confirming your subscription!
              We hope you have fun using our
              platform. If you ever need support,
              please feel free to email us at
              support@loremgaming.com."/>
        </div>
    </section>
</template>

<style scoped lang="scss">

.order-confirmation {
    width:100%;
}

.row {
    text-align:center;
    
    picture {
        width:100%;
        background:url("../assets/images/icon-checkmark.svg") no-repeat;
        background-size:100%;
        padding:2rem;
        display:block;
        img {
            max-width:100%;
            display:block;
    
        }
    }
}
</style>