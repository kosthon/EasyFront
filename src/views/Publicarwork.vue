<template>
  <div>
    <cabeza></cabeza>
    <trabajo></trabajo>
    <pie></pie>
  </div>
</template>

<script>
import cabeza from "../components/HeaderLogin";
import trabajo from "../components/RegistrarTrabajo";
import pie from "../components/Footer";
export default {
  components: {
    cabeza,
    trabajo,
    pie
  },
  methods: {
    strogeIsHere() {
      var sesion = localStorage.getItem("usertoken");
      if (!sesion) {
        this.$router.push({ name: "home" });
      }
    }
  },
  mounted() {
    this.strogeIsHere();
  }
};
</script>
