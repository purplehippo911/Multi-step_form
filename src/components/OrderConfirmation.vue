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
        align-self:center;
        background: $Strawberryred;
        border-radius:3rem;
        padding: .7rem;
        img {
            border-radius:2rem;
            padding: 1.5rem;
            background:white;
    
        }
    }
}

svg {
    height:60%;
    width:60%;
    stroke:$Strawberryred;
    fill:red;
    background: white;
}
</style>