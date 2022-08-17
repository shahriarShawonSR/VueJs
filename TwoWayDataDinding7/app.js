var appSrs = Vue.createApp({
  data() {
    return {
      number: "",
      result: "",
    };
  },
  methods: {
    // handleInput(eventPass) {
    //   // console.log(eventPass);
    //   this.number = eventPass.target.value;
    // },
    getDouble() {
      this.result = this.number * 2;
    },
    getSquare() {
      this.result = this.number * this.number;
    },
    addTen(){
      this.result = this.number + 10;
    },
    reset() {
      this.number = "";
      this.result = "";
    },
  },
});
appSrs.mount("#app");
