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