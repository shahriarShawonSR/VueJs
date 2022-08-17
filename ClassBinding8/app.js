var appSrs = Vue.createApp({
  data() {
    return {
      activeClass: "red",
    };
  },
  methods: {
    setClass(className) {
      this.activeClass = className;
    },
  },
});
appSrs.mount("#app");
