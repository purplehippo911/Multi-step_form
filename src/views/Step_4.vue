<script setup>
import SummaryComponent from '../components/SummaryComponent.vue';
import OrderConfirmation from '../components/OrderConfirmation.vue';
</script>

<template>
    <div class="finishing-component">
        <SummaryComponent/>
        <OrderConfirmation/>
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