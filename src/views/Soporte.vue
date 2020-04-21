<template>
    <div>
        <cabeza></cabeza>
        <soporte></soporte>
        <pie></pie>
  </div>
</template>

<script>
import cabeza  from '../components/HeaderLogout';
import pie     from '../components/Footer';
import soporte from '../components/Support'

export default {
  components:{cabeza, soporte, pie},
}
</script>