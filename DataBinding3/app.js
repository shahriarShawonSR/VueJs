var appSrs = Vue.createApp({
  data() {
    return {
      guideInfo: {
        name: "Guide of Vue Js 3",
        gitHubLink: "https://github.com/shahriarshawon01/VueJs",
      },
      vueGuide:
      '<a href="https://vuejs.org/guide/quick-start.html#with-build-tools">VueGuide</a>',
    };
  },
});
appSrs.mount("#app");
``