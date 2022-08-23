var appSrs = Vue.createApp({
  data() {
    return {
      skills: [
        // "HTML5",
        // "CSS3",
        // "JavaScript",
        { name: "HTML5", experience: 5 },
        { name: "CSS3", experience: 10 },
        { name: "JavaScript", experience: 15 },
        { name: "VueJs", experience: 20 },
      ],
      // newSkill: "",
      newSkill: {name: "", experience: 0},
    };
  },
  methods: {
    addSkill() {
      // Push an array
      // this.skills.push(this.newSkill);
      // Push a object
      this.skills.push(this.newSkill);
      this.newSkill = "";
    },
    removeSkill(key) {
      this.skills.splice(key, 1);
    },
  },
});
appSrs.mount("#app");
