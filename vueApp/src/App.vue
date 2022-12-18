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

<style lang="scss">
main {
   .row {
       flex-direction:column;
       section {
           width:80%;
       }
   }
}
.row {
    display:flex;
    align-items:center;
    justify-items: center;
}

.container {
    width:80%;
    margin:0 auto;
    gap:2rem;
}

section {
    .row {
        flex-direction:row;
    }
}

.form-process{
    padding:5rem;
    background:url("./assets/images/bg-sidebar-mobile.svg") no-repeat;
    background-size:cover;
    @media screen and (min-width: 700px) {
        background:url("./assets/images/bg-sidebar-desktop.svg") no-repeat;
    }
    .row {
        justify-content:center;
        .steps-wrapper {
            width:20%;
            .steps__text, .steps__title{
                display:none;
            }
            @media screen and (min-width: 700px) {
                .steps__text, .steps__title{
                    display:block;
                }
            }
        }
    }

}

</style>
