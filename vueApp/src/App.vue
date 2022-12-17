<script setup>
import { RouterLink, RouterView } from "vue-router";
import FormProcess from "./components/FormProcess.vue";
import ConfirmationButtons  from "./components/ConfirmationButtons.vue";
</script>

<template>
    <main>
        <div class="container row">
            <FormProcess/>
            <RouterView/>
            <ConfirmationButtons/>
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
   .row {
       flex-direction:column;
   }
}
.row {
    display:flex;
    justify-content:center;
}

.container {
    width:80%;
    background:greenyellow;
    margin:0 auto;
    gap:2rem;
}

section {
    width:80%;
}

.form-process {
    .row {
        flex-direction:row;
    }

    .steps-wrapper {
        display:flex;
    }
}

</style>
