<template>
    <div>
        <h1>Holy</h1>
        <a @click="logout()">Logout</a>
    </div>
</template>

<script>
import jwtDecode from 'jwt-decode';

export default {
    methods:{
        logout(){
            localStorage.removeItem('usertoken')
            this.$router.push({name: 'home'});
        },
        setUser(){
            const token   = localStorage.getItem('usertoken')
            const decode  = jwtDecode(token);
            
        },
        
  },
  mounted(){
    this.setUser();
  },
}
</script>

<style scoped>

a{
    cursor: pointer;
}

</style>