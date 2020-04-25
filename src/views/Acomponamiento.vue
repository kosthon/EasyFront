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
  methods:{
    strogeIsHere(){
            var sesion = localStorage.getItem('usertoken');
            if(sesion){
                this.$router.push({name: 'newTrabajo'});
            }
        }
  },
  mounted(){
    this.strogeIsHere();
  }
}
</script>