import { defineStore } from "pinia";

export const usePlanStore = defineStore("plan", {
  state: () => ({
      isMonthly: true,
      isYearly:false,
      column: 0,
  }),
  getters: {
    checkState () { 
      // checking which yearly plan is true
      if(document.body.classList === "active"){
        this.isMonthly = true;
        this.isYearly = false;
        console.log("Monthly plan enabled");
      }
      else {
        this.isYearly = true;
        this.isMonthly = false;          
        console.log("Yearly plan enabled");
      }
    }
    },
  actions: {
    toggleOpen() {
        // toggling on and of the togglers active class
        document.body.classList.toggle("active");
        this.checkState

    },
  }

});
