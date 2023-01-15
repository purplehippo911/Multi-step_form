<script>
export default {
  data() {
    return {
      column:0,
      isMonthly:true,
      isYearly:false
    }
  },
  name: "PlanToggle",
  methods: {
    toggleOpen() {
      this.column++;
      
      if(this.column == 2 )  {
          this.$refs.slider.style.gridColumnStart = "3";
          
          this.isYearly = true;
          this.isMonthly = false;
          
      }
      else if(this.column > 4 )  {
          this.column = 0;
          this.$refs.slider.style.gridColumnStart = "1";

          this.isMonthly = true;
          this.isYearly = false;
      }
    },
}
}

</script>

<template>
  <section class="plan-toggler">
    <div class="container row">
      <h3 class="subscription-toggle__plan-title">Monthly</h3>
      
      <div class="slider">
        <div class="slider__item" @click="toggleOpen">
          <strong class="slider__ball" @click="toggleOpen" ref="slider"></strong>
        </div>
      </div>

      <h3 class="subscription-toggle__plan-title">Yearly</h3>
    </div>
  </section>
</template>

<style scoped lang="scss">
.plan-toggler {
    background:$Magnolia;
    padding:2rem;
    .row {
      flex-direction:row;
      align-items:center;
    }

    .container {
      background:inherit;
    }
}

.slider {
  width: 30%;
  .slider__item {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    justify-self: center;
    background: $Marineblue;
    padding: 0.1rem;
    border-radius: 20px;
    .slider__ball {
      background: $White;
      width: auto;
      padding: 0.8rem;
      border-radius: 50%;
      transition: 0.5s;
      grid-column: 0;
      box-shadow: -1px -1px $Marineblue;
    }
  }
}
</style>