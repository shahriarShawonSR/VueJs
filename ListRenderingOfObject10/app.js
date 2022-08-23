var appSrs = Vue.createApp({
  data() {
    return {
      aboutMe: {
        name: "Shahriar Shawon",
        nickName: "Shawon",
        website: "https//google.com",
      },
      skills: [
        { name: "HTML5", experience: 5 },
        { name: "CSS3", experience: 10 },
        { name: "JavaScript", experience: 15 },
        { name: "VueJs", experience: 20 },
      ],
    };
  },
  methods: {},
});
appSrs.mount("#app");
