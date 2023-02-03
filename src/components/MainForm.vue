<script setup>
const form = document.querySelector("#form");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputNumber = document.querySelector("#phone-number");

let isWrong = false;
let isEmpty = false;

function checkEmpty() {
  // full name
  if(inputName.value === "" || inputName.value === null) {
    isWrong = true;
    isEmpty = true;
  }
  // telephone number
  else if(inputNumber.value === "" || lastName.value == null) {
      isWrong = true;
      isEmpty = true;
  }
  // email
  else if(email.value === "" || email.value == null || !email.validity.valid) {
    isWrong = true;
    isEmpty = true;
  }
}


</script>

<template>
  <form id="form" @submit="checkEmpty">
    <div class="container row">

      <section class="form__input-wrapper">
        <label for="name" class="form__label">Name</label>
        <input type="text" class="form__input" id="name" placeholder="e.g. Stephen King"/>
        <div class="input-error-wrapper" v-show="isWrong">
          <span v-if="isEmpty">This field is required </span>
          <span v-else>This field is required </span>
        </div>
      </section>
          
      <section class="form__input-wrapper">
        <label for="email address" class="form__label" placeholder="John Doe">Email Address</label>
        <input type="text" class="form__input" id="email" placeholder="e.g. stephenking@lorem.com">
      </section>
          

      <section class="form__input-wrapper">
        <label for="phone number" class="form__label">Phone Number</label>
        <input type="text" class="form__input" id="phone-number" placeholder="e.g. +1 234 567 890">
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
        color:$Pastelblue;
        padding-inline-start:1rem;
        border-radius: .5rem;
        border:2px solid $Pastelblue;
        &:hover, &:focus-visible {
          border: 1px solid $Purplishblue;
        }
    }
  }
 }
</style>
