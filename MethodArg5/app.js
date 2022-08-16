var appSrs = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment(amount) {
      this.count = this.count + amount;
    },
    decrement(amount) {
      this.count = this.count - amount;
    },
    test() {
      console.log("test");
    },
  },
});
appSrs.mount("#app");
