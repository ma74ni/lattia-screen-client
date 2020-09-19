document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      data: [],
      show: "",
      openTab: 1,
      database: firebase.database(),
    },
    props: {},
    mounted() {
      const starCountRef = this.database.ref("muestra");
      starCountRef.on("value", (snapshot) => {
        this.openTab = snapshot.val();
      });
      const seccitionsPage = new fullpage("#fullpage", {});
    },
  });
});
