var appSrs = Vue.createApp({
  data() {
    return {
      review: "",
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
      newSkill: { name: "", experience: 0 },
    };
  },

  computed: {
    totalCount1() {
      console.log("Count from computed property");
      return this.skills.length;
    },
    exSkill() {
      let es = this.skills.filter(item => {
        return item.experience >= 10;
      });
      return es;
    },
  },

  methods: {
    // addSkill() {
    //   this.skills.push(this.newSkill);
    //   this.newSkill = "";
    // },
    removeSkill(key) {
      this.skills.splice(key, 1);
    },
    totalCount() {
      console.log("Count from method");
      return this.skills.length;
    },
  },
});
appSrs.mount("#app");
