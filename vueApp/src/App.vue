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
    padding: 8rem 0rem;
    background-color: $Marineblue;
    background: url("./assets/images/bg-sidebar-mobile.svg") no-repeat;
    background-size:cover;

    .row {
        flex-direction: column;
        align-items: center;
    }

    @media screen and (min-width: 800px) {
        background: url("./assets/images/bg-sidebar-desktop.svg") no-repeat;
        border-radius: 1rem;
        grid-area: head;
    }
}

main {
    position: relative;
    top: -3rem;

    .container {
        max-width: 500px;
        border-radius: 1rem;
        background: $White;
    }

    @media screen and (min-width: 800px) {
        padding: 5rem;
        grid-area: main;
        top:0;
    }
}


section {
    .row {
        flex-direction: row;
    }
}

footer {
    @media screen and (min-width:800px) {
        grid-area: foot;
    }
}
</style>
