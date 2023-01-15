import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  state: () => {
    return {
        isMonthly: true,
        isYearly:false 

      }
  },
  actions: {
    checkMonthly (state) {
      state.isMonthly = true;
      state.isYearly = false;
    },
    checkYearly (state) {
      state.isYearly = true;
      state.isMonthly = false;
    }
  }

  return { isMonthly, isYearly };
});
