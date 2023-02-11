import { defineStore } from "pinia";

export const usePlanStore = defineStore("plan", {
  state: () => ({
      isMonthly: true,
      isYearly:false,
      column: 0,
  }),
  actions: {

    checkState (state) {
      if(this.state == "monthly") {
        this.state.isMonthly = true;
      }
      else {
        state.isYearly = true;
      }
      return { isMonthly, isYearly }
    },

    toggleOpen() {
      try {
        document.body.classList.toggle("active");
        console.log("wokrs");
      } catch {
        console.log("no")
      }

    },

  }

});
