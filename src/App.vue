<script setup>
import { RouterView } from "vue-router";
import FormProcess from "./components/FormProcess.vue";
import ConfirmationButtons from "./components/ConfirmationButtons.vue";
</script>

<template>
        <header>
            <div class="container row">
                <FormProcess />
            </div>
        </header>
        <main>
            <div class="container row">
                <RouterView />
            </div>
        </main>
        <footer>
            <div class="container row">
                <ConfirmationButtons />
            </div>
        </footer>
</template>

<style scoped lang="scss">
header {
    height:100%;
    width:100%;
    padding:5rem;
    background-color: $Marineblue;
    background: url("./assets/images/bg-sidebar-mobile.svg") no-repeat;
    background-size:cover;

    .container {
        max-width:100%;
    }
    
    .row {
        flex-direction: column;
        align-items:center;
        justify-content: center;
        align-self: center;
    }
    
    @media screen and (min-width: 800px) {
        background: url("./assets/images/bg-sidebar-desktop.svg") no-repeat;
        background-size:100%;
        border-radius: 2rem;
        grid-area: head;
        width:62%;
        padding:1rem;
    }
}

main {
    position: relative;
    top: -3rem;
    z-index:1;
    .container {
        max-width: 600px;
        padding:5rem;
        border-radius: 1rem;
        background: $White;
    }

    @media screen and (min-width: 800px) {
        grid-area: main;
        top:0;
    }
}


section {
    .row {
        justify-content:flex-start;
    }
}

footer {
    @media screen and (min-width:800px) {
        grid-area: foot;
    }
}
</style>
