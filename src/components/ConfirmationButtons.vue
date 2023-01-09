<script>

export default {
  data() {
      return {
        isBackButtonVisible:false
      }
    },
    methods: {
      incrementPage() {
        if(this.$route.path == "/") {
          this.$router.push("/plan");
          this.isBackButtonVisible = true;
      }
      else if(this.$route.path == "/plan") {
        this.$router.push("/add_ons")
      }
      else if(this.$route.path == "/add_ons")
        this.$router.push("/summary")
      else
        throw errror;
        console.log("cant route any further")
    },
    
    decrementPage() {
      if(this.$route.path == "/plan")
        this.$router.push("/");
        this.isBackButtonVisible = false;
      else if(this.$route.path == "/add_ons")
        this.$router.push("/plan");
      else if(this.$route.path == "/summary") 
        this.$router.push("/add_ons");  
      else 
        return "Cant turn back."
    }
  },
  mounted() {
    this.checkBackButton;
  },
} 
</script>

<template>
  <section class="confirmation-buttons">
    <div class="container row">
      <a class="back-button" v-show="isBackButtonVisible" @click="decrementPage">Go Back</a>
      <button class="next-button" @click="incrementPage">Next</button>  
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
            cursor:pointer;
            background:$Marineblue;
            color:$White;
          }
        }
}
</style>
