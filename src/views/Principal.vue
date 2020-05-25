<template>
  <div>
    <cabeza />
    <cuerpo />
    <pie />
  </div>
</template>

<script>
import cabeza from "../components/HeaderIniciado";
import cuerpo from "../components/Workbody";
import pie from "../components/Footer";

export default {
  components: {
    cabeza,
    cuerpo,
    pie
  }
};
</script>

<style></style>
