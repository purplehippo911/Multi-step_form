<script setup>
    import HeroComponent from '../components/HeroComponent.vue';
    import SummaryComponent from '../components/SummaryComponent.vue';
    import OrderConfirmation from '../components/OrderConfirmation.vue';
</script>

<template>
    <section class="summary-view">
        <div class="container row">
            <section class="primary-section"> 
                <HeroComponent class="hero-component" informationTitle="Finishing up" informationText="Double-check everything looks OK before."/>
                <SummaryComponent/>
            </section>

            <section class="secondary-section">
                <OrderConfirmation/>
            </section>
        </div>
    </section>
</template>

<style scoped lang="scss">
.summary-view {
    .row {
        flex-direction:column;
        
        .hero-component {
            margin-bottom:2rem;
        }
        .secondary-section {
            display:none;
            opacity:0;
        }
    }
}
</style>