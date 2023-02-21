import { defineStore } from "pinia";

export const usePlanStore = defineStore("plan", {
  state: () => ({
    isMonthly: true,
    isYearly: false,
  }),
  getters: {
    checkPlan() {      

      // checking which yearly plan is true
      if (document.body.classList == "active") {
        this.isMonthly = true;
        this.isYearly = false;
        console.log("Monthly plan enabled");
      }
      else if(document.body.classList != "active") {
        this.isYearly = true;
        this.isMonthly = false;
        console.log("Yearly plan enabled");
      }
      else {
        console.log("didnt work")
      }
    }
  },
  actions: {
    toggleOpen() {
      // toggling on and of the togglers active class
      document.body.classList.toggle("active");
    },
  }

});
