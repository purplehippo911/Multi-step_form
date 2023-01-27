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
    .container {
        width:100%;
        height:100%;
        margin:0 auto;
    }
    
    .row {
        justify-content:center;
    }
    
    @media screen and (min-width: 800px) {
        padding:0 5rem;
        width:clamp(80%, 80%, 120%);
        grid-area: head;
        padding: 0;
        .row {
            flex-direction:column;
        }
    }
}

main {
    position: relative;
    top: -6rem;
    z-index:1;
    .container {
        max-width: 600px;
        padding:3rem 3rem;
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
