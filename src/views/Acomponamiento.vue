<template>
    <div>
        <cabeza></cabeza>
        <acompanamiento></acompanamiento>
        <pie></pie>
  </div>
</template>

<script>
import cabeza         from '../components/HeaderLogout';
import pie            from '../components/Footer';
import acompanamiento from '../components/RegistrarTrabajo'

export default {
  components:{cabeza,pie, acompanamiento},
}
</script>