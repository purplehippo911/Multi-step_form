<script setup>
import AddonsOptions from '../components/AddonsOptions.vue';
</script>

<template>
 <div class="add-ons-wrapper">
    <div class="container row">
        <div class="add-ons__information">
            <h2 class="information__title">Pick add-ons</h2>
            <p class="information__text">
                Add-ons help enhance your gaming experience.
            </p>
        </div>

        <AddonsOptions/>
    </div>
 </div>
</template>

<style lang="scss">

.add-ons-wrapper {
    .container {
        width:100%;
        .add-ons__options {
            width: 100%;
            .container {
                padding:0;
                width:100%;
        
            }
        }
    }
}

.options__option {
    display:grid;
    grid-template-columns: repeat(3, 1fr);
}
</style>