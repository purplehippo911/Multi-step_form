<script>
export default {
  name: "PlanToggle",
  data() {
    return {
      
    }
  },
  methods: {
    toggleOpen() {
      let column = 0;
      const toggler = document.querySelector(".slider__ball");
      const anotherFunction = function() {
          ++column;
          console.log(column);
        }
        if (column == 1) {
            toggler.style.gridColumnStart = "1";
        }
        else if (column == 2) {
            toggler.style.gridColumnStart = "3";
        }
        else {
        }
        anotherFunction();
    },
  },
}
</script>

<template>
    <div class="plan-toggler">
        <div class="container row">
            <h3 class="subscription-toggle__plan-title">Monthly</h3>
            
            <div class="slider">
                <div class="slider__item" v-on:click="toggleOpen">
                    <strong class="slider__ball" v-on:click="toggleOpen" ref="slider"></strong>
                </div>
            </div>

            <h3 class="subscription-toggle__plan-title">Yearly</h3>
        </div>
    </div>
</template>