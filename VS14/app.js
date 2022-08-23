var appSrs = Vue.createApp({
  data() {
    return {
      firstName: "",
      lastName: "",
      fullName: ""
    };
  },
  computed: {
    // fullName(){
    //   let name =  this.firstName + " " + this.lastName;
    //   return name;
    // }
  },
  methods: {
    // fullName() {
    //   let name = this.firstName + " " + this.lastName;
    //   return name;
    // }
  },
  watch: {
    firstName(newValue) {
      this.fullName = newValue + " " + this.lastName;
    },
    lastName(newValue) {
      this.fullName = this.firstName + " " + newValue;
    }
  },
});
appSrs.mount("#app");
