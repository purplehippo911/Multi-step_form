<script>
export default {
  setup() {
   const incrementPage = () => {
      router.go(1);
    }
    const decrementPage = () => {
      router.go(-1);
    }
  },
}
</script>

<template>
  <section class="confirmation-buttons">
    <div class="container row">
      <a class="back-button" href="/">Go Back</a>
      <button class="next-button" @click="incrementPage()">Next</button>  
    </div>
  </section>
</template>

<style lang="scss">
.confirmation-buttons {
    background:$White;
    padding:2rem;
    position:relative;
    bottom:0;
    .row {
      flex-direction:row;
      justify-content: space-between;
      gap:2rem;
        .back-button {
            color:$CoolGray;
            padding:2rem;
          }
          
          .next-button {
            margin-left:auto;
            padding: .8rem 2.3rem;
            border-radius: 1rem;
            border:none;
            align-self: center;
            background:$Marineblue;
            color:$White;
          }
        }
}
</style>
