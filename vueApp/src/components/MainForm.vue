<script setup>
</script>

<template>
  <div class="form">
    <div class="container row">
      <div class="information">
        <h2 class="information__title">Personal info</h2>
        <p class="information__text">Please provide your name, email address, and phone number.</p>
      </div>

      <form id="form">
        <label for="name" class="form__label">Name</label>
        <input type="text" class="form__input">
        
        <label for="email address" class="form__label" placeholder="John Doe">Email Address</label>
        <input type="text" class="form__input" placeholder="something@somewhere.com">
        
        <label for="phone number" class="form__label">Phone Number</label>
        <input type="text" class="form__input" placeholder="e.g +1 234 567 890">
      </form>
    </div>
  </div>
</template>
