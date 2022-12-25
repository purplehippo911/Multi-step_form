<script setup>
import { RouterLink, RouterView } from "vue-router";
import FormProcess from "./components/FormProcess.vue";
import ConfirmationButtons  from "./components/ConfirmationButtons.vue";
</script>

<template>
    <header>
        <div class="container row">
            <FormProcess/>
        </div>
    </header>
    <main>
        <div class="container row">
            <RouterView/>
        </div>
    </main>
    <footer>
        <div class="container row">
            <ConfirmationButtons/>
        </div>
    </footer>
</template>

<style scoped lang="scss">
    
    header {
        z-index:0;
        padding:5rem;
        background:url("./assets/images/bg-sidebar-mobile.svg") no-repeat;
        background-size:cover;
        .row {
            flex-direction:column;
        }
    }

main {
    position: relative;
    top: -3rem;
    .container {
        border-radius:10px;
        background:$White;
        padding:2rem 0;
    }
}


section {
    .row {
        flex-direction:row;
    }
}

footer {
    @media screen and (min-width:800px){
            grid-column:1 / -1;
        }
}

</style>
