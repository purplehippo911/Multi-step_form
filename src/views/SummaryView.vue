<script setup>
    import InformationComponent from '../components/InformationComponent.vue';
    import SummaryComponent from '../components/SummaryComponent.vue';
    import OrderConfirmation from '../components/OrderConfirmation.vue';
</script>

<template>
    <section class="summary-view">
        <div class="container row">
            <section class="primary-section"> 
                <InformationComponent informationTitle="Finishing up" informationText="Double-check everything looks OK before."/>
                <SummaryComponent/>
            </section>

            <section class="secondary-section">
                <OrderConfirmation/>
            </section>
        </div>
    </section>
</template>

<style scoped lang="scss">
.finishing-view {
    .row {
        flex-direction:column;
    }
    .order-confirmation {
        display:none;
        opacity:0;
    }
}
</style>