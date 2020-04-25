<template>
<div class="ayuda">
    <header>
        <div class="continer-header">
            <div class="logo">
                <router-link to="/">
                    <img src="../assets/header/logo.jpg" />
                </router-link>
            </div>
            <div class="menu">
                <nav>
                    <ul>
                        <li>
                            <router-link to="/">
                                <a href="">Inicio</a>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/soporte">
                            <a href="">Soporte</a>
                            </router-link>
                        </li>
                        <li>
                            <a >
                                <div @click="popIn()" id="button" class="login">
                                    <p>Iniciar Sesión</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <!--Incio maquetación del Pop-up de login-->
    <div class="bg-modal chao">
        <div class="login1">
            <div class="top">
                <h2>Login</h2>
                <ul>
                    <li>
                        <img src="../assets/header/email.png" alt="">
                    </li>
                    <li>
                        <img src="../assets/header/facebook.png" alt="">
                    </li>
                    <li>
                        <img src="../assets/header/twitter.png" alt="">
                    </li>
                </ul>
            </div>
            <div class="separador">
                <div class="left"></div>
                <p>O</p>
                <div class="rigth"></div>
            </div>
            <form @submit.prevent="loginUser(logUser)">
                <div class="user">
                    <p>Email</p>
                    <div class="inputUser">
                        <img src="../assets/header/emailICon.png" alt="">
                        <input type="text" name="" v-model="logUser.email" placeholder="Escribe tu email">
                    </div>
                </div>
                <div class="user">
                    <p>Password</p>
                    <div class="inputUser">
                        <img src="../assets/header/password.png" alt="">
                        <input type="password" name="" v-model="logUser.password" placeholder="Escribe tu contraseña">
                    </div>
                </div>
                <div class="forget">
                    <a href="">¿Olvidaste tu contraseña?</a>
                </div>
                <div class="boton">
                    <input type="submit" value="Ingresar">
                </div>
            </form>
            <div class="separador-bot"></div>
            <div class="new">
                <a @click="register()" id="buttonR">¿No tienes una cuenta? Regístrate</a>
            </div>
        </div>
    </div>
    <!--Fin maquetación del Pop-up de login-->
    
    <!--Inicio maquetación del Pop-up de registrar-->
        <div class="bg-modalAcom">
            <section class="loginR">
                <div class="topAcom">
                    <h2>Regístrate para publicar tu trabajo </h2>
                    <ul>
                        <li>
                            <img src="../assets/acompanamiento/email.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/acompanamiento/facebook.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/acompanamiento/twitter.png" alt="">
                        </li>
                    </ul>
                </div>
                <div class="separadorAcom">
                    <div class="leftAcom"></div>
                    <p>O</p>
                    <div class="rigthAcom"></div>
                </div>
                <form @submit.prevent="addUser(newUser)">
                    <div class="userAcom">
                        <p>Username</p>
                        <div class="inputUserAcom">
                            <img src="../assets/acompanamiento/user.png" alt="">
                            <input type="text" name="" v-model="newUser.nombre" placeholder="Escribe tu nick">
                        </div>
                    </div>
                    <div class="userAcom">
                        <p>Teléfono</p>
                        <div class="inputUserAcom">
                            <img src="../assets/acompanamiento/telefono.png" alt="">
                            <input type="text" name="" v-model="newUser.telefono" placeholder="Escribe tu teléfono">
                        </div>
                    </div>
                    <div class="userAcom">
                        <p>E-mail</p>
                        <div class="inputUserAcom">
                            <img src="../assets/acompanamiento/emailIcon.png" alt="">
                            <input type="text" name="" v-model="newUser.email" placeholder="Escribe tu e-mail">
                        </div>
                    </div>
                    <div class="userAcom">
                        <p>Contraseña</p>
                        <div class="inputUserAcom">
                            <img src="../assets/acompanamiento/password.png" alt="">
                            <input type="password" name="" v-model="newUser.password" placeholder="Escribe tu contraseña">
                        </div>
                    </div>
                    <div class="botonR">
                        <input type="submit" value="Únete">
                    </div>
                    <div class="verificar">
                        <p>Al registrarte, confirmas que aceptas los Términos y condiciones y la Política de privacidad. </p>
                    </div>
                </form>
                <div class="separador-botAcom"></div>
                <div class="newAcom">
                    <a id="buttonAcom" @click="popIn()">¿Ya tíenes una cuenta? Inicía sesión.</a>
                </div>
            </section>
        </div>
        <!--fin maquetación del Pop-up de registrar-->

</div>
</template>


<script>
import routesApi from '../backRoutes';

export default {
    data(){
        return{
            newUser:{
                nombre:  '',
                telefono: '',
                email:    '',
                password:''
            },
            logUser:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        popIn(){
            document.querySelector("#buttonAcom").addEventListener('click', function(e){
                document.querySelector('.bg-modalAcom').style.display = 'none';
                document.querySelector('.bg-modal').style.display = 'flex';
            });

            document.querySelector("#button").addEventListener('click', function(e){
                document.querySelector('.bg-modalAcom').style.display = 'none';
                document.querySelector('.bg-modal').style.display = 'flex';
            });
            var container = document.querySelector('.bg-modal');

            document.addEventListener('click',function(e){
                var click = e.target;
                if(click == container){
                    document.querySelector('.bg-modal').style.display = 'none';
                }
            });
        },
        register(){
            document.querySelector("#buttonR").addEventListener('click', function(e){
                document.querySelector('.bg-modal').style.display = 'none';
                document.querySelector('.bg-modalAcom').style.display = 'flex';
            });
            var container = document.querySelector('.bg-modalAcom');

            document.addEventListener('click',function(e){
                var click = e.target;
                if(click == container){
                    document.querySelector('.bg-modalAcom').style.display = 'none';
                }
            });
        },
        addUser(newUser){
            this.axios.post(routesApi.user.register, newUser)
            .then(res => {
                this.newUser = {};
                console.log(res.data);
            })
        },
        loginUser(data){
            this.axios.post(routesApi.user.login, data)
            .then(res => {

                var jwt = res.data;
                localStorage.setItem('usertoken',jwt);
                this.logUser = {};
                this.$router.push({name: 'newTrabajo'})
            });
        }
    }
}
</script>

<style scoped>

/*Inicio estilos del header */
body{
    background: rgba(243, 241, 255, 0.7);
}

header{
    width: 100%;
    height: 100px;
}

.continer-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #ffffff;
}

.logo{
    width: 362px;
    height: 85px;
    margin-left: 49px;
}

.logo img{
    position: relative;
    width: 100%;
    height: 100%;
}

header nav ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
    list-style: none;
    background-color: #ffffff;
    margin-right: 130px;
    
}

header nav ul li a{
    background-color: #ffffff;
    width: 103px;
    text-decoration: none;
    height: 50px;
    color:#1A059B;
    cursor: pointer;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
}

header nav ul li a div{
    width: 210px;
    height: 45px;
    background: linear-gradient(270deg, #5B7CF0 0%, rgba(88, 31, 249, 0.94) 67.59%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    margin-top:-8px;
    text-align: center;
    color:#ffffff;
    margin-right: 38px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
/*Fin estilos del header */

/*Inicio estilos del Pop-up de login */

.bg-modal{
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
    z-index: 99;
}


.login1{
    position: relative;
    width: 30%;
    height: 650px;
    margin:0px auto;
    background-color: #F3F1FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.top{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.top h2{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    color: #1A059B;
    margin-top:36px;
    text-align: center;
    height: 47px;
    margin-left: 9px;
}

.top ul{
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top:50px;
    margin-right: 34px;
}

.top ul li{
    margin-left: 34px;
    width: 40px;
    height: 40px;
}

.separador{
    width: 100%;
    margin-top:40px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.left{
    height: 0px;
    width: 39%;
    border: 0.5px solid rgba(26, 5, 155, 0.7);
    margin-left: 25px;
}

.rigth{
    height: 0px;
    width: 39%;
    border: 0.5px solid rgba(26, 5, 155, 0.7);
    margin-right: 29px;
}

.separador p{
    margin-left: 29px;
    margin-right: 25px;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #1A059B;
}

.user{
    width: 84%;
    margin: 29px auto;
    height: 59px;
    border-bottom:2px solid rgba(26, 5, 155, 0.5);
}

.user p{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #1A059B;
}


.user img{
    margin-right: 6px;
    margin-top: 6px;
}
.inputUser{
    display: flex;
    flex-direction: row;
}

.inputUser input{
    border:none;
    outline: none;
    background-color: transparent;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: rgba(26, 5, 155, 0.5);
    margin-top: 6px;
}

.forget{
    width: 83%;
    margin: -18px auto;
    text-align: right;
}

.forget a{
    text-decoration: none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    color: #1A059B;
}

.boton{
    width: 90%;
    height: 50px;
    margin: 60px auto;
}

.boton input{
    background: linear-gradient(270deg, #5B7CF0 0%, rgba(88, 31, 249, 0.94) 67.59%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    width: 100%;
    height: 100%;
    border:none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
}

.boton input:focus{
    outline: none;
}

.separador-bot{
    width: 92%;
    height: 0px;
    top: 580px;
    border: 0.5px solid rgba(26, 5, 155, 0.7);
    margin: -31px auto;
}

.new{
    width: 100%;
    text-align: center;
    margin: 65px auto;
}

.new a{
    text-decoration: none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    color: #1A059B;
    cursor: pointer;
}

/*Fin estilos del Pop-up de login */

/*Inicio estilos del Pop-Up de registrar */
.bg-modalAcom{
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.5);
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
    z-index: 99;
    position: fixed;
}


.loginR{
    position: relative;
    width:40%;
    height: 93%;
    margin:50px auto;
    background-color: #F3F1FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    z-index: 99;
}

.topAcom{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.topAcom h2{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    color: #1A059B;
    margin-top:36px;
    text-align: center;
    height: 47px;
    margin-bottom: 24px;
}


.topAcom ul{
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top:50px;
    margin-right: 34px;

}

.topAcom ul li{
    margin-left: 34px;
    width: 40px;
    height: 40px;
    margin-top:-45px;
}

.separadorAcom{
    width: 100%;
    margin-top:20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.leftAcom{
    height: 0px;
    width: 28%;
    border: 0.5px solid rgba(26, 5, 155, 0.7);
    margin-left: 25px;
}

.rigthAcom{
    height: 0px;
    width: 28%;
    border: 0.5px solid rgba(26, 5, 155, 0.7);
    margin-right: 29px;
}

.separadorAcom p{
    margin-left: 29px;
    margin-right: 25px;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #1A059B;
}

.userAcom{
    width: 83%;
    margin: 29px auto;
    height: 45px;
    border-bottom:2px solid rgba(26, 5, 155, 0.5);
    margin-bottom: -5px;
}

.userAcom p{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #1A059B;
    margin-bottom: 15px;
}


.userAcom img{
    width: 20px;
    height: 20px;
    margin-right: 6px;
    margin-top: -12px;
}

.inputUserAcom{
    display: flex;
    flex-direction: row;
}

.inputUserAcom input{
    border:none;
    outline: none;
    background-color: transparent;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: rgba(26, 5, 155, 0.5);
    margin-top:-13px;
}

.botonR{
    width: 90%;
    height: 50px;
    margin: 26px auto;
}

.botonR input{
    background: linear-gradient(270deg, #5B7CF0 0%, rgba(88, 31, 249, 0.94) 67.59%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    width: 100%;
    height: 100%;
    border:none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
}

.botonR input:focus{
    outline: none;
}

.verificar{
    text-align: center;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: #1A059B;
    margin-top: 18px;
    margin-bottom:14pxpx ;
}


.verificar p{
    margin: 0 auto;
    width: 100%;
    height: 32px;
}


.separador-botAcom{
    width: 92%;
    height: 0px;
    border: 0.5px solid rgba(26, 5, 155, 0.7);
    margin: 14px auto;
}

.newAcom{
    width: 100%;
    text-align: center;
    margin: 0 auto;
}

.newAcom a{
    text-decoration: none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    color: #1A059B;
    cursor:pointer;
}
/*Fin estilos del Pop-Up de registrar */

</style>