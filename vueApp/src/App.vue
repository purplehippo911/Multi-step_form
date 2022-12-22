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

<style lang="scss">
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
    
    main, header, footer {
        .row {
            flex-direction:column;
            section {
           width:80%;
        }
    }
}

main {
    .container {
        position: relative;
        top: -3rem;
        padding:4rem 1rem;
        background:$White;
    }
}

header {
    z-index:0;
    padding:5rem;
    background:url("./assets/images/bg-sidebar-mobile.svg") no-repeat;
    background-size:cover;
    .row {
        flex-direction:column;
    }
}

section {
    .row {
        flex-direction:row;
    }
}

.form-process{
    .container {
        width:100%;
    }
    .row {
        .steps-wrapper {
            width:20%;
            .steps__count {
                padding:.5em;
                border:1px solid $White;
                border-radius:20px;
                font-weight:700;
            }
            .steps__text, .steps__title{
                display:none;
            }
        }
    }

    @media screen and (min-width: 700px) {
        background:url("./assets/images/bg-sidebar-desktop.svg") no-repeat;
        .row {
            flex-direction:column;
            align-content:flex-start;
            .steps-wrapper {
                display:flex;
                .steps__text, .steps__title{
                    display:block;
                }
            }
        }
    }

}

.confirmation-buttons {
    background:$White;
    padding:2rem;
    z-index:1;
    position:relative;
    bottom:0;
    .row {
        .back-button {
            color:$CoolGray;
        }

        .next-button {
            margin-left:auto;
            padding:.8rem 2.3rem;
            border-radius: 20px;
            border:none;
            background:$Marineblue;
            color:$White;
        }
    }
}

.finishing-component {
    .row {
        flex-direction:column;
    }
    .order-confirmation {
        display:none;
        opacity:0;
    }
}

.form-component {
    .information__title {
        font-weight:600;
        color:$Marineblue;
    }
    .information__text {
        color:$CoolGray;
    }

    #form {
        display:flex;
        flex-direction:column;
        width:100%;
        gap:1rem;

        label {
            color:$Marineblue;
        }

        input {
            padding:1em 2em;
            padding-inline-start:1rem;
        }
    }
}
</style>
