<script setup>
import SummaryComponent from '../components/SummaryComponent.vue';
</script>

<template>
    <div class="finishing">
        <div class="container row">
            <h2 class="informatinon__title">Finishing up</h2>
            <p class="information__text">Double-check everything looks OK before confirming.</p>
            <SummaryComponent/>
            <div class="total-information">
                <p class="total__text">Total(per month)</p>
                <strong class="total__price">$12/mo</strong>
            </div>
        </div>
    </div>
</template>