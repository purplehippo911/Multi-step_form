<script>
</script>

<template>
  <section class="confirmation-buttons">
    <div class="container row">
      <a class="back-button" href="/">Go Back</a>
      <button class="next-button">Next</button>  
    </div>
  </section>
</template>

<style lang="scss">
.confirmation-buttons {
    background:$White;
    padding:2rem;
    z-index:1;
    position:relative;
    bottom:0;
    .row {
      flex-direction:row;
      align-items: center;
        .back-button {
            color:$CoolGray;
            padding:2rem;
          }
          
          .next-button {
            margin-left:auto;
            padding: .8rem 2.3rem;
            border-radius: 20px;
            border:none;
            align-self: center;
            background:$Marineblue;
            color:$White;
          }
        }
}
</style>
