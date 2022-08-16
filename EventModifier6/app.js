var appSrs = Vue.createApp({
  data() {
    return {
      name: "",
    };
  },
  methods: {
    handleKeyUp(e) {
      // console.log(e.target.value);
      this.name = e.target.value;
    },
    handleFormSubmit(eve){
      console.log(eve);
    },
    handleCardClick(e){
      console.log(e);
      console.log("Card Clicked");
    },
    handleViewClick(e){
      console.log(e);
      console.log("View Clicked");
    },
  },
});
appSrs.mount("#app");
