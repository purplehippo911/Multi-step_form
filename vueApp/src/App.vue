<script setup>
import { RouterLink, RouterView } from "vue-router";
import FormProcess from "./components/FormProcess.vue";
import ConfirmationButtons  from "./components/ConfirmationButtons.vue";
</script>

<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/step-2">View-2</router-link>
    </nav>
    <main>
        <div class="container row">
            <FormProcess/>
            <RouterView/>
            <ConfirmationButtons/>
        </div>
    </main>
</template>

<style scoped>
main {
   width:100%;
   padding:2rem; 
}
.row {
    display:flex;
    flex-direction:column;
    justify-content:center;
}

</style>
