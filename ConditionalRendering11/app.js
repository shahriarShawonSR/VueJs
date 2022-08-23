var appSrs = Vue.createApp({
  data() {
    return {
      show: false,
      skills: [
        { name: "HTML5", experience: 5 },
        { name: "CSS3", experience: 10 },
        { name: "JavaScript", experience: 15 },
        { name: "VueJs", experience: 20 },
        { name: "Java", experience: 4 },
        { name: "Python", experience: 3 },
        { name: "MySql", experience: 1 },
        { name: "SQLite", experience: 2 },
      ],
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  },
});
appSrs.mount("#app");
