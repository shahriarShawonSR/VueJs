var appSrs = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    // getCurrentTime() {
    //   let currentTime = new Date();
    //   return new Date();
    //   return currentTime;
    // },
    increment() {
      // this.count = this.count + 1;
      this.count++;
    },
    decrement() {
      // this.count = this.count - 1;
      this.count--;
      // if (d == 0) {
      //   window.alert("Stop");

      // }
    },
  },
});
appSrs.mount("#app");
