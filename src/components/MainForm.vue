<script setup>
</script>

<template>
  <form id="form">
    <div class="container row">

      <section class="form__input-wrapper">
        <label for="name" class="form__label">Name</label>
        <input type="text" class="form__input" placeholder="e.g. Stephen King">
      </section>
          
      <section class="form__input-wrapper">
        <label for="email address" class="form__label" placeholder="John Doe">Email Address</label>
        <input type="text" class="form__input" placeholder="e.g. stephenking@lorem.com">
      </section>
          

      <section class="form__input-wrapper">
        <label for="phone number" class="form__label">Phone Number</label>
        <input type="text" class="form__input" placeholder="e.g. +1 234 567 890">
      </section>
      
    </div>
  </form>
</template>

<style scoped lang="scss">
 #form {
  width:100%;
  .row{
    gap:2rem;
  }
  .form__input-wrapper {
    width:100%;
    label {
        color:$Marineblue;
      }

      input {
        width:100%;
        padding:1em 2em;
        padding-inline-start:1rem;
    }
  }
    }
</style>
