<script setup>
import InformationComponent from '../components/InformationComponent.vue';
import SummaryComponent from '../components/SummaryComponent.vue';
import OrderConfirmation from '../components/OrderConfirmation.vue';
</script>

<template>
    <div class="finishing-component">
        <div class="container row">
            <InformationComponent informationTitle="Pick add-ons" informationText="Add-ons help enhance your gaming experience."/>
            <SummaryComponent/>
            <OrderConfirmation/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.finishing-component {
    .row {
        flex-direction:column;
    }
    .order-confirmation {
        display:none;
        opacity:0;
    }
}
</style>