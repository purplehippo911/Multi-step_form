<script setup>
import InformationComponent from '../components/InformationComponent.vue';
import AddonsOptions from '../components/AddonsOptions.vue';
</script>

<template>
 <div class="add-ons-wrapper">
    <div class="container row">
        <InformationComponent informationTitle="Pick add-ons" informationText="Add-ons help enhance your gaming experience."/>
        <AddonsOptions/>
    </div>
 </div>
</template>

<style scoped lang="scss">
</style>