<script setup>
import MainForm from "../components/MainForm.vue";
</script>

<template>
  <div class="form-component">
    <MainForm/>
  </div>
</template>

<style lang="scss">
.form-component {
    

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
