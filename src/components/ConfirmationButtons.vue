<script>

export default {
  data() {
    return {
      lastPage:false
    }
  },
   methods: {
     incrementPage(e) {
      if(this.$route.path == "/") {
        this.$router.push("/plan");
      }
      else if(this.$route.path == "/plan") {
        this.$router.push("/add_ons")
      }
      else if(this.$route.path == "/add_ons") {
        this.$router.push("/summary")
      }
      else {
        console.log("cant route any further")
        throw error;
      }
    },
      decrementPage() {
          this.$router.go(-1);
      },
      finishSummary() {
        const summaryView = document.querySelector(".summary-view");
        this.lastPage = true;
        summaryView.classList.add("close");
      }
    }
  }
</script>

<template>
  <section class="confirmation-buttons" v-if="!lastPage">
    <div class="container row">
      <a v-show="this.$route.path != '/'" class="back-button" ref="backButton" @click="decrementPage">Go Back</a>
      <button v-if="this.$route.path == '/summary'" class="next-button" @click="finishSummary">Finish</button>
      <input type="submit" v-else class="next-button" @click="incrementPage" value="Next Step"/>
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
            &:hover, &:focus {
              color:$Purplishblue;
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
