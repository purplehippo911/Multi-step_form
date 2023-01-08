<script>
export default {
   methods: {
     incrementPage() {
      if(this.$route.path == "/")
       this.$router.push("/plan");
      else if(this.$route.path == "/plan") {
        this.$refs.backButton.style.display = "block";
        this.$refs.backButton.style.opacity = "1";
        this.$router.push("/add_ons")
      }
      else if(this.$route.path == "/add_ons")
        this.$router.push("/summary")
      else
        throw error;
        console.log("cant route any further")
      }
      ,
      decrementPage() {
        if(this.$route.path == "/") {
          this.$refs.backButton.style.display = "hidden";
          this.$refs.backButton.style.opacity = "0";
          return "Can't go beyond this page!";
        }
        else {
          this.$refs.backButton.style.display = "block";
          this.$refs.backButton.style.opacity = "1";
          this.$router.go(-1);
        }
      }
    }
}
</script>

<template>
  <section class="confirmation-buttons">
    <div class="container row">
      <a class="back-button" ref="backButton" @click="decrementPage">Go Back</a>
      <button class="next-button" @click="incrementPage">Next Step</button>  
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
            display:none;
            opacity:0;
            &:hover, &:focus {
              background:$Purplishblue;
            }
          }
          
          .next-button {
            margin-left:auto;
            padding: .5rem 1.5rem;
            border-radius: 1rem;
            font:inherit;
            font-weight:500;
            border:none;
            align-self: center;
            cursor:pointer;
            background:$Marineblue;
            color:$White;
            &:hover, &:focus {
              background:$Purplishblue;
            }
          }
        }
}
</style>
